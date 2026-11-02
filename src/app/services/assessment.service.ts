import { Injectable, signal, computed } from '@angular/core';
import {
  AssessmentDomain,
  AssessmentItem,
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

  // Exact profile fields with duplicate examiner removed:
  readonly childProfile = signal<ChildProfile>({
    childName: '',
    birthDate: '',
    assessmentDate: new Date().toISOString().split('T')[0],
    familyAddress: '',
    formFiller: '',
    testPeriod: 'الفترة الأولى',
    notes: ''
  });

  // Map of itemId -> evaluation { score, noteSymbol, customNote, isAutoCalculated }
  readonly evaluations = signal<Record<string, ItemEvaluation>>({});

  // Fast item lookup map
  readonly itemMap = new Map<string, AssessmentItem>();

  constructor() {
    for (const domain of this.domains) {
      for (const strand of domain.strands) {
        for (const item of strand.items) {
          this.itemMap.set(item.id, item);
        }
      }
    }
  }

  // Official Note Symbols verbatim from approved document:
  readonly noteSymbols = [
    { code: 'س', label: 'قُدمت له مساعدة', shortLabel: 'مساعدة' },
    { code: 'س ع', label: 'السلوك أُعيق', shortLabel: 'سلوك أُعيق' },
    { code: 'خ م', label: 'اختبار مباشر', shortLabel: 'اختبار مباشر' },
    { code: 'ع', label: 'تعديل/تكييف', shortLabel: 'تعديل/تكييف' },
    { code: 'ج', label: 'جودة الأداء', shortLabel: 'جودة الأداء' },
    { code: 'ق', label: 'تقرير', shortLabel: 'تقرير' },
  ];

  // Official maximum possible raw score specified in document for each domain:
  readonly officialMaxScores: Record<string, number> = {
    'مجال الحركات الدقيقة': 30,     // 15 items * 2
    'مجال الحركات الكبيرة': 34,     // 17 items * 2
    'المجال التكيفي': 70,           // 35 items * 2
    'المجال المعرفي': 106,          // 53 items * 2
    'مجال التواصل الاجتماعي': 98,    // 49 items * 2
    'المجال الاجتماعي': 94          // 47 items * 2
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

  /**
   * Scoring Logic complying with exact client specifications:
   * بالنسبة للبند الرئيسي (ص) الذي يندرج تحته بنود فرعية (مثل 2.1 و 2.2):
   * - إذا حصلت جميع البنود الفرعية التابعة له على درجة (2)، يتم تلقائياً تعيين درجة البند الرئيسي (ص) = 2.
   * - إذا حصلت جميع البنود الفرعية التابعة له على درجة (0)، يتم تلقائياً تعيين درجة البند الرئيسي (ص) = 0.
   * - في حال وجود تفاوت أو اختلاف في الدرجات الفرعية (مزيج بين 1 و 2، أو 0 و 1، أو لم تكن كلها متطابقة 2 أو كلها 0)، يتم تعيين درجة البند الرئيسي (ص) = 1.
   * - يجب أن تتحدث قيمة البند الرئيسي تلقائياً عند تغيير أي درجة من درجات البنود الفرعية التابعة له.
   */
  setScore(itemId: string, score: number) {
    this.evaluations.update(prev => {
      const current = prev[itemId] || { score: null };
      const newScore = current.score === score ? null : score;

      const next = {
        ...prev,
        [itemId]: { ...current, score: newScore, isAutoCalculated: false }
      };

      const item = this.itemMap.get(itemId);
      if (!item) return next;

      // If this item is a sub-item, recalculate its parent cutoff item
      if (item.parentItemId) {
        this.updateParentCutoffScore(item.parentItemId, next);
      }

      return next;
    });
  }

  /**
   * Recalculates the parent (ص) item score based on all its sub-items
   */
  private updateParentCutoffScore(parentItemId: string, evals: Record<string, ItemEvaluation>) {
    const parentItem = this.itemMap.get(parentItemId);
    if (!parentItem || !parentItem.subItemIds || parentItem.subItemIds.length === 0) {
      return;
    }

    const subItemIds = parentItem.subItemIds;
    const subScores = subItemIds.map(id => evals[id]?.score);
    const answeredScores = subScores.filter((s): s is number => s !== null && s !== undefined);

    const parentCurrent = evals[parentItemId] || { score: null };

    // If no sub-items are answered at all, reset parent score to null
    if (answeredScores.length === 0) {
      evals[parentItemId] = {
        ...parentCurrent,
        score: null,
        isAutoCalculated: false
      };
      return;
    }

    const allAnswered = answeredScores.length === subItemIds.length;
    const allAreTwo = allAnswered && answeredScores.every(s => s === 2);
    const allAreZero = allAnswered && answeredScores.every(s => s === 0);

    let calculatedScore: number;

    if (allAreTwo) {
      // إذا حصلت جميع البنود الفرعية التابعة له على درجة (2)، يتم تلقائياً تعيين درجة البند الرئيسي (ص) = 2.
      calculatedScore = 2;
    } else if (allAreZero) {
      // إذا حصلت جميع البنود الفرعية التابعة له على درجة (0)، يتم تلقائياً تعيين درجة البند الرئيسي (ص) = 0.
      calculatedScore = 0;
    } else if (allAnswered) {
      // في حال وجود تفاوت أو اختلاف في الدرجات الفرعية (مزيج بين 1 و 2، أو 0 و 1، أو لم تكن كلها متطابقة 2 أو كلها 0)، يتم تعيين درجة البند الرئيسي (ص) = 1.
      calculatedScore = 1;
    } else {
      // Partial evaluation (some answered, some not yet answered):
      const has2 = answeredScores.includes(2);
      const has0 = answeredScores.includes(0);
      const has1 = answeredScores.includes(1);

      if (has1 || (has2 && has0)) {
        // Any variation or score of 1 means it cannot be all 2 or all 0
        calculatedScore = 1;
      } else if (answeredScores.every(s => s === 2)) {
        // All answered so far are 2
        calculatedScore = 2;
      } else if (answeredScores.every(s => s === 0)) {
        // All answered so far are 0
        calculatedScore = 0;
      } else {
        calculatedScore = 1;
      }
    }

    evals[parentItemId] = {
      ...parentCurrent,
      score: calculatedScore,
      isAutoCalculated: true
    };
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
          next[item.id] = { ...(next[item.id] || {}), score, isAutoCalculated: item.isCutoff };
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
