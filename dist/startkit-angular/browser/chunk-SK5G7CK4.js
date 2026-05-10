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
  PLATFORM_ID,
  inject,
  isPlatformBrowser,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-Z4PFRYG5.js";

// src/app/shared/data/testimonials.data.ts
var TESTIMONIALS = [
  {
    id: 1,
    name: "Mamadou Diallo",
    role: "Directeur G\xE9n\xE9ral",
    company: "Groupe Dakar Business",
    avatar: "assets/images/avatars/avatar-1.jpg",
    textFr: "DCS a transform\xE9 notre \xE9v\xE9nement annuel en une exp\xE9rience m\xE9morable. Le Caf\xE9 Touba Dawaamou Choukry \xE9tait simplement exceptionnel \u2014 nos invit\xE9s en parlent encore. Un professionnalisme remarquable.",
    textEn: "DCS transformed our annual event into a memorable experience. Dawaamou Choukry Caf\xE9 Touba was simply exceptional \u2014 our guests still talk about it. Remarkable professionalism.",
    rating: 5
  },
  {
    id: 2,
    name: "Fatou Sarr",
    role: "Responsable Communication",
    company: "Agence Innovatech SN",
    avatar: "assets/images/avatars/avatar-2.jpg",
    textFr: "Leur \xE9quipe audiovisuelle a livr\xE9 une qualit\xE9 de production 4K impressionnante pour notre campagne de lancement. D\xE9lais respect\xE9s, travail soign\xE9. Je recommande vivement DCS!",
    textEn: "Their audiovisual team delivered impressive 4K production quality for our launch campaign. Deadlines met, careful work. I highly recommend DCS!",
    rating: 5
  },
  {
    id: 3,
    name: "Ibrahima Kane",
    role: "CEO",
    company: "StartUp Teranga Hub",
    avatar: "assets/images/avatars/avatar-3.jpg",
    textFr: "Nous avons command\xE9 nos t-shirts et goodies pour notre hackathon. La qualit\xE9 d'impression est top, les d\xE9lais ont \xE9t\xE9 respect\xE9s et les prix tr\xE8s comp\xE9titifs. Partenaire de confiance!",
    textEn: "We ordered our t-shirts and goodies for our hackathon. Print quality is excellent, deadlines were met and prices very competitive. Trusted partner!",
    rating: 5
  },
  {
    id: 4,
    name: "Aissatou Ndiaye",
    role: "Event Manager",
    company: "Dakar Events Pro",
    avatar: "assets/images/avatars/avatar-4.jpg",
    textFr: "La d\xE9coration r\xE9alis\xE9e par DCS pour notre gala a bluff\xE9 tous nos clients. Un sens du d\xE9tail remarquable et une cr\xE9ativit\xE9 au service de notre vision. Merci \xE0 toute l'\xE9quipe!",
    textEn: "The decoration done by DCS for our gala impressed all our clients. Remarkable attention to detail and creativity in service of our vision. Thank you to the whole team!",
    rating: 5
  }
];

