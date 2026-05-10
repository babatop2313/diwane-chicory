import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../shared/services/translation.service';
import { DCS_SERVICES } from '../../../shared/data/services.data';
import { DcsService } from '../../../shared/models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  translation = inject(TranslationService);
  services: DcsService[] = DCS_SERVICES;
  activeServiceId = signal<string>('coffee');

  get activeService(): DcsService {
    return this.services.find(s => s.id === this.activeServiceId()) ?? this.services[0];
  }

  setActive(id: string): void {
    this.activeServiceId.set(id);
  }

  getTitle(s: DcsService): string {
    return this.translation.isFr() ? s.titleFr : s.titleEn;
  }

  getSubtitle(s: DcsService): string {
    return this.translation.isFr() ? s.subtitleFr : s.subtitleEn;
  }

  getDescription(s: DcsService): string {
    return this.translation.isFr() ? s.descriptionFr : s.descriptionEn;
  }

  getFeatureLabel(feat: { labelFr: string; labelEn: string }): string {
    return this.translation.isFr() ? feat.labelFr : feat.labelEn;
  }
}
