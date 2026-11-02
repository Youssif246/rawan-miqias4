export interface AssessmentItem {
  id: string;
  text: string;
  raw: string;
  isCutoff: boolean; // Indicates (ص) cutoff score item
  maxScore: number;
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
  formFiller: string;
  examiner: string;
  testPeriod: string;
  notes: string;
}

export interface ItemEvaluation {
  score: number | null; // 0, 1, 2
  noteSymbol?: string; // س, س ع, خ م, ع, ج, ق
  customNote?: string;
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
