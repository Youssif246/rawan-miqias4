import { Injectable, signal, computed } from '@angular/core';
import {
  AssessmentDomain,
  AssessmentItem,
  ChildProfile,
  ItemEvaluation,
  DomainCalculation,
  EligibilityFormData
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

  // Official Standard Report Text for Early Intervention Eligibility
  readonly DEFAULT_REPORT_TEXT =
    'تكشف هذه المقارنات أن درجات الأهداف العامة للمجالات للطفل أدنى من درجات القطع في كل المجالات النمائية الخمس التي يقيمها اختبار نظام القياس والتقويم والبرمجة ومن المرجح جداً أن يكون أداؤه أدنى بصورة ملحوظة من أقرانه في العمر الزمني ولذلك يستحق تلقي خدمات التدخل المبكر';

  // 5 Standard Developmental Domains for Cutoff Eligibility Report
  readonly eligibilityDomainDefs = [
    { domainId: 'domain_1', title: 'مجال الحركات الدقيقة', defaultBenchmark: 6.5 },
    { domainId: 'domain_2', title: 'مجال الحركات الكبيرة', defaultBenchmark: 8 },
    { domainId: 'domain_3', title: 'المجال التكيفي', defaultBenchmark: 9.5 },
    { domainId: 'domain_4', title: 'المجال المعرفي', defaultBenchmark: 22 },
    { domainId: 'domain_6', title: 'المجال الاجتماعي', defaultBenchmark: 16.5 }
  ];

  // Eligibility / Cutoff Form State
  readonly eligibilityForm = signal<EligibilityFormData>({
    ageInMonths: '',
    observationStartDate: '',
    observationEndDate: '',
    benchmarks: {
      'domain_1': 6.5,
      'domain_2': 8,
      'domain_3': 9.5,
      'domain_4': 22,
      'domain_6': 16.5
    },
    customChildScores: {},
    customNotes: {},
    needsIntervention: true,
    reportText: this.DEFAULT_REPORT_TEXT
  });

  // Comparison between Child's Goal Scores and Age Benchmark Cutoff Scores
  readonly eligibilityComparison = computed(() => {
    const form = this.eligibilityForm();
    const domainCalcs = this.domainCalculations();

    return this.eligibilityDomainDefs.map(def => {
      // Automatic cutoff score computed from observation tables:
      const dCalc = domainCalcs.find(c => c.domainId === def.domainId);
      const autoScore = dCalc ? dCalc.cutoffScore : 0;

      const customScore = form.customChildScores[def.domainId];
      const childScore = customScore !== undefined && customScore !== null ? customScore : autoScore;

      const benchmarkScore = form.benchmarks[def.domainId] ?? def.defaultBenchmark;
      const isUnderCutoff = childScore < benchmarkScore;

      const defaultNote = isUnderCutoff ? 'تدخل مبكر' : 'ضمن النطاق الملائم';
      const note = form.customNotes[def.domainId] !== undefined ? form.customNotes[def.domainId] : defaultNote;

      return {
        domainId: def.domainId,
        title: def.title,
        childScore,
        autoScore,
        isCustomScore: customScore !== undefined && customScore !== null,
        benchmarkScore,
        isUnderCutoff,
        note
      };
    });
  });

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
      if (parentCurrent.isAutoCalculated) {
        evals[parentItemId] = {
          ...parentCurrent,
          score: null,
          isAutoCalculated: false
        };
      }
      return;
    }

    // STRICT REQUIREMENT:
    // Only calculate when ALL sub-items have been answered!
    // If some sub-items are still unanswered, DO NOT prematurely assign a score to the parent!
    const allAnswered = answeredScores.length === subItemIds.length;
    if (!allAnswered) {
      if (parentCurrent.isAutoCalculated) {
        evals[parentItemId] = {
          ...parentCurrent,
          score: null,
          isAutoCalculated: false
        };
      }
      return;
    }

    const allAreTwo = answeredScores.every(s => s === 2);
    const allAreZero = answeredScores.every(s => s === 0);

    let calculatedScore: number;

    if (allAreTwo) {
      // إذا حصلت جميع البنود الفرعية التابعة له على درجة (2)، يتم تلقائياً تعيين درجة البند الرئيسي (ص) = 2.
      calculatedScore = 2;
    } else if (allAreZero) {
      // إذا حصلت جميع البنود الفرعية التابعة له على درجة (0)، يتم تلقائياً تعيين درجة البند الرئيسي (ص) = 0.
      calculatedScore = 0;
    } else {
      // في حال وجود تفاوت أو اختلاف في الدرجات الفرعية (مزيج بين 1 و 2، أو 0 و 1، أو لم تكن كلها متطابقة 2 أو كلها 0)، يتم تعيين درجة البند الرئيسي (ص) = 1.
      calculatedScore = 1;
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

  updateEligibilityField<K extends keyof EligibilityFormData>(field: K, value: EligibilityFormData[K]) {
    this.eligibilityForm.update(prev => ({
      ...prev,
      [field]: value
    }));
  }

  updateBenchmark(domainId: string, value: number) {
    this.eligibilityForm.update(prev => ({
      ...prev,
      benchmarks: {
        ...prev.benchmarks,
        [domainId]: value
      }
    }));
  }

  updateCustomChildScore(domainId: string, value: number | null) {
    this.eligibilityForm.update(prev => ({
      ...prev,
      customChildScores: {
        ...prev.customChildScores,
        [domainId]: value
      }
    }));
  }

  updateCustomNote(domainId: string, value: string) {
    this.eligibilityForm.update(prev => ({
      ...prev,
      customNotes: {
        ...prev.customNotes,
        [domainId]: value
      }
    }));
  }

  resetReportText() {
    this.eligibilityForm.update(prev => ({
      ...prev,
      reportText: this.DEFAULT_REPORT_TEXT
    }));
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
    this.eligibilityForm.set({
      ageInMonths: '',
      observationStartDate: '',
      observationEndDate: '',
      benchmarks: {
        'domain_1': 6.5,
        'domain_2': 8,
        'domain_3': 9.5,
        'domain_4': 22,
        'domain_6': 16.5
      },
      customChildScores: {},
      customNotes: {},
      needsIntervention: true,
      reportText: this.DEFAULT_REPORT_TEXT
    });
    this.activeDomainId.set(this.domains[0]?.id || '');
    this.activeView.set('assessment');
  }

  printAssessment() {
    window.print();
  }
}
