import { Injectable, signal, computed } from '@angular/core';
import {
  AssessmentDomain,
  ChildProfile,
  ItemEvaluation,
  DomainCalculation
} from '../models/assessment.model';
import { ASSESSMENT_DOMAINS } from '../data/assessment-domains';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  readonly domains: AssessmentDomain[] = ASSESSMENT_DOMAINS;

  readonly activeView = signal<'assessment' | 'cutoff' | 'summary'>('assessment');
  readonly activeDomainId = signal<string>(this.domains[0]?.id || '');

  // Exact fields from document:
  readonly childProfile = signal<ChildProfile>({
    childName: '',
    birthDate: '',
    assessmentDate: new Date().toISOString().split('T')[0],
    familyAddress: '',
    formFiller: '',
    examiner: '',
    testPeriod: 'الفترة الأولى',
    notes: ''
  });

  // Map of itemId -> evaluation { score, noteSymbol, customNote }
  readonly evaluations = signal<Record<string, ItemEvaluation>>({});

  // Official Note Symbols verbatim from document:
  // ل=ملحوظات, د=مفتاح الدرجات, س=قُدمت له مساعدة, س ع=السلوك أُعيق, خ م=اختبار مباشر, ع=تعديل/تكييف, ج=جودة الأداء, ق=تقرير
  readonly noteSymbols = [
    { code: 'س', label: 'قُدمت له مساعدة', shortLabel: 'مساعدة' },
    { code: 'س ع', label: 'السلوك أُعيق', shortLabel: 'سلوك أُعيق' },
    { code: 'خ م', label: 'اختبار مباشر', shortLabel: 'اختبار مباشر' },
    { code: 'ع', label: 'تعديل/تكييف', shortLabel: 'تعديل/تكييف' },
    { code: 'ج', label: 'جودة الأداء', shortLabel: 'جودة الأداء' },
    { code: 'ق', label: 'تقرير', shortLabel: 'تقرير' },
  ];

  // Official maximum possible raw score specified in document for each domain:
  // مجال الحركات الدقيقة: 30
  // مجال الحركات الكبيرة: 30
  // المجال التكيفي: 70
  // المجال المعرفي: 106
  // مجال التواصل الاجتماعي: 166
  // المجال الاجتماعي: 94
  readonly officialMaxScores: Record<string, number> = {
    'مجال الحركات الدقيقة': 30,
    'مجال الحركات الكبيرة': 30,
    'المجال التكيفي': 70,
    'المجال المعرفي': 106,
    'مجال التواصل الاجتماعي': 166,
    'المجال الاجتماعي': 94
  };

  // Calculations for each domain
  readonly domainCalculations = computed<DomainCalculation[]>(() => {
    const evals = this.evaluations();
    return this.domains.map(domain => {
      let totalScore = 0;
      let calculatedMax = 0;
      let cutoffScore = 0;
      let cutoffMaxScore = 0;
      let completedItems = 0;
      let totalItems = 0;

      domain.strands.forEach(strand => {
        strand.items.forEach(item => {
          totalItems++;
          calculatedMax += item.maxScore;
          const evaluation = evals[item.id];
          const hasScore = evaluation && evaluation.score !== null && evaluation.score !== undefined;
          const score = hasScore ? evaluation.score! : 0;

          if (hasScore) {
            completedItems++;
            totalScore += score;
          }

          // Cutoff score item: (ص)
          if (item.isCutoff) {
            cutoffMaxScore += item.maxScore;
            if (hasScore) {
              cutoffScore += score;
            }
          }
        });
      });

      // Use exact official max score from doc if available, otherwise calculated
      const maxScore = this.officialMaxScores[domain.title] || calculatedMax;
      const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
      const cutoffPercentage = cutoffMaxScore > 0 ? Math.round((cutoffScore / cutoffMaxScore) * 100) : 0;

      return {
        domainId: domain.id,
        domainTitle: domain.title,
        shortTitle: domain.shortTitle,
        icon: domain.icon,
        totalScore,
        maxScore,
        percentage,
        cutoffScore,
        cutoffMaxScore,
        cutoffPercentage,
        completedItems,
        totalItems
      };
    });
  });

  // Overall Totals across all 6 domains
  readonly overallTotals = computed(() => {
    const calcs = this.domainCalculations();
    const totalScore = calcs.reduce((acc, c) => acc + c.totalScore, 0);
    const maxScore = calcs.reduce((acc, c) => acc + c.maxScore, 0);
    const cutoffScore = calcs.reduce((acc, c) => acc + c.cutoffScore, 0);
    const cutoffMaxScore = calcs.reduce((acc, c) => acc + c.cutoffMaxScore, 0);
    const completedItems = calcs.reduce((acc, c) => acc + c.completedItems, 0);
    const totalItems = calcs.reduce((acc, c) => acc + c.totalItems, 0);
    const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
    const cutoffPercentage = cutoffMaxScore > 0 ? Math.round((cutoffScore / cutoffMaxScore) * 100) : 0;

    return {
      totalScore,
      maxScore,
      cutoffScore,
      cutoffMaxScore,
      completedItems,
      totalItems,
      percentage,
      cutoffPercentage
    };
  });

  updateProfile(field: keyof ChildProfile, value: string) {
    this.childProfile.update(prev => ({
      ...prev,
      [field]: value
    }));
  }

  setScore(itemId: string, score: number) {
    this.evaluations.update(prev => {
      const current = prev[itemId] || { score: null };
      const newScore = current.score === score ? null : score;
      return {
        ...prev,
        [itemId]: { ...current, score: newScore }
      };
    });
  }

  setNoteSymbol(itemId: string, symbol: string) {
    this.evaluations.update(prev => {
      const current = prev[itemId] || { score: null };
      const newSymbol = current.noteSymbol === symbol ? undefined : symbol;
      return {
        ...prev,
        [itemId]: { ...current, noteSymbol: newSymbol }
      };
    });
  }

  setCustomNote(itemId: string, customNote: string) {
    this.evaluations.update(prev => {
      const current = prev[itemId] || { score: null };
      return {
        ...prev,
        [itemId]: { ...current, customNote }
      };
    });
  }

  quickFillDomain(domainId: string, score: number) {
    const domain = this.domains.find(d => d.id === domainId);
    if (!domain) return;
    this.evaluations.update(prev => {
      const next = { ...prev };
      domain.strands.forEach(s => {
        s.items.forEach(item => {
          next[item.id] = { ...(next[item.id] || {}), score };
        });
      });
      return next;
    });
  }

  resetAll() {
    this.evaluations.set({});
    this.childProfile.set({
      childName: '',
      birthDate: '',
      assessmentDate: new Date().toISOString().split('T')[0],
      familyAddress: '',
      formFiller: '',
      examiner: '',
      testPeriod: 'الفترة الأولى',
      notes: ''
    });
    this.activeDomainId.set(this.domains[0]?.id || '');
    this.activeView.set('assessment');
  }

  printAssessment() {
    window.print();
  }
}
