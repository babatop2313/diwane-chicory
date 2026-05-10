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

  services: DcsService[]      = DCS_SERVICES;
  testimonials: Testimonial[] = TESTIMONIALS;
  activeTestimonial = 0;
  private timer?: ReturnType<typeof setInterval>;

  stats = [
    { value: '5+',   labelFr: "Années d'excellence", labelEn: 'Years of excellence' },
    { value: '200+', labelFr: 'Projets réalisés',     labelEn: 'Projects completed'  },
    { value: '150+', labelFr: 'Clients satisfaits',   labelEn: 'Satisfied clients'   },
    { value: '4',    labelFr: 'Services premium',     labelEn: 'Premium services'    },
  ];

  whyFeatures = [
    { icon: 'fa-medal',          titleFr: 'Excellence Locale',      titleEn: 'Local Excellence',       textFr: 'Partenaire reconnu de Dakar 2026, nous incarnons le meilleur du savoir-faire sénégalais.', textEn: 'Recognized partner of Dakar 2026, we embody the best of Senegalese expertise.' },
    { icon: 'fa-handshake',      titleFr: 'Teranga & Confiance',    titleEn: 'Teranga & Trust',        textFr: 'Nos valeurs culturelles font de chaque collaboration une expérience humaine et mémorable.', textEn: 'Our cultural values make every collaboration a human and memorable experience.' },
    { icon: 'fa-star',           titleFr: 'Qualité Premium',        titleEn: 'Premium Quality',        textFr: 'De la conception à la livraison, chaque prestation est exécutée avec un soin exceptionnel.', textEn: 'From design to delivery, every service is executed with exceptional care.' },
    { icon: 'fa-bolt',           titleFr: 'Réactivité & Rapidité',  titleEn: 'Speed & Reactivity',     textFr: 'Délais respectés, communication fluide — nous livrons toujours dans les temps.', textEn: 'Deadlines respected, smooth communication — we always deliver on time.' },
    { icon: 'fa-palette',        titleFr: 'Créativité Unique',      titleEn: 'Unique Creativity',      textFr: 'Chaque projet est pensé sur-mesure pour refléter votre identité et vos objectifs.', textEn: 'Each project is custom-designed to reflect your identity and goals.' },
    { icon: 'fa-shield-halved',  titleFr: 'Engagement Total',       titleEn: 'Full Commitment',        textFr: 'Votre satisfaction est notre priorité absolue — nous allons au-delà de vos attentes.', textEn: 'Your satisfaction is our top priority — we go beyond your expectations.' },
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timer = setInterval(() => {
        this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
      }, 5000);
    }
  }
  ngOnDestroy(): void { clearInterval(this.timer); }

  setTestimonial(i: number): void { this.activeTestimonial = i; }
  getStars(n: number): number[]   { return Array(n).fill(0); }
  t(s: DcsService): string        { return this.translation.isFr() ? s.titleFr : s.titleEn; }
  sub(s: DcsService): string      { return this.translation.isFr() ? s.subtitleFr : s.subtitleEn; }
  desc(s: DcsService): string     { return this.translation.isFr() ? s.descriptionFr : s.descriptionEn; }
  statLabel(s: any): string       { return this.translation.isFr() ? s.labelFr : s.labelEn; }
  tText(t: Testimonial): string   { return this.translation.isFr() ? t.textFr : t.textEn; }
  feat(s: DcsService, idx: number): string { return this.translation.isFr() ? s.features[idx]?.labelFr : s.features[idx]?.labelEn; }
}
