import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../shared/services/translation.service';
import { PORTFOLIO_ITEMS } from '../../../shared/data/portfolio.data';
import { PortfolioItem, PortfolioCategory } from '../../../shared/models/portfolio-item.model';

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
  lightboxItem = signal<PortfolioItem | null>(null);

  filters: { value: PortfolioCategory; labelFr: string; labelEn: string; icon: string }[] = [
    { value: 'all',         labelFr: 'Tout',       labelEn: 'All',         icon: 'fa-grid-2' },
    { value: 'coffee',      labelFr: 'Coffee Shop', labelEn: 'Coffee Shop', icon: 'fa-mug-hot' },
    { value: 'audiovisuel', labelFr: 'Audiovisuel', labelEn: 'Audiovisual', icon: 'fa-video' },
    { value: 'printing',    labelFr: 'Impression',  labelEn: 'Printing',    icon: 'fa-print' },
    { value: 'decoration',  labelFr: 'Décoration',  labelEn: 'Decoration',  icon: 'fa-couch' },
  ];

  filteredItems = computed(() => {
    const cat = this.activeCategory();
    return cat === 'all' ? this.allItems : this.allItems.filter(i => i.category === cat);
  });

  setFilter(cat: PortfolioCategory): void {
    this.activeCategory.set(cat);
  }

  openLightbox(item: PortfolioItem): void {
    this.lightboxItem.set(item);
  }

  closeLightbox(): void {
    this.lightboxItem.set(null);
  }

  getFilterLabel(f: { labelFr: string; labelEn: string }): string {
    return this.translation.isFr() ? f.labelFr : f.labelEn;
  }

  getItemTitle(item: PortfolioItem): string {
    return this.translation.isFr() ? item.titleFr : item.titleEn;
  }

  getItemCategory(item: PortfolioItem): string {
    return this.translation.isFr() ? item.categoryLabelFr : item.categoryLabelEn;
  }

  getItemDescription(item: PortfolioItem): string {
    if (!item.descriptionFr && !item.descriptionEn) return '';
    return this.translation.isFr() ? (item.descriptionFr ?? '') : (item.descriptionEn ?? '');
  }

  getCategoryIcon(cat: PortfolioCategory): string {
    const icons: Record<PortfolioCategory, string> = {
      all: 'fa-grid-2',
      coffee: 'fa-mug-hot',
      audiovisuel: 'fa-video',
      printing: 'fa-print',
      decoration: 'fa-couch',
    };
    return icons[cat];
  }

  countByCategory(category: PortfolioCategory): number {
    return this.allItems.filter(i => i.category === category).length;
  }
}
