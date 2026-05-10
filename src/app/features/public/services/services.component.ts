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
  translation     = inject(TranslationService);
  services        = DCS_SERVICES;
  activeId        = signal('coffee');

  get active(): DcsService { return this.services.find(s => s.id === this.activeId()) ?? this.services[0]; }

  setActive(id: string):      void   { this.activeId.set(id); }
  title(s: DcsService):       string { return this.translation.isFr() ? s.titleFr       : s.titleEn; }
  subtitle(s: DcsService):    string { return this.translation.isFr() ? s.subtitleFr    : s.subtitleEn; }
  description(s: DcsService): string { return this.translation.isFr() ? s.descriptionFr : s.descriptionEn; }
  featLabel(f: any):          string { return this.translation.isFr() ? f.labelFr       : f.labelEn; }
  encodeURIComponent(s: string): string { return encodeURIComponent(s); }
}
