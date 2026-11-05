export interface AssessmentItem {
  id: string;
  itemNumber: string; // e.g. "1-", "1.1", "2-", "2.1", "2.2"
  paperNumber?: string; // original paper numbering string
  text: string;
  raw: string;
  isCutoff: boolean; // Indicates (ص) cutoff score item (Main Item)
  maxScore: number;
  parentItemId?: string; // ID of the parent cutoff item if this is a sub-item
  subItemIds?: string[]; // IDs of sub-items if this is a main cutoff item
}

export interface AssessmentStrand {
  title: string;
  items: AssessmentItem[];
}

export interface AssessmentDomain {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  description?: string;
  strands: AssessmentStrand[];
}

export interface ChildProfile {
  childName: string;
  birthDate: string;
  assessmentDate: string;
  familyAddress: string;
  formFiller: string; // اسم الشخص الذي يكمل الاستمارة
  testPeriod: string;
  notes: string;
}

export interface ItemEvaluation {
  score: number | null; // 0, 1, 2
  noteSymbol?: string; // س, س ع, خ م, ع, ج, ق
  customNote?: string;
  isAutoCalculated?: boolean; // Indicates main item score calculated from sub-items
}

export interface DomainCalculation {
  domainId: string;
  domainTitle: string;
  shortTitle: string;
  icon: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  cutoffScore: number;
  cutoffMaxScore: number;
  cutoffPercentage: number;
  completedItems: number;
  totalItems: number;
}

export interface EligibilityFormData {
  ageInMonths: string; // العمر الزمني للطفل بالأشهر
  observationStartDate: string; // تاريخ بدء الملاحظة
  observationEndDate: string; // تاريخ الانتهاء من الملاحظة
  benchmarks: Record<string, number>; // درجات القطع للشريحة العمرية لكل مجال
  customChildScores: Record<string, number | null>; // درجات الطفل المعدلة يدوياً إن رغب
  customNotes: Record<string, string>; // الملاحظات لكل مجال
  needsIntervention: boolean; // هل يحتاج الطفل إلى خدمات التدخل المبكر
  reportText: string; // نص التقرير
}

export interface ObservationPrintSection {
  strandTitle: string;
  items: AssessmentItem[];
}

export interface ObservationPrintPage {
  domainId: string;
  domainTitle: string;
  domainIndex: number;
  isTwoColumn: boolean;
  columns: ObservationPrintSection[][];
  totalItems: number;
}
