import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../shared/services/translation.service';
import { PORTFOLIO_ITEMS } from '../../../shared/data/portfolio.data';
import { PortfolioItem, PortfolioCategory } from '../../../shared/models/portfolio-item.model';

interface FilterOption {
  category: PortfolioCategory;
  labelFr: string;
  labelEn: string;
  icon: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  translation = inject(TranslationService);

  allItems: PortfolioItem[] = PORTFOLIO_ITEMS;
  activeCategory = signal<PortfolioCategory>('all');
  lightboxItem   = signal<PortfolioItem | null>(null);

  filters: FilterOption[] = [
    { category: 'all',        labelFr: 'Tous les projets', labelEn: 'All projects',    icon: 'fa-grid-2' },
    { category: 'coffee',     labelFr: 'Coffee Shop',      labelEn: 'Coffee Shop',     icon: 'fa-mug-hot' },
    { category: 'audiovisuel',labelFr: 'Audiovisuel',      labelEn: 'Audiovisual',     icon: 'fa-video' },
    { category: 'printing',   labelFr: 'Impression',       labelEn: 'Printing',        icon: 'fa-print' },
    { category: 'decoration', labelFr: 'Décoration',       labelEn: 'Decoration',      icon: 'fa-couch' },
  ];

  filteredItems = computed(() => {
    const cat = this.activeCategory();
    return cat === 'all' ? this.allItems : this.allItems.filter(i => i.category === cat);
  });

  setFilter(cat: PortfolioCategory): void { this.activeCategory.set(cat); }
  openLightbox(item: PortfolioItem): void { this.lightboxItem.set(item); }
  closeLightbox(): void { this.lightboxItem.set(null); }

  getFilterLabel(f: FilterOption): string { return this.translation.isFr() ? f.labelFr : f.labelEn; }
  getItemTitle(item: PortfolioItem): string { return this.translation.isFr() ? item.titleFr : item.titleEn; }
  getItemCategory(item: PortfolioItem): string { return this.translation.isFr() ? item.categoryLabelFr : item.categoryLabelEn; }
  getItemDescription(item: PortfolioItem): string {
    return this.translation.isFr() ? (item.descriptionFr ?? '') : (item.descriptionEn ?? '');
  }
  getCategoryIcon(cat: PortfolioCategory): string {
    return this.filters.find(f => f.category === cat)?.icon ?? 'fa-grid-2';
  }
  countByCategory(cat: PortfolioCategory): number {
    return cat === 'all' ? this.allItems.length : this.allItems.filter(i => i.category === cat).length;
  }
  getCategoryClass(cat: PortfolioCategory): string {
    const map: Record<string, string> = {
      coffee: 'cat-coffee', audiovisuel: 'cat-audio', printing: 'cat-print', decoration: 'cat-deco',
    };
    return map[cat] ?? 'cat-default';
  }
  encodeURIComponent(s: string): string { return encodeURIComponent(s); }
}
