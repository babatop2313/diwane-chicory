import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-whatsapp-btn',
  standalone: true,
  template: `
    <a href="https://wa.me/221784324753"
       target="_blank"
       class="wa-float"
       [attr.aria-label]="translation.isFr() ? 'Contacter sur WhatsApp' : 'Contact on WhatsApp'">
      <div class="wa-pulse"></div>
      <i class="fa-brands fa-whatsapp"></i>
      <span class="wa-tip">{{ translation.isFr() ? 'Discutons !' : "Let's chat!" }}</span>
    </a>
  `,
  styles: [`
    .wa-float {
      position: fixed; bottom: 28px; right: 28px; z-index: var(--z-float);
      width: 58px; height: 58px; background: #25D366; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.6rem; color: white; text-decoration: none;
      box-shadow: 0 4px 20px rgba(37,211,102,0.5); transition: var(--transition);
    }
    .wa-float:hover { transform: scale(1.1); box-shadow: 0 8px 30px rgba(37,211,102,0.6); color: white; }
    .wa-pulse { position: absolute; width: 100%; height: 100%; border-radius: 50%; background: rgba(37,211,102,0.4); animation: pulse-ring 2s ease-out infinite; }
    .wa-tip { position: absolute; right: calc(100% + 12px); top: 50%; transform: translateY(-50%); background: var(--dcs-black); color: white; padding: 6px 12px; border-radius: var(--radius-sm); font-family: var(--font-body); font-size: 0.8rem; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
    .wa-tip::after { content: ''; position: absolute; left: 100%; top: 50%; transform: translateY(-50%); border: 5px solid transparent; border-left-color: var(--dcs-black); }
    .wa-float:hover .wa-tip { opacity: 1; }
    @media (max-width: 480px) { .wa-float { bottom: 16px; right: 16px; width: 50px; height: 50px; } }
  `],
})
export class WhatsappBtnComponent {
  translation = inject(TranslationService);
}
