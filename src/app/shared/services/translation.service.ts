import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  currentLang = signal<Lang>('fr');
  isFr        = computed(() => this.currentLang() === 'fr');

  toggleLang(): void {
    this.currentLang.update(l => l === 'fr' ? 'en' : 'fr');
  }
}
