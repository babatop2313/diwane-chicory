import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  currentLang = signal<Lang>('fr');

  toggleLang(): void {
    this.currentLang.update(l => l === 'fr' ? 'en' : 'fr');
  }

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
  }

  isFr = computed(() => this.currentLang() === 'fr');

  t(fr: string, en: string): string {
    return this.currentLang() === 'fr' ? fr : en;
  }
}
