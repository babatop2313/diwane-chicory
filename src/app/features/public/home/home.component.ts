import { Component, inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../../../shared/services/translation.service';
import { DCS_SERVICES } from '../../../shared/data/services.data';
import { TESTIMONIALS } from '../../../shared/data/testimonials.data';
import { DcsService } from '../../../shared/models/service.model';
import { Testimonial } from '../../../shared/models/testimonial.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  translation = inject(TranslationService);
  private platformId = inject(PLATFORM_ID);

  services: DcsService[] = DCS_SERVICES;
  testimonials: Testimonial[] = TESTIMONIALS;
  activeTestimonial = 0;
  private testimonialTimer?: ReturnType<typeof setInterval>;

  stats = [
    { value: '5+',   labelFr: 'Années d\'excellence', labelEn: 'Years of excellence' },
    { value: '200+', labelFr: 'Projets réalisés',      labelEn: 'Projects completed'  },
    { value: '150+', labelFr: 'Clients satisfaits',    labelEn: 'Satisfied clients'   },
    { value: '4',    labelFr: 'Services premium',      labelEn: 'Premium services'    },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.testimonialTimer = setInterval(() => {
        this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.testimonialTimer);
  }

  setTestimonial(index: number): void {
    this.activeTestimonial = index;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getServiceTitle(s: DcsService): string {
    return this.translation.isFr() ? s.titleFr : s.titleEn;
  }

  getServiceSubtitle(s: DcsService): string {
    return this.translation.isFr() ? s.subtitleFr : s.subtitleEn;
  }

  getServiceDescription(s: DcsService): string {
    return this.translation.isFr() ? s.descriptionFr : s.descriptionEn;
  }

  getStatLabel(stat: { labelFr: string; labelEn: string }): string {
    return this.translation.isFr() ? stat.labelFr : stat.labelEn;
  }

  getTestimonialText(t: Testimonial): string {
    return this.translation.isFr() ? t.textFr : t.textEn;
  }
}
