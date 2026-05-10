import {
  DCS_SERVICES
} from "./chunk-H65IK3G2.js";
import {
  TranslationService
} from "./chunk-2DRHV6S6.js";
import {
  RouterLink
} from "./chunk-WZSU5CGS.js";
import {
  CommonModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z4PFRYG5.js";

// src/app/features/public/services/services.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.labelFr;
function ServicesComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ServicesComponent_For_16_Template_button_click_0_listener() {
      const service_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActive(service_r2.id));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--tab-color", service_r2.color);
    \u0275\u0275classProp("active", ctx_r2.activeServiceId() === service_r2.id);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa-solid ", service_r2.icon, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getTitle(service_r2));
  }
}
function ServicesComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 45);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feat_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.activeService.gradient);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa-solid ", feat_r4.icon, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getFeatureLabel(feat_r4));
  }
}
function ServicesComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function ServicesComponent_For_56_Template_div_click_0_listener() {
      const service_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActive(service_r6.id));
    });
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 50);
    \u0275\u0275text(9);
    \u0275\u0275element(10, "i", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r6 = ctx.$implicit;
    const \u0275$index_108_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", \u0275$index_108_r7 * 0.1 + "s");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", service_r6.gradient);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa-solid ", service_r6.icon, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getTitle(service_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getSubtitle(service_r6));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", service_r6.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translation.isFr() ? "Voir le d\xE9tail" : "See details", " ");
  }
}
var ServicesComponent = class _ServicesComponent {
  translation = inject(TranslationService);
  services = DCS_SERVICES;
  activeServiceId = signal("coffee");
  get activeService() {
    return this.services.find((s) => s.id === this.activeServiceId()) ?? this.services[0];
  }
  setActive(id) {
    this.activeServiceId.set(id);
  }
  getTitle(s) {
    return this.translation.isFr() ? s.titleFr : s.titleEn;
  }
  getSubtitle(s) {
    return this.translation.isFr() ? s.subtitleFr : s.subtitleEn;
  }
  getDescription(s) {
    return this.translation.isFr() ? s.descriptionFr : s.descriptionEn;
  }
  getFeatureLabel(feat) {
    return this.translation.isFr() ? feat.labelFr : feat.labelEn;
  }
  static \u0275fac = function ServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 21, consts: [[1, "page-hero", "bg-dark-blue"], [1, "container-dcs"], [1, "page-hero-content", "reveal"], [1, "section-badge", "section-badge-dark"], [1, "fa-solid", "fa-grid-2"], [1, "page-hero-title"], [1, "highlight-gold"], [1, "page-hero-subtitle"], [1, "section", "services-page-section"], [1, "services-tab-nav", "reveal"], [1, "tab-btn", 3, "active", "--tab-color"], [1, "service-detail", "reveal"], [1, "service-detail-hero"], [1, "service-detail-hero-content"], [1, "service-detail-icon"], [1, "service-detail-title"], [1, "service-detail-subtitle"], [1, "service-detail-body"], [1, "service-detail-left"], [1, "service-detail-heading"], [1, "service-detail-desc"], [1, "service-detail-ctas"], ["href", "https://wa.me/221784324753", "target", "_blank", 1, "btn-dcs", "btn-dcs-primary"], [1, "fa-brands", "fa-whatsapp"], ["routerLink", "/contact", 1, "btn-dcs", "btn-dcs-outline-blue"], [1, "fa-solid", "fa-envelope"], [1, "service-detail-right"], [1, "service-features-grid"], [1, "feature-item"], [1, "section", "bg-off-white", "all-services-section"], [1, "section-header", "centered"], [1, "section-title", "reveal"], [1, "highlight"], [1, "title-divider", "centered", "reveal"], [1, "all-services-grid"], [1, "all-service-card", "reveal", 3, "animation-delay"], [1, "services-cta-band", "bg-blue"], [1, "services-cta-inner", "reveal"], [1, "services-cta-title"], [1, "services-cta-sub"], [1, "services-cta-actions"], ["href", "https://wa.me/221784324753", "target", "_blank", 1, "btn-dcs", "btn-dcs-gold"], ["routerLink", "/contact", 1, "btn-dcs", "btn-dcs-outline"], [1, "fa-solid", "fa-paper-plane"], [1, "tab-btn", 3, "click"], [1, "feature-icon"], [1, "feature-label"], [1, "all-service-card", "reveal", 3, "click"], [1, "all-service-top"], [1, "all-service-body"], [1, "all-service-cta"], [1, "fa-solid", "fa-arrow-right"]], template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "section", 8)(13, "div", 1)(14, "div", 9);
      \u0275\u0275repeaterCreate(15, ServicesComponent_For_16_Template, 4, 8, "button", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14);
      \u0275\u0275element(21, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div")(23, "h2", 15);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 16);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 17)(28, "div", 18)(29, "h3", 19);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 20);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 21)(34, "a", 22);
      \u0275\u0275element(35, "i", 23);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 24);
      \u0275\u0275element(38, "i", 25);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 26)(41, "h3", 19);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 27);
      \u0275\u0275repeaterCreate(44, ServicesComponent_For_45_Template, 5, 6, "div", 28, _forTrack1);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(46, "section", 29)(47, "div", 1)(48, "div", 30)(49, "h2", 31);
      \u0275\u0275text(50);
      \u0275\u0275elementStart(51, "span", 32);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(53, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 34);
      \u0275\u0275repeaterCreate(55, ServicesComponent_For_56_Template, 11, 12, "div", 35, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "section", 36)(58, "div", 1)(59, "div", 37)(60, "div")(61, "h2", 38);
      \u0275\u0275text(62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p", 39);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 40)(66, "a", 41);
      \u0275\u0275element(67, "i", 23);
      \u0275\u0275text(68, " WhatsApp ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "a", 42);
      \u0275\u0275element(70, "i", 43);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Nos Expertises" : "Our Expertise", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Nos" : "Our", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Services Premium" : "Premium Services");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Quatre domaines d'expertise, une seule passion : l'excellence. DCS vous accompagne dans tous vos projets avec le savoir-faire qui a fait notre r\xE9putation." : "Four areas of expertise, one passion: excellence. DCS supports you in all your projects with the know-how that has built our reputation.", " ");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.services);
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("background", ctx.activeService.gradient);
      \u0275\u0275advance(3);
      \u0275\u0275classMapInterpolate1("fa-solid ", ctx.activeService.icon, "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getTitle(ctx.activeService));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getSubtitle(ctx.activeService));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Notre expertise" : "Our expertise", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getDescription(ctx.activeService));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Demander un devis" : "Request a quote", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Nous contacter" : "Contact us", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Ce que nous proposons" : "What we offer", " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.activeService.features);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Tous nos" : "All Our", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Services" : "Services");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.services);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Un projet en t\xEAte ? Parlons-en !" : "Have a project in mind? Let's talk!", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Notre \xE9quipe est disponible 7j/7 pour \xE9tudier vos besoins et vous proposer une solution sur mesure." : "Our team is available 7 days a week to study your needs and offer you a tailor-made solution.", " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Formulaire" : "Contact Form", " ");
    }
  }, dependencies: [RouterLink, CommonModule], styles: ["\n\n.page-hero[_ngcontent-%COMP%] {\n  padding: 80px 0 60px;\n  text-align: center;\n}\n.page-hero-content[_ngcontent-%COMP%] {\n}\n.page-hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(2rem, 4vw, 3.5rem);\n  font-weight: 800;\n  color: var(--dcs-white);\n  margin: 16px 0 20px;\n  line-height: 1.1;\n}\n.page-hero-subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 1.05rem;\n  color: rgba(255, 255, 255, 0.7);\n  max-width: 620px;\n  margin: 0 auto;\n  line-height: 1.75;\n}\n.services-page-section[_ngcontent-%COMP%] {\n}\n.services-tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n  border-bottom: 2px solid var(--color-border);\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 22px;\n  background: none;\n  border: none;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  font-family: var(--font-heading);\n  font-size: 0.82rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--color-text-light);\n  cursor: pointer;\n  transition: var(--transition);\n  border-radius: var(--radius-sm) var(--radius-sm) 0 0;\n}\n.tab-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--dcs-blue);\n  background: var(--dcs-blue-pale);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--tab-color, var(--dcs-blue));\n  border-bottom-color: var(--tab-color, var(--dcs-blue));\n  background: none;\n}\n.service-detail[_ngcontent-%COMP%] {\n  background: var(--dcs-white);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n  margin-bottom: 80px;\n}\n.service-detail-hero[_ngcontent-%COMP%] {\n  padding: 40px 48px;\n  color: white;\n}\n.service-detail-hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.service-detail-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: var(--radius-lg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  flex-shrink: 0;\n}\n.service-detail-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: white;\n  margin-bottom: 4px;\n}\n.service-detail-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.8);\n  font-style: italic;\n}\n.service-detail-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0;\n}\n.service-detail-left[_ngcontent-%COMP%], \n.service-detail-right[_ngcontent-%COMP%] {\n  padding: 40px 48px;\n}\n.service-detail-left[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--color-border);\n}\n.service-detail-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--dcs-black);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--dcs-blue-pale);\n}\n.service-detail-desc[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  color: var(--dcs-grey);\n  line-height: 1.8;\n  margin-bottom: 32px;\n}\n.service-detail-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.service-features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: var(--dcs-off-white);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--color-border);\n  transition: var(--transition);\n}\n.feature-item[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-sm);\n  transform: translateY(-2px);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.feature-label[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--dcs-grey-dark);\n}\n.all-services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.all-service-card[_ngcontent-%COMP%] {\n  background: var(--dcs-white);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.all-service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-lg);\n}\n.all-service-top[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.2rem;\n  color: white;\n}\n.all-service-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.all-service-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--dcs-black);\n  margin-bottom: 6px;\n}\n.all-service-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--color-text-light);\n  margin-bottom: 16px;\n}\n.all-service-cta[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-family: var(--font-heading);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: var(--transition);\n}\n.all-service-cta[_ngcontent-%COMP%]:hover {\n  gap: 10px;\n}\n.services-cta-band[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n.services-cta-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n  flex-wrap: wrap;\n}\n.services-cta-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(1.4rem, 2.5vw, 2rem);\n  font-weight: 800;\n  color: var(--dcs-white);\n  margin-bottom: 10px;\n}\n.services-cta-sub[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.7);\n  max-width: 500px;\n}\n.services-cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n@media (max-width: 1024px) {\n  .all-services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .service-detail-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .service-detail-left[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid var(--color-border);\n  }\n}\n@media (max-width: 768px) {\n  .service-detail-hero[_ngcontent-%COMP%] {\n    padding: 28px 24px;\n  }\n  .service-detail-left[_ngcontent-%COMP%], \n   .service-detail-right[_ngcontent-%COMP%] {\n    padding: 28px 24px;\n  }\n  .services-cta-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .services-cta-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 640px) {\n  .all-services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .services-tab-nav[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .tab-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .service-features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .service-detail-hero-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=services.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent" });
})();
export {
  ServicesComponent
};
//# sourceMappingURL=chunk-7O4TPWLC.js.map
