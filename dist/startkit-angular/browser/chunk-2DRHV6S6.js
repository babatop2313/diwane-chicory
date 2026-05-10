import {
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-Z4PFRYG5.js";

// src/app/shared/services/translation.service.ts
var TranslationService = class _TranslationService {
  currentLang = signal("fr");
  toggleLang() {
    this.currentLang.update((l) => l === "fr" ? "en" : "fr");
  }
  setLang(lang) {
    this.currentLang.set(lang);
  }
  isFr = computed(() => this.currentLang() === "fr");
  t(fr, en) {
    return this.currentLang() === "fr" ? fr : en;
  }
  static \u0275fac = function TranslationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranslationService, factory: _TranslationService.\u0275fac, providedIn: "root" });
};

export {
  TranslationService
};
//# sourceMappingURL=chunk-2DRHV6S6.js.map
