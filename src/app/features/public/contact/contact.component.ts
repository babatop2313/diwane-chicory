import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../../shared/services/translation.service';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  translation = inject(TranslationService);

  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };

  submitted = signal(false);
  sending = signal(false);
  error = signal(false);

  services = [
    { value: 'coffee',      labelFr: 'DCS Coffee Shop — Café Touba',           labelEn: 'DCS Coffee Shop — Café Touba' },
    { value: 'audiovisuel', labelFr: 'DCS Audiovisuel & TV',                    labelEn: 'DCS Audiovisual & TV' },
    { value: 'decoration',  labelFr: 'DCS Décoration & Personnalisation',       labelEn: 'DCS Decoration & Customization' },
    { value: 'printing',    labelFr: 'DCS Printing & Design',                   labelEn: 'DCS Printing & Design' },
    { value: 'other',       labelFr: 'Autre / Plusieurs services',              labelEn: 'Other / Multiple services' },
  ];

  contactInfos = [
    {
      icon: 'fa-location-dot',
      titleFr: 'Adresse',
      titleEn: 'Address',
      valueFr: 'Guédiawaye, Dakar, Sénégal',
      valueEn: 'Guédiawaye, Dakar, Senegal',
      link: null,
    },
    {
      icon: 'fa-whatsapp brands',
      titleFr: 'WhatsApp',
      titleEn: 'WhatsApp',
      valueFr: '+221 78 432 47 53',
      valueEn: '+221 78 432 47 53',
      link: 'https://wa.me/221784324753',
    },
    {
      icon: 'fa-envelope',
      titleFr: 'Email',
      titleEn: 'Email',
      valueFr: 'contact@dcservices.sn',
      valueEn: 'contact@dcservices.sn',
      link: 'mailto:contact@dcservices.sn',
    },
    {
      icon: 'fa-globe',
      titleFr: 'Site Web',
      titleEn: 'Website',
      valueFr: 'dcservices.sn',
      valueEn: 'dcservices.sn',
      link: 'https://dcservices.sn',
    },
    {
      icon: 'fa-clock',
      titleFr: 'Disponibilité',
      titleEn: 'Availability',
      valueFr: 'Lun – Sam : 8h – 20h',
      valueEn: 'Mon – Sat: 8am – 8pm',
      link: null,
    },
  ];

  getServiceLabel(s: { labelFr: string; labelEn: string }): string {
    return this.translation.isFr() ? s.labelFr : s.labelEn;
  }

  getInfoTitle(info: { titleFr: string; titleEn: string }): string {
    return this.translation.isFr() ? info.titleFr : info.titleEn;
  }

  getInfoValue(info: { valueFr: string; valueEn: string }): string {
    return this.translation.isFr() ? info.valueFr : info.valueEn;
  }

  isValid(): boolean {
    return !!(this.form.name.trim() && this.form.email.trim() && this.form.message.trim());
  }

  onSubmit(): void {
    if (!this.isValid()) return;
    this.sending.set(true);
    this.error.set(false);

    // Build WhatsApp message as the submission mechanism
    const serviceLabel = this.services.find(s => s.value === this.form.service)?.labelFr ?? this.form.service;
    const msg = `Bonjour DCS,\n\nNom: ${this.form.name}\nEmail: ${this.form.email}\nTél: ${this.form.phone}\nService: ${serviceLabel}\n\nMessage:\n${this.form.message}`;
    const waUrl = `https://wa.me/221784324753?text=${encodeURIComponent(msg)}`;

    // Simulate brief delay then open WhatsApp
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      window.open(waUrl, '_blank');
    }, 800);
  }

  resetForm(): void {
    this.form = { name: '', email: '', phone: '', service: '', message: '' };
    this.submitted.set(false);
    this.error.set(false);
  }
}