// src/app/features/public/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.labelFr;
var _c0 = () => [1, 2, 3, 4, 5, 6];
function HomeComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 96);
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275styleProp("animation-delay", p_r1 * 0.8 + "s");
  }
}
function HomeComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", service_r2.gradient);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa-solid ", service_r2.icon, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translation.isFr() ? service_r2.titleFr : service_r2.titleEn);
  }
}
function HomeComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 99);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getStatLabel(stat_r4));
  }
}
function HomeComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r5.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getStatLabel(stat_r5));
  }
}
function HomeComponent_For_76_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feat_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa-solid ", feat_r6.icon, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translation.isFr() ? feat_r6.labelFr : feat_r6.labelEn, " ");
  }
}
function HomeComponent_For_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 104)(4, "h3", 105);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 106);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 107);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul", 108);
    \u0275\u0275repeaterCreate(11, HomeComponent_For_76_For_12_Template, 3, 4, "li", null, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 109)(14, "a", 110);
    \u0275\u0275text(15);
    \u0275\u0275element(16, "i", 111);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r7 = ctx.$implicit;
    const \u0275$index_148_r8 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", \u0275$index_148_r8 * 0.1 + "s");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", service_r7.gradient);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa-solid ", service_r7.icon, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getServiceTitle(service_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getServiceSubtitle(service_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getServiceDescription(service_r7));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(service_r7.features.slice(0, 3));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translation.isFr() ? "En savoir plus" : "Learn more", " ");
  }
}
function HomeComponent_For_178_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 51);
  }
}
function HomeComponent_For_181_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function HomeComponent_For_181_Template_button_click_0_listener() {
      const \u0275$index_361_r10 = \u0275\u0275restoreView(_r9).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTestimonial(\u0275$index_361_r10));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_361_r10 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", \u0275$index_361_r10 === ctx_r2.activeTestimonial);
  }
}
function HomeComponent_For_184_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275listener("click", function HomeComponent_For_184_Template_div_click_0_listener() {
      const \u0275$index_366_r12 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTestimonial(\u0275$index_366_r12));
    });
    \u0275\u0275elementStart(1, "div", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 115);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 116);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r13 = ctx.$implicit;
    const \u0275$index_366_r12 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", \u0275$index_366_r12 === ctx_r2.activeTestimonial);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r13.name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r13.company);
  }
}
var HomeComponent = class _HomeComponent {
  translation = inject(TranslationService);
  platformId = inject(PLATFORM_ID);
  services = DCS_SERVICES;
  testimonials = TESTIMONIALS;
  activeTestimonial = 0;
  testimonialTimer;
  stats = [
    { value: "5+", labelFr: "Ann\xE9es d'excellence", labelEn: "Years of excellence" },
    { value: "200+", labelFr: "Projets r\xE9alis\xE9s", labelEn: "Projects completed" },
    { value: "150+", labelFr: "Clients satisfaits", labelEn: "Satisfied clients" },
    { value: "4", labelFr: "Services premium", labelEn: "Premium services" }
  ];
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.testimonialTimer = setInterval(() => {
        this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
      }, 5e3);
    }
  }
  ngOnDestroy() {
    clearInterval(this.testimonialTimer);
  }
  setTestimonial(index) {
    this.activeTestimonial = index;
  }
  getStars(rating) {
    return Array(rating).fill(0);
  }
  getServiceTitle(s) {
    return this.translation.isFr() ? s.titleFr : s.titleEn;
  }
  getServiceSubtitle(s) {
    return this.translation.isFr() ? s.subtitleFr : s.subtitleEn;
  }
  getServiceDescription(s) {
    return this.translation.isFr() ? s.descriptionFr : s.descriptionEn;
  }
  getStatLabel(stat) {
    return this.translation.isFr() ? stat.labelFr : stat.labelEn;
  }
  getTestimonialText(t) {
    return this.translation.isFr() ? t.textFr : t.textEn;
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 203, vars: 42, consts: [[1, "hero-section"], [1, "hero-bg"], [1, "hero-overlay"], [1, "hero-particles"], [1, "particle", 3, "animation-delay"], [1, "container-dcs", "hero-inner"], [1, "hero-content", "reveal"], [1, "hero-badge"], [1, "fa-solid", "fa-medal"], [1, "hero-title"], [1, "hero-title-gold"], [1, "hero-subtitle"], [1, "hero-actions"], ["routerLink", "/services", 1, "btn-dcs", "btn-dcs-gold"], [1, "fa-solid", "fa-grid-2"], ["routerLink", "/contact", 1, "btn-dcs", "btn-dcs-outline"], [1, "fa-solid", "fa-paper-plane"], [1, "hero-contact-bar"], ["href", "https://wa.me/221784324753", "target", "_blank", 1, "hero-contact-item"], [1, "fa-brands", "fa-whatsapp"], [1, "hero-contact-sep"], ["href", "mailto:contact@dcservices.sn", 1, "hero-contact-item"], [1, "fa-solid", "fa-envelope"], [1, "hero-contact-item"], [1, "fa-solid", "fa-location-dot"], [1, "hero-visual", "reveal-right"], [1, "hero-card-main"], [1, "hero-card-inner"], [1, "hero-icon-grid"], [1, "hero-service-pill", 3, "background"], [1, "hero-stat-bar"], [1, "hero-stat"], [1, "hero-scroll-hint"], [1, "scroll-wheel"], [1, "stats-band", "bg-dark-blue"], [1, "container-dcs"], [1, "stats-grid"], [1, "stat-item", "reveal"], ["id", "services", 1, "section", "bg-off-white"], [1, "section-header", "centered"], [1, "section-badge", "reveal"], [1, "section-title", "reveal"], [1, "highlight"], [1, "title-divider", "centered", "reveal"], [1, "section-subtitle", "reveal"], [1, "services-grid"], [1, "service-card", "reveal", 3, "animation-delay"], [1, "section", "bg-dark-blue", "why-section"], [1, "why-inner"], [1, "why-content", "reveal-left"], [1, "section-badge", "section-badge-dark"], [1, "fa-solid", "fa-star"], [1, "section-title", "text-white"], [1, "highlight-gold"], [1, "title-divider"], [1, "section-subtitle", "text-muted-light"], [1, "why-ctas"], ["routerLink", "/a-propos", 1, "btn-dcs", "btn-dcs-gold"], [1, "fa-solid", "fa-circle-info"], [1, "fa-solid", "fa-handshake"], [1, "why-features", "reveal-right"], [1, "why-feature-item"], [1, "why-feature-icon"], [1, "fa-solid", "fa-award"], [1, "why-feature-text"], [1, "fa-solid", "fa-clock"], [1, "fa-solid", "fa-heart"], [1, "fa-solid", "fa-lightbulb"], [1, "fa-solid", "fa-shield-halved"], [1, "section", "testimonials-section"], [1, "fa-solid", "fa-comments"], [1, "testimonials-carousel", "reveal"], [1, "testimonial-active"], [1, "testimonial-quote"], [1, "fa-solid", "fa-quote-left", "testimonial-quote-icon"], [1, "testimonial-text"], [1, "fa-solid", "fa-quote-right", "testimonial-quote-icon", "testimonial-quote-right"], [1, "testimonial-author"], [1, "testimonial-avatar"], [1, "testimonial-avatar-initials"], [1, "testimonial-info"], [1, "testimonial-name"], [1, "testimonial-role"], [1, "testimonial-stars"], [1, "testimonial-dots"], [1, "dot", 3, "active"], [1, "testimonial-cards-preview"], [1, "testi-card", 3, "active"], [1, "cta-section", "bg-blue"], [1, "cta-inner", "reveal"], [1, "cta-content"], [1, "fa-solid", "fa-rocket"], [1, "cta-title"], [1, "cta-subtitle"], [1, "cta-actions"], ["href", "https://wa.me/221784324753", "target", "_blank", 1, "btn-dcs", "btn-dcs-gold", "cta-wa-btn"], [1, "particle"], [1, "hero-service-pill"], [1, "hero-stat-val"], [1, "hero-stat-label"], [1, "stat-value"], [1, "stat-label"], [1, "service-card", "reveal"], [1, "service-card-icon"], [1, "service-card-body"], [1, "service-card-title"], [1, "service-card-subtitle"], [1, "service-card-desc"], [1, "service-features"], [1, "service-card-footer"], ["routerLink", "/services", 1, "btn-dcs", "btn-dcs-outline-blue"], [1, "fa-solid", "fa-arrow-right"], [1, "dot", 3, "click"], [1, "testi-card", 3, "click"], [1, "testi-card-avatar"], [1, "testi-card-name"], [1, "testi-card-company"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275repeaterCreate(4, HomeComponent_For_5_Template, 1, 2, "div", 4, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h1", 9);
      \u0275\u0275text(12);
      \u0275\u0275element(13, "br");
      \u0275\u0275elementStart(14, "span", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "br");
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 11);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 12)(21, "a", 13);
      \u0275\u0275element(22, "i", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 15);
      \u0275\u0275element(25, "i", 16);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 17)(28, "a", 18);
      \u0275\u0275element(29, "i", 19);
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "+221 78 432 47 53");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "span", 20);
      \u0275\u0275text(33, "\u2022");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "a", 21);
      \u0275\u0275element(35, "i", 22);
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "contact@dcservices.sn");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "span", 20);
      \u0275\u0275text(39, "\u2022");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 23);
      \u0275\u0275element(41, "i", 24);
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "Gu\xE9diawaye, Dakar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 25)(45, "div", 26)(46, "div", 27)(47, "div", 28);
      \u0275\u0275repeaterCreate(48, HomeComponent_For_49_Template, 4, 6, "div", 29, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 30);
      \u0275\u0275repeaterCreate(51, HomeComponent_For_52_Template, 5, 2, "div", 31, _forTrack1);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(53, "div", 32);
      \u0275\u0275element(54, "div", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "section", 34)(56, "div", 35)(57, "div", 36);
      \u0275\u0275repeaterCreate(58, HomeComponent_For_59_Template, 5, 2, "div", 37, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "section", 38)(61, "div", 35)(62, "div", 39)(63, "span", 40);
      \u0275\u0275element(64, "i", 14);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "h2", 41);
      \u0275\u0275text(67);
      \u0275\u0275element(68, "br");
      \u0275\u0275elementStart(69, "span", 42);
      \u0275\u0275text(70);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(71, "div", 43);
      \u0275\u0275elementStart(72, "p", 44);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 45);
      \u0275\u0275repeaterCreate(75, HomeComponent_For_76_Template, 17, 11, "div", 46, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "section", 47)(78, "div", 35)(79, "div", 48)(80, "div", 49)(81, "span", 50);
      \u0275\u0275element(82, "i", 51);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "h2", 52);
      \u0275\u0275text(85);
      \u0275\u0275element(86, "br");
      \u0275\u0275elementStart(87, "span", 53);
      \u0275\u0275text(88);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(89, "div", 54);
      \u0275\u0275elementStart(90, "p", 55);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 56)(93, "a", 57);
      \u0275\u0275element(94, "i", 58);
      \u0275\u0275text(95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "a", 15);
      \u0275\u0275element(97, "i", 59);
      \u0275\u0275text(98);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "div", 60)(100, "div", 61)(101, "div", 62);
      \u0275\u0275element(102, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 64)(104, "h4");
      \u0275\u0275text(105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p");
      \u0275\u0275text(107);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 61)(109, "div", 62);
      \u0275\u0275element(110, "i", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 64)(112, "h4");
      \u0275\u0275text(113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p");
      \u0275\u0275text(115);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "div", 61)(117, "div", 62);
      \u0275\u0275element(118, "i", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 64)(120, "h4");
      \u0275\u0275text(121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p");
      \u0275\u0275text(123);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 61)(125, "div", 62);
      \u0275\u0275element(126, "i", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 64)(128, "h4");
      \u0275\u0275text(129);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "p");
      \u0275\u0275text(131);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 61)(133, "div", 62);
      \u0275\u0275element(134, "i", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 64)(136, "h4");
      \u0275\u0275text(137);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p");
      \u0275\u0275text(139);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "div", 61)(141, "div", 62);
      \u0275\u0275element(142, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 64)(144, "h4");
      \u0275\u0275text(145);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "p");
      \u0275\u0275text(147);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(148, "section", 69)(149, "div", 35)(150, "div", 39)(151, "span", 40);
      \u0275\u0275element(152, "i", 70);
      \u0275\u0275text(153);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "h2", 41);
      \u0275\u0275text(155);
      \u0275\u0275element(156, "br");
      \u0275\u0275elementStart(157, "span", 42);
      \u0275\u0275text(158);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(159, "div", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div", 71)(161, "div", 72)(162, "div", 73);
      \u0275\u0275element(163, "i", 74);
      \u0275\u0275elementStart(164, "p", 75);
      \u0275\u0275text(165);
      \u0275\u0275elementEnd();
      \u0275\u0275element(166, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "div", 77)(168, "div", 78)(169, "span", 79);
      \u0275\u0275text(170);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "div", 80)(172, "strong", 81);
      \u0275\u0275text(173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "span", 82);
      \u0275\u0275text(175);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 83);
      \u0275\u0275repeaterCreate(177, HomeComponent_For_178_Template, 1, 0, "i", 51, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(179, "div", 84);
      \u0275\u0275repeaterCreate(180, HomeComponent_For_181_Template, 1, 2, "button", 85, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 86);
      \u0275\u0275repeaterCreate(183, HomeComponent_For_184_Template, 8, 5, "div", 87, _forTrack0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(185, "section", 88)(186, "div", 35)(187, "div", 89)(188, "div", 90)(189, "span", 50);
      \u0275\u0275element(190, "i", 91);
      \u0275\u0275text(191);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "h2", 92);
      \u0275\u0275text(193);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "p", 93);
      \u0275\u0275text(195);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "div", 94)(197, "a", 95);
      \u0275\u0275element(198, "i", 19);
      \u0275\u0275text(199, " WhatsApp ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "a", 15);
      \u0275\u0275element(201, "i", 22);
      \u0275\u0275text(202);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(41, _c0));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Partenaire Local d'Excellence \u2014 Dakar 2026" : "Local Excellence Partner \u2014 Dakar 2026", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "L'Excellence" : "Excellence", "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "au Service de" : "at the Service of");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Votre Vision" : "Your Vision", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "DCS Dawaamou Choukry Services \u2014 votre partenaire de confiance \xE0 Gu\xE9diawaye, Dakar. Caf\xE9 Touba, Audiovisuel, D\xE9coration & Impression : nous transformons vos projets en r\xE9alit\xE9s m\xE9morables." : "DCS Dawaamou Choukry Services \u2014 your trusted partner in Gu\xE9diawaye, Dakar. Caf\xE9 Touba, Audiovisual, Decoration & Printing: we transform your projects into memorable realities.", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Nos Services" : "Our Services", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Nous Contacter" : "Contact Us", " ");
      \u0275\u0275advance(22);
      \u0275\u0275repeater(ctx.services);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.stats);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.stats);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Nos Expertises" : "Our Expertise", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Quatre Services," : "Four Services,", "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Une Excellence" : "One Excellence");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "DCS vous accompagne avec une gamme compl\xE8te de services premium, alliant savoir-faire local et standards internationaux." : "DCS supports you with a complete range of premium services, combining local know-how with international standards.", " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.services);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Pourquoi DCS ?" : "Why DCS?", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Votre Partenaire" : "Your Local", "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Local de Confiance" : "Trusted Partner");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Depuis notre cr\xE9ation, DCS s'engage \xE0 offrir des services d'excellence qui honorent la culture s\xE9n\xE9galaise tout en r\xE9pondant aux exigences des standards internationaux." : "Since our founding, DCS has been committed to delivering excellent services that honor Senegalese culture while meeting international standards.", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Notre Histoire" : "Our Story", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Collaborons" : "Let's Collaborate", " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Excellence Certifi\xE9e" : "Certified Excellence");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Qualit\xE9 premium dans chaque prestation, chaque d\xE9tail compte." : "Premium quality in every service, every detail matters.");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Ponctualit\xE9 Garantie" : "Guaranteed Punctuality");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Respect des d\xE9lais et des engagements, toujours." : "Deadlines and commitments respected, always.");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Partenariat Durable" : "Lasting Partnership");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Relations de confiance construites sur le long terme." : "Trust-based relationships built for the long term.");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Ancrage Local" : "Local Roots");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Fiers de notre culture Teranga, nous servons Dakar avec passion." : "Proud of our Teranga culture, we serve Dakar with passion.");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Innovation Continue" : "Continuous Innovation");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Toujours \xE0 la pointe, nous adoptons les meilleures pratiques." : "Always at the cutting edge, we adopt best practices.");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Satisfaction Assur\xE9e" : "Satisfaction Guaranteed");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Votre satisfaction est notre priorit\xE9 absolue, sans compromis." : "Your satisfaction is our absolute priority, no compromise.");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "T\xE9moignages" : "Testimonials", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Ils Nous Font" : "They Trust", "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Confiance" : "Us");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.getTestimonialText(ctx.testimonials[ctx.activeTestimonial]));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.testimonials[ctx.activeTestimonial].name.charAt(0), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.testimonials[ctx.activeTestimonial].name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.testimonials[ctx.activeTestimonial].role, ", ", ctx.testimonials[ctx.activeTestimonial].company, "");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.getStars(ctx.testimonials[ctx.activeTestimonial].rating));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.testimonials);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.testimonials);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Pr\xEAt \xE0 d\xE9marrer ?" : "Ready to start?", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Transformons Votre Projet en R\xE9alit\xE9" : "Let's Transform Your Project into Reality", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Contactez DCS d\xE8s aujourd'hui pour un devis personnalis\xE9 et gratuit. Notre \xE9quipe vous r\xE9pond dans les plus brefs d\xE9lais." : "Contact DCS today for a personalized free quote. Our team will respond as soon as possible.", " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Formulaire" : "Contact Form", " ");
    }
  }, dependencies: [RouterLink, CommonModule], styles: [`

.hero-section[_ngcontent-%COMP%] {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--dcs-blue-darkest);
}
.hero-bg[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 60% 50%,
      rgba(26, 79, 160, 0.3) 0%,
      transparent 60%),
    radial-gradient(
      ellipse at 20% 80%,
      rgba(201, 162, 39, 0.15) 0%,
      transparent 50%),
    var(--dcs-blue-darkest);
}
.hero-overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="0.5" fill="rgba(255,255,255,0.04)"/></pattern></defs><rect width="100" height="100" fill="url(%23g)"/></svg>');
}
.hero-particles[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.particle[_ngcontent-%COMP%] {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--dcs-gold);
  animation: float 6s ease-in-out infinite;
  opacity: 0.4;
}
.particle[_ngcontent-%COMP%]:nth-child(1) {
  top: 15%;
  left: 10%;
}
.particle[_ngcontent-%COMP%]:nth-child(2) {
  top: 40%;
  left: 85%;
  width: 6px;
  height: 6px;
}
.particle[_ngcontent-%COMP%]:nth-child(3) {
  top: 70%;
  left: 20%;
  width: 3px;
  height: 3px;
}
.particle[_ngcontent-%COMP%]:nth-child(4) {
  top: 25%;
  left: 60%;
  width: 5px;
  height: 5px;
  background: var(--dcs-blue-light);
}
.particle[_ngcontent-%COMP%]:nth-child(5) {
  top: 80%;
  left: 75%;
  width: 4px;
  height: 4px;
}
.particle[_ngcontent-%COMP%]:nth-child(6) {
  top: 55%;
  left: 40%;
  width: 3px;
  height: 3px;
  background: var(--dcs-blue-light);
}
.hero-inner[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
.hero-content[_ngcontent-%COMP%] {
  color: var(--dcs-white);
}
.hero-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(201, 162, 39, 0.15);
  border: 1px solid rgba(201, 162, 39, 0.3);
  color: var(--dcs-gold);
  padding: 8px 18px;
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.hero-title[_ngcontent-%COMP%] {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  line-height: 1.05;
  color: var(--dcs-white);
  margin-bottom: 24px;
}
.hero-title-gold[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      var(--dcs-gold-dark),
      var(--dcs-gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-subtitle[_ngcontent-%COMP%] {
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.75;
  margin-bottom: 36px;
  max-width: 520px;
}
.hero-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}
.hero-contact-bar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.hero-contact-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  transition: var(--transition);
}
.hero-contact-item[_ngcontent-%COMP%]:hover {
  color: var(--dcs-gold);
}
.hero-contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: var(--dcs-gold);
  font-size: 0.9rem;
}
.hero-contact-sep[_ngcontent-%COMP%] {
  color: rgba(255, 255, 255, 0.2);
}
.hero-visual[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
}
.hero-card-main[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 480px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(12px);
  overflow: hidden;
  animation: float 6s ease-in-out infinite;
}
.hero-card-inner[_ngcontent-%COMP%] {
  padding: 32px;
}
.hero-icon-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
}
.hero-service-pill[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  color: white;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 600;
}
.hero-service-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  flex-shrink: 0;
}
.hero-stat-bar[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}
.hero-stat[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.hero-stat-val[_ngcontent-%COMP%] {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--dcs-gold);
}
.hero-stat-label[_ngcontent-%COMP%] {
  font-family: var(--font-body);
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  line-height: 1.3;
}
.hero-scroll-hint[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.scroll-wheel[_ngcontent-%COMP%] {
  width: 26px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 13px;
  position: relative;
}
.scroll-wheel[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: var(--dcs-gold);
  border-radius: 2px;
  animation: fadeInUp 1.5s ease infinite;
}
.stats-band[_ngcontent-%COMP%] {
  padding: 40px 0;
}
.stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
.stat-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}
.stat-item[_ngcontent-%COMP%]:last-child {
  border-right: none;
}
.stat-value[_ngcontent-%COMP%] {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 900;
  background:
    linear-gradient(
      135deg,
      var(--dcs-gold),
      var(--dcs-gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label[_ngcontent-%COMP%] {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}
.services-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.service-card[_ngcontent-%COMP%] {
  background: var(--dcs-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
}
.service-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}
.service-card-icon[_ngcontent-%COMP%] {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
}
.service-card-body[_ngcontent-%COMP%] {
  flex: 1;
  padding: 24px 24px 16px;
}
.service-card-title[_ngcontent-%COMP%] {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--dcs-black);
  margin-bottom: 4px;
}
.service-card-subtitle[_ngcontent-%COMP%] {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--dcs-gold-dark);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 12px;
}
.service-card-desc[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--color-text-light);
  line-height: 1.65;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.service-features[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.service-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--dcs-grey);
}
.service-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: var(--dcs-blue);
  font-size: 0.75rem;
  width: 14px;
}
.service-card-footer[_ngcontent-%COMP%] {
  padding: 16px 24px 24px;
}
.why-section[_ngcontent-%COMP%] {
  position: relative;
}
.why-inner[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.why-content[_ngcontent-%COMP%] {
}
.section-badge-dark[_ngcontent-%COMP%] {
  background: rgba(201, 162, 39, 0.15);
  border-color: rgba(201, 162, 39, 0.3);
  color: var(--dcs-gold);
}
.text-white[_ngcontent-%COMP%] {
  color: var(--dcs-white) !important;
}
.why-ctas[_ngcontent-%COMP%] {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 32px;
}
.why-features[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.why-feature-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.why-feature-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.why-feature-icon[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  background: rgba(201, 162, 39, 0.15);
  border: 1px solid rgba(201, 162, 39, 0.3);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dcs-gold);
  font-size: 1.1rem;
  flex-shrink: 0;
}
.why-feature-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--dcs-white);
  margin-bottom: 4px;
}
.why-feature-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
}
.testimonials-section[_ngcontent-%COMP%] {
  background: var(--dcs-off-white);
}
.testimonials-carousel[_ngcontent-%COMP%] {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.testimonial-active[_ngcontent-%COMP%] {
  background: var(--dcs-white);
  border-radius: var(--radius-xl);
  padding: 48px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
  margin-bottom: 32px;
}
.testimonial-quote[_ngcontent-%COMP%] {
  position: relative;
  margin-bottom: 32px;
}
.testimonial-quote-icon[_ngcontent-%COMP%] {
  font-size: 2rem;
  color: var(--dcs-blue-pale);
}
.testimonial-quote-right[_ngcontent-%COMP%] {
  float: right;
}
.testimonial-text[_ngcontent-%COMP%] {
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: var(--dcs-grey-dark);
  line-height: 1.8;
  font-style: italic;
  margin: 16px 0;
}
.testimonial-author[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
}
.testimonial-avatar[_ngcontent-%COMP%] {
  width: 56px;
  height: 56px;
  background:
    linear-gradient(
      135deg,
      var(--dcs-blue),
      var(--dcs-blue-mid));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.testimonial-avatar-initials[_ngcontent-%COMP%] {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  color: white;
}
.testimonial-info[_ngcontent-%COMP%] {
  text-align: left;
}
.testimonial-name[_ngcontent-%COMP%] {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--dcs-black);
  display: block;
}
.testimonial-role[_ngcontent-%COMP%] {
  font-size: 0.82rem;
  color: var(--color-text-light);
  display: block;
  margin-bottom: 6px;
}
.testimonial-stars[_ngcontent-%COMP%] {
  display: flex;
  gap: 3px;
}
.testimonial-stars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: var(--dcs-gold);
  font-size: 0.85rem;
}
.testimonial-dots[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
}
.dot[_ngcontent-%COMP%] {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--dcs-silver-light);
  border: none;
  cursor: pointer;
  transition: var(--transition);
}
.dot.active[_ngcontent-%COMP%] {
  background: var(--dcs-blue);
  width: 24px;
  border-radius: 5px;
}
.testimonial-cards-preview[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
.testi-card[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: var(--dcs-white);
  border-radius: var(--radius-full);
  border: 1.5px solid var(--color-border);
  cursor: pointer;
  transition: var(--transition);
  opacity: 0.6;
}
.testi-card.active[_ngcontent-%COMP%], 
.testi-card[_ngcontent-%COMP%]:hover {
  opacity: 1;
  border-color: var(--dcs-blue);
}
.testi-card-avatar[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  background: var(--dcs-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
}
.testi-card-name[_ngcontent-%COMP%] {
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--dcs-black);
}
.testi-card-company[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  color: var(--color-text-light);
}
.cta-section[_ngcontent-%COMP%] {
  padding: 80px 0;
}
.cta-inner[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
}
.cta-content[_ngcontent-%COMP%] {
  flex: 1;
}
.cta-title[_ngcontent-%COMP%] {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 800;
  color: var(--dcs-white);
  margin-bottom: 12px;
  line-height: 1.2;
}
.cta-subtitle[_ngcontent-%COMP%] {
  font-family: var(--font-body);
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 500px;
  line-height: 1.7;
}
.cta-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  flex-shrink: 0;
}
.cta-wa-btn[_ngcontent-%COMP%] {
  background: #25D366;
  border-color: #25D366;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
}
.cta-wa-btn[_ngcontent-%COMP%]:hover {
  background: #20bb5a;
  border-color: #20bb5a;
  color: white;
}
@media (max-width: 1200px) {
  .services-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1024px) {
  .hero-inner[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-visual[_ngcontent-%COMP%] {
    display: none;
  }
  .why-inner[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
  .stat-item[_ngcontent-%COMP%]:nth-child(2) {
    border-right: none;
  }
}
@media (max-width: 768px) {
  .services-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .cta-inner[_ngcontent-%COMP%] {
    flex-direction: column;
    text-align: center;
  }
  .cta-actions[_ngcontent-%COMP%] {
    justify-content: center;
  }
}
@media (max-width: 640px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
  .hero-actions[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .hero-contact-bar[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
  .testimonial-active[_ngcontent-%COMP%] {
    padding: 28px 20px;
  }
}
/*# sourceMappingURL=home.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-SK5G7CK4.js.map
