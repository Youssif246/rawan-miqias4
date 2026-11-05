import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssessmentService } from './services/assessment.service';
import { AssessmentItem, ObservationPrintPage, ObservationPrintSection } from './models/assessment.model';
import { jsPDF } from 'jspdf';
import { toJpeg } from 'html-to-image';
import { MOE_LOGO_BASE64 } from './assets/moe-logo.base64';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly service = inject(AssessmentService);
  readonly moeLogo = MOE_LOGO_BASE64;

  // 3 Official Stages (بيانات الطفل والتعليمات، جداول الملاحظة والتقييم، استمارة درجات القطع والأهلية):
  readonly currentPage = signal<1 | 2 | 3>(1);
  readonly printMode = signal<'all' | 'cutoff-only'>('all');
  readonly isGeneratingPdf = signal<boolean>(false);
  readonly pdfProgressText = signal<string>('جاري تجهيز وتنسيق التقرير...');

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

  readonly paginatedObservationPages = computed<ObservationPrintPage[]>(() => {
    const pages: ObservationPrintPage[] = [];

    this.service.domains.forEach((dom, domIdx) => {
      const domPages: (typeof dom.strands)[] = [];
      let curPageStrands: typeof dom.strands = [];
      let curPageItems = 0;

      // Group at most 2 whole strands per page, capped at 24 items
      const MAX_STRANDS_PER_PAGE = 2;
      const MAX_COMBINED_ITEMS = 24;

      dom.strands.forEach((strand) => {
        const count = strand.items.length;
        const shouldBreak =
          curPageStrands.length >= MAX_STRANDS_PER_PAGE ||
          (curPageStrands.length > 0 && curPageItems + count > MAX_COMBINED_ITEMS);

        if (shouldBreak) {
          domPages.push(curPageStrands);
          curPageStrands = [strand];
          curPageItems = count;
        } else {
          curPageStrands.push(strand);
          curPageItems += count;
        }
      });

      if (curPageStrands.length > 0) {
        domPages.push(curPageStrands);
      }

      domPages.forEach((strandsOnPage, pIdx) => {
        const totalItems = strandsOnPage.reduce((a, s) => a + s.items.length, 0);
        pages.push({
          domainId: dom.id,
          domainTitle: dom.title,
          domainIndex: domIdx,
          pageInDomain: pIdx + 1,
          totalPagesInDomain: domPages.length,
          isLastPageOfDomain: pIdx === domPages.length - 1,
          sections: strandsOnPage.map(s => ({ strandTitle: s.title, items: s.items })),
          totalItems
        });
      });
    });

    return pages;
  });

  readonly totalObservationPages = computed<number>(() => this.paginatedObservationPages().length);

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

  async downloadPdf(mode: 'all' | 'cutoff-only' = 'cutoff-only') {
    if (this.isGeneratingPdf()) return;
    this.isGeneratingPdf.set(true);
    this.pdfProgressText.set('جاري تحضير البيانات وضبط الخطوط الرسمية...');

    try {
      this.printMode.set(mode);
      await new Promise(resolve => setTimeout(resolve, 150));

      if ((document as any).fonts?.ready) {
        await (document as any).fonts.ready;
      }

      const childName = (this.service.childProfile().childName || 'الطفل').trim().replace(/[\s\/\\:*?"<>|]+/g, '_');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      if (mode === 'cutoff-only') {
        this.pdfProgressText.set('جاري توليد ملف PDF عالي الدقة لاستمارة درجات القطع...');
        const cutoffEl = document.querySelector('.print-cutoff-form') as HTMLElement;
        if (!cutoffEl) throw new Error('تعذر العثور على استمارة درجات القطع');

        const { imgData, heightMm } = await this.captureElement(cutoffEl, true);
        this.addImageToPdf(pdf, imgData, heightMm, true);

        this.pdfProgressText.set('اكتمل التقرير! جاري التحميل...');
        pdf.save(`تقرير_درجات_القطع_AEPS_${childName}.pdf`);
      } else {
        // Multi-page Full Assessment Report (Discrete A4 Pages)
        this.pdfProgressText.set('جاري إعداد صفحة الغلاف والملخص العام (صفحة 1)...');
        const coverEl = document.querySelector('.print-cover-section') as HTMLElement;
        if (coverEl) {
          const coverRes = await this.captureElement(coverEl, true);
          this.addImageToPdf(pdf, coverRes.imgData, coverRes.heightMm, true);
        }

        const pageBlocks = Array.from(document.querySelectorAll('.pdf-page-block')) as HTMLElement[];
        const totalPages = pageBlocks.length + 2; // Cover (1) + Observation Pages + Cutoff Form (1)
        for (let i = 0; i < pageBlocks.length; i++) {
          const pageNum = i + 2;
          this.pdfProgressText.set(`جاري معالجة جداول الملاحظة (صفحة ${pageNum} من ${totalPages})...`);
          pdf.addPage();
          const pageRes = await this.captureElement(pageBlocks[i], true);
          this.addImageToPdf(pdf, pageRes.imgData, pageRes.heightMm, true);
        }

        this.pdfProgressText.set(`جاري إرفاق استمارة درجات القطع والأهلية (صفحة ${totalPages} من ${totalPages})...`);
        const cutoffEl = document.querySelector('.print-cutoff-form') as HTMLElement;
        if (cutoffEl) {
          pdf.addPage();
          const cutoffRes = await this.captureElement(cutoffEl, true);
          this.addImageToPdf(pdf, cutoffRes.imgData, cutoffRes.heightMm, true);
        }

        this.pdfProgressText.set('اكتمل التقرير كاملاً! جاري التحميل...');
        pdf.save(`تقرير_ملاحظة_الطفل_AEPS_${childName}.pdf`);
      }
    } catch (err) {
      console.error('PDF Generation Error:', err);
      alert('حدث خطأ أثناء إنشاء ملف الـ PDF. سيتم فتح نافذة الطباعة كبديل مباشر.');
      this.printReport(mode);
    } finally {
      this.isGeneratingPdf.set(false);
    }
  }

  private async captureElement(
    sourceEl: HTMLElement,
    isFullPageA4: boolean = false
  ): Promise<{ imgData: string; widthMm: number; heightMm: number }> {
    const clone = sourceEl.cloneNode(true) as HTMLElement;
    clone.classList.remove('print-only');
    clone.querySelectorAll('.print-only').forEach(el => el.classList.remove('print-only'));
    clone.classList.add('pdf-render-box');
    clone.setAttribute('dir', 'rtl');
    clone.setAttribute('lang', 'ar');

    const host = document.createElement('div');
    host.className = 'pdf-render-host';
    host.style.position = 'fixed';
    host.style.left = '0';
    host.style.top = '0';
    host.style.width = '794px';
    if (isFullPageA4) {
      host.style.height = '1123px';
      host.style.minHeight = '1123px';
      host.style.maxHeight = '1123px';
    }
    host.style.zIndex = '99990';
    host.style.background = '#ffffff';
    host.style.pointerEvents = 'none';

    host.appendChild(clone);
    document.body.appendChild(host);

    try {
      const images = Array.from(clone.querySelectorAll('img'));
      await Promise.all(images.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(res => { img.onload = res; img.onerror = res; });
      }));

      await new Promise(res => setTimeout(res, 80));

      const targetWidth = 794;
      const targetHeight = isFullPageA4 ? 1123 : clone.offsetHeight;

      const imgData = await toJpeg(clone, {
        quality: 0.98,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        width: targetWidth,
        height: targetHeight
      });

      const widthMm = 210;
      const heightMm = (targetHeight * 210) / targetWidth;

      return { imgData, widthMm, heightMm };
    } finally {
      document.body.removeChild(host);
    }
  }

  private addImageToPdf(pdf: jsPDF, imgData: string, heightMm: number, forceSinglePage: boolean) {
    const pageHeight = 297;
    const pageWidth = 210;

    if (forceSinglePage || heightMm <= pageHeight + 2) {
      pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, Math.min(heightMm, pageHeight), undefined, 'FAST');
    } else {
      let heightLeft = heightMm;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, pageWidth, heightMm, undefined, 'FAST');
      heightLeft -= pageHeight;

      while (heightLeft > 5) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pageWidth, heightMm, undefined, 'FAST');
        heightLeft -= pageHeight;
      }
    }
  }
}
