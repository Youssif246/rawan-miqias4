import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssessmentService } from './services/assessment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly service = inject(AssessmentService);

  // 3 Official Stages (بيانات الطفل والتعليمات، جداول الملاحظة والتقييم، استمارة درجات القطع والأهلية):
  readonly currentPage = signal<1 | 2 | 3>(1);
  readonly printMode = signal<'all' | 'cutoff-only'>('all');

  // Age preset benchmarks for AEPS cutoff scores
  readonly ageBracketPresets = [
    { label: 'شريحة 60 - 71 شهراً (5 إلى 6 سنوات)', values: { domain_1: 6.5, domain_2: 8, domain_3: 9.5, domain_4: 22, domain_6: 16.5 } },
    { label: 'شريحة 48 - 59 شهراً (4 إلى 5 سنوات)', values: { domain_1: 5.5, domain_2: 7, domain_3: 8, domain_4: 18, domain_6: 14 } },
    { label: 'شريحة 36 - 47 شهراً (3 إلى 4 سنوات)', values: { domain_1: 4.5, domain_2: 5.5, domain_3: 6.5, domain_4: 14, domain_6: 11 } }
  ];

  applyAgePreset(preset: typeof this.ageBracketPresets[0]) {
    for (const [domId, val] of Object.entries(preset.values)) {
      this.service.updateBenchmark(domId, val);
    }
  }

  getEffectiveAgeMonths(): string {
    const custom = this.service.eligibilityForm().ageInMonths;
    if (custom && custom.trim().length > 0) return custom;
    const birth = this.service.childProfile().birthDate;
    if (!birth) return '٧١ شهراً';
    const bDate = new Date(birth);
    const now = new Date(this.service.childProfile().assessmentDate || new Date());
    if (isNaN(bDate.getTime())) return '٧١ شهراً';
    let months = (now.getFullYear() - bDate.getFullYear()) * 12 + (now.getMonth() - bDate.getMonth());
    if (now.getDate() < bDate.getDate()) months--;
    return months > 0 ? `${months} شهراً` : '٧١ شهراً';
  }

  // Active domain in page 2 (0 to 5)
  readonly activeDomainIndex = signal<number>(0);

  // Track which items have their notes / conditions drawer expanded
  readonly expandedNotes = signal<Record<string, boolean>>({});

  // Toggles for Domain 5 official supplementary forms
  readonly showObservationSheet = signal<boolean>(false);
  readonly showLanguageSummarySheet = signal<boolean>(false);

  readonly currentDomain = computed(() => {
    return this.service.domains[this.activeDomainIndex()] || this.service.domains[0];
  });

  readonly currentDomainCalc = computed(() => {
    return this.service.domainCalculations()[this.activeDomainIndex()];
  });

  getShortTitle(title: string): string {
    if (title.includes('التواصل الاجتماعي')) return 'التواصل الاجتماعي';
    if (title.includes('الحركات الدقيقة')) return 'الحركات الدقيقة';
    if (title.includes('الحركات الكبيرة')) return 'الحركات الكبيرة';
    if (title.includes('التكيفي')) return 'المجال التكيفي';
    if (title.includes('المعرفي')) return 'المجال المعرفي';
    if (title.includes('الاجتماعي')) return 'المجال الاجتماعي';
    return title.replace(/^مجال\s+/, '').trim();
  }

  // Navigation
  setPage(page: 1 | 2 | 3) {
    this.currentPage.set(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setDomain(idx: number) {
    this.activeDomainIndex.set(idx);
    this.service.activeDomainId.set(this.service.domains[idx].id);
    this.showObservationSheet.set(false);
    this.showLanguageSummarySheet.set(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  nextDomain() {
    if (this.activeDomainIndex() < this.service.domains.length - 1) {
      this.setDomain(this.activeDomainIndex() + 1);
    }
  }

  prevDomain() {
    if (this.activeDomainIndex() > 0) {
      this.setDomain(this.activeDomainIndex() - 1);
    }
  }

  // Evaluation getters & setters
  getScore(itemId: string): number | null {
    return this.service.evaluations()[itemId]?.score ?? null;
  }

  setScore(itemId: string, score: number) {
    this.service.setScore(itemId, score);
  }

  isAutoCalculated(itemId: string): boolean {
    return !!this.service.evaluations()[itemId]?.isAutoCalculated;
  }

  getNoteSymbol(itemId: string): string | undefined {
    return this.service.evaluations()[itemId]?.noteSymbol;
  }

  getNote(itemId: string): string {
    return this.service.evaluations()[itemId]?.customNote ?? '';
  }

  setNote(itemId: string, note: string) {
    this.service.setCustomNote(itemId, note);
  }

  toggleNoteDrawer(itemId: string) {
    this.expandedNotes.update(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  }

  isNoteDrawerOpen(itemId: string): boolean {
    return !!this.expandedNotes()[itemId];
  }

  hasNotesOrSymbol(itemId: string): boolean {
    const ev = this.service.evaluations()[itemId];
    return !!(ev?.noteSymbol || (ev?.customNote && ev.customNote.trim().length > 0));
  }

  resetAll() {
    if (confirm('هل ترغب في بدء استمارة جديدة ومسح البيانات الحالية؟')) {
      this.service.resetAll();
      this.activeDomainIndex.set(0);
      this.currentPage.set(1);
      this.showObservationSheet.set(false);
      this.showLanguageSummarySheet.set(false);
      this.expandedNotes.set({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  printReport(mode: 'all' | 'cutoff-only' = 'all') {
    this.printMode.set(mode);
    const prevTitle = document.title;
    if (mode === 'cutoff-only') {
      document.title = 'درجات القطع لنظام القياس والتقويم والبرمجة AEPS - تقرير الأهلية لخدمات التدخل المبكر';
    } else {
      document.title = 'نظام القياس والتقويم والبرمجة (AEPS) - تقرير تسجيل بيانات ملاحظة الطفل';
    }
    setTimeout(() => {
      window.print();
      document.title = prevTitle;
    }, 80);
  }
}
