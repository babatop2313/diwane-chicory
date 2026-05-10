import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../shared/services/translation.service';

interface ContactForm {
  name:    string;
  email:   string;
  phone:   string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  translation = inject(TranslationService);

  form: ContactForm = { name: '', email: '', phone: '', service: '', message: '' };

  submitted = signal(false);
  sending   = signal(false);
  error     = signal(false);

  serviceOptions = [
    { valueFr: 'Café Touba',                  valueEn: 'Café Touba' },
    { valueFr: 'Audiovisuel & TV',             valueEn: 'Audiovisual & TV' },
    { valueFr: 'Décoration & Personnalisation',valueEn: 'Decoration & Customization' },
    { valueFr: 'Printing & Design',            valueEn: 'Printing & Design' },
    { valueFr: 'Plusieurs services',           valueEn: 'Multiple services' },
  ];

  contactInfos = [
    {
      icon: 'fa-location-dot',
      labelFr: 'Adresse',
      labelEn: 'Address',
      valueFr: 'Guédiawaye, Dakar, Sénégal',
      valueEn: 'Guédiawaye, Dakar, Senegal',
      link: null,
    },
    {
      icon: 'fa-whatsapp',
      iconClass: 'fa-brands',
      labelFr: 'WhatsApp',
      labelEn: 'WhatsApp',
      valueFr: '+221 78 432 47 53',
      valueEn: '+221 78 432 47 53',
      link: 'https://wa.me/221784324753',
    },
    {
      icon: 'fa-envelope',
      labelFr: 'Email',
      labelEn: 'Email',
      valueFr: 'contact@dcservices.sn',
      valueEn: 'contact@dcservices.sn',
      link: 'mailto:contact@dcservices.sn',
    },
    {
      icon: 'fa-globe',
      labelFr: 'Site Web',
      labelEn: 'Website',
      valueFr: 'dcservices.sn',
      valueEn: 'dcservices.sn',
      link: 'https://dcservices.sn',
    },
    {
      icon: 'fa-clock',
      labelFr: 'Horaires',
      labelEn: 'Hours',
      valueFr: 'Lun – Sam : 8h – 19h',
      valueEn: 'Mon – Sat: 8am – 7pm',
      link: null,
    },
  ];

  socials = [
    { icon: 'fa-facebook-f',  label: 'Facebook',  href: 'https://facebook.com' },
    { icon: 'fa-instagram',   label: 'Instagram', href: 'https://instagram.com/DCS_Services' },
    { icon: 'fa-linkedin-in', label: 'LinkedIn',  href: 'https://linkedin.com' },
    { icon: 'fa-whatsapp',    label: 'WhatsApp',  href: 'https://wa.me/221784324753' },
  ];

  isValid(): boolean {
    return !!this.form.name.trim() && !!this.form.message.trim();
  }

  onSubmit(): void {
    if (!this.isValid()) { this.error.set(true); return; }
    this.error.set(false);
    this.sending.set(true);
    const serviceLabel = this.form.service || (this.translation.isFr() ? 'Non précisé' : 'Not specified');
    const msg = this.translation.isFr()
      ? `Bonjour DCS,%0A%0AJe vous contacte via votre site web.%0A%0A*Nom:* ${this.form.name}%0A*Email:* ${this.form.email || 'Non renseigné'}%0A*Téléphone:* ${this.form.phone || 'Non renseigné'}%0A*Service:* ${serviceLabel}%0A%0A*Message:*%0A${this.form.message}`
      : `Hello DCS,%0A%0AI am contacting you via your website.%0A%0A*Name:* ${this.form.name}%0A*Email:* ${this.form.email || 'Not provided'}%0A*Phone:* ${this.form.phone || 'Not provided'}%0A*Service:* ${serviceLabel}%0A%0A*Message:*%0A${this.form.message}`;

    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      window.open(`https://wa.me/221784324753?text=${msg}`, '_blank');
    }, 800);
  }

  resetForm(): void {
    this.form = { name: '', email: '', phone: '', service: '', message: '' };
    this.submitted.set(false);
    this.error.set(false);
  }

  getInfoLabel(info: any): string { return this.translation.isFr() ? info.labelFr : info.labelEn; }
  getInfoValue(info: any): string { return this.translation.isFr() ? info.valueFr : info.valueEn; }
  getServiceLabel(opt: any): string { return this.translation.isFr() ? opt.valueFr : opt.valueEn; }
}
