import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssessmentService } from './services/assessment.service';
import { AssessmentItem } from './models/assessment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly service = inject(AssessmentService);

  // 3 Official Stages:
  // 1: بيانات الطفل والتعليمات
  // 2: جداول الملاحظة والتقييم
  // 3: النتائج ودرجات القطع والطباعة
  readonly currentPage = signal<1 | 2 | 3>(1);

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
    } else {
      this.setPage(3);
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

  printReport() {
    window.print();
  }
}
