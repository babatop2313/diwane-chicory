import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-whatsapp-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a [href]="waLink"
       target="_blank"
       class="whatsapp-float"
       [attr.aria-label]="translation.isFr() ? 'Contacter sur WhatsApp' : 'Contact on WhatsApp'">
      <div class="wa-pulse"></div>
      <i class="fa-brands fa-whatsapp"></i>
      <span class="wa-tooltip">{{ translation.isFr() ? 'Discutons !' : "Let's chat!" }}</span>
    </a>
  `,
  styles: [`
    .whatsapp-float {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: var(--z-float);
      width: 58px;
      height: 58px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      color: white;
      box-shadow: 0 4px 20px rgba(37,211,102,0.5);
      transition: var(--transition);
      text-decoration: none;
    }

    .whatsapp-float:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 30px rgba(37,211,102,0.6);
      color: white;
    }

    .wa-pulse {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgba(37,211,102,0.4);
      animation: pulse-ring 2s ease-out infinite;
    }

    .wa-tooltip {
      position: absolute;
      right: calc(100% + 12px);
      top: 50%;
      transform: translateY(-50%);
      background: var(--dcs-black);
      color: white;
      padding: 6px 12px;
      border-radius: var(--radius-sm);
      font-family: var(--font-body);
      font-size: 0.8rem;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .wa-tooltip::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border: 5px solid transparent;
      border-left-color: var(--dcs-black);
    }

    .whatsapp-float:hover .wa-tooltip {
      opacity: 1;
    }

    @media (max-width: 480px) {
      .whatsapp-float { bottom: 16px; right: 16px; width: 52px; height: 52px; }
    }
  `],
})
export class WhatsappBtnComponent {
  translation = inject(TranslationService);

  get waLink(): string {
    const message = this.translation.isFr()
      ? 'Bonjour DCS, je souhaite avoir plus d\'informations sur vos services.'
      : 'Hello DCS, I would like more information about your services.';
    return `https://wa.me/221784324753?text=${encodeURIComponent(message)}`;
  }
}
