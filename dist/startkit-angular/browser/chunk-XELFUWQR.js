import {
  TranslationService
} from "./chunk-2DRHV6S6.js";
import {
  RouterLink
} from "./chunk-WZSU5CGS.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z4PFRYG5.js";

// src/app/features/public/about/about.component.ts
var _forTrack0 = ($index, $item) => $item.titleFr;
var _forTrack1 = ($index, $item) => $item.year;
var _forTrack2 = ($index, $item) => $item.name;
function AboutComponent_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 62);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const \u0275$index_127_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", \u0275$index_127_r2 * 0.1 + "s");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", value_r1.color + "20")("border-color", value_r1.color + "40");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa-solid ", value_r1.icon, "");
    \u0275\u0275styleProp("color", value_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getValueTitle(value_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getValueDesc(value_r1));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", value_r1.color);
  }
}
function AboutComponent_For_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "span", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 68);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 69);
    \u0275\u0275element(9, "div", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const \u0275$index_163_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("timeline-right", \u0275$index_163_r5 % 2 === 0)("timeline-left", !(\u0275$index_163_r5 % 2 === 0));
    \u0275\u0275advance();
    \u0275\u0275classProp("reveal-left", \u0275$index_163_r5 % 2 === 0)("reveal-right", !(\u0275$index_163_r5 % 2 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getTimelineTitle(item_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getTimelineDesc(item_r4));
  }
}
function AboutComponent_For_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 73)(5, "h3", 74);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 75);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 76);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    const \u0275$index_207_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", \u0275$index_207_r7 * 0.1 + "s");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r6.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getMemberRole(member_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getMemberDesc(member_r6));
  }
}
var AboutComponent = class _AboutComponent {
  translation = inject(TranslationService);
  timeline = [
    {
      year: "2018",
      titleFr: "Fondation de DCS",
      titleEn: "DCS Founded",
      descFr: "Dawaamou Choukry Services na\xEEt \xE0 Gu\xE9diawaye, Dakar, avec une vision claire : l'excellence au service de la communaut\xE9 locale.",
      descEn: "Dawaamou Choukry Services is born in Gu\xE9diawaye, Dakar, with a clear vision: excellence in service of the local community."
    },
    {
      year: "2020",
      titleFr: "Expansion des Services",
      titleEn: "Service Expansion",
      descFr: "Lancement des services audiovisuels et d'impression personnalis\xE9e, \xE9largissant notre offre au-del\xE0 du Caf\xE9 Touba.",
      descEn: "Launch of audiovisual services and custom printing, expanding our offering beyond Caf\xE9 Touba."
    },
    {
      year: "2022",
      titleFr: "Partenariats Strat\xE9giques",
      titleEn: "Strategic Partnerships",
      descFr: "150+ clients et de nombreux partenariats avec des entreprises, institutions et organisateurs d'\xE9v\xE9nements \xE0 Dakar.",
      descEn: "150+ clients and numerous partnerships with businesses, institutions and event organizers in Dakar."
    },
    {
      year: "2024",
      titleFr: "Reconnaissance Nationale",
      titleEn: "National Recognition",
      descFr: "DCS est reconnu comme partenaire local d'excellence, positionnant Gu\xE9diawaye sur la carte des prestataires premium.",
      descEn: "DCS is recognized as a local excellence partner, placing Gu\xE9diawaye on the map of premium service providers."
    },
    {
      year: "2026",
      titleFr: "JOJ Dakar 2026",
      titleEn: "JOJ Dakar 2026",
      descFr: "DCS s'associe aux Jeux Olympiques de la Jeunesse Dakar 2026, une reconnaissance internationale de notre savoir-faire.",
      descEn: "DCS partners with the Dakar 2026 Youth Olympic Games, an international recognition of our expertise."
    }
  ];
  values = [
    {
      icon: "fa-medal",
      titleFr: "Excellence",
      titleEn: "Excellence",
      descFr: "Chaque prestation est r\xE9alis\xE9e avec le plus haut niveau d'exigence et de professionnalisme.",
      descEn: "Every service is delivered with the highest level of demand and professionalism.",
      color: "#C9A227"
    },
    {
      icon: "fa-heart",
      titleFr: "Teranga",
      titleEn: "Teranga",
      descFr: "L'hospitalit\xE9 s\xE9n\xE9galaise au c\u0153ur de chaque interaction, chaque service, chaque moment.",
      descEn: "Senegalese hospitality at the heart of every interaction, every service, every moment.",
      color: "#1A4FA0"
    },
    {
      icon: "fa-handshake",
      titleFr: "Confiance",
      titleEn: "Trust",
      descFr: "Des relations durables fond\xE9es sur la transparence, l'honn\xEAtet\xE9 et la livraison de nos promesses.",
      descEn: "Lasting relationships based on transparency, honesty and delivery of our promises.",
      color: "#059669"
    },
    {
      icon: "fa-lightbulb",
      titleFr: "Innovation",
      titleEn: "Innovation",
      descFr: "Toujours \xE0 la recherche de nouvelles fa\xE7ons de d\xE9passer les attentes de nos clients.",
      descEn: "Always looking for new ways to exceed our clients' expectations.",
      color: "#7C3AED"
    }
  ];
  team = [
    {
      name: "Cheikh Tidiane Diallo",
      roleFr: "Fondateur & Directeur G\xE9n\xE9ral",
      roleEn: "Founder & CEO",
      descFr: "Visionnaire et entrepreneur, Cheikh a fond\xE9 DCS avec la conviction que l'excellence locale peut rivaliser avec les standards internationaux.",
      descEn: "Visionary and entrepreneur, Cheikh founded DCS with the conviction that local excellence can rival international standards.",
      initials: "CT"
    },
    {
      name: "Aminata Sow",
      roleFr: "Directrice des Op\xE9rations",
      roleEn: "Operations Director",
      descFr: "Avec 8 ans d'exp\xE9rience en gestion de projets \xE9v\xE9nementiels, Aminata garantit la qualit\xE9 de chaque prestation DCS.",
      descEn: "With 8 years of experience in event project management, Aminata guarantees the quality of every DCS service.",
      initials: "AS"
    },
    {
      name: "Moussa Ndoye",
      roleFr: "Directeur Audiovisuel",
      roleEn: "Audiovisual Director",
      descFr: "Expert en production vid\xE9o et r\xE9alisation, Moussa dirige l'\xE9quipe audiovisuelle DCS avec passion et cr\xE9ativit\xE9.",
      descEn: "Expert in video production and direction, Moussa leads the DCS audiovisual team with passion and creativity.",
      initials: "MN"
    },
    {
      name: "Rokhaya Faye",
      roleFr: "Directrice Cr\xE9ative",
      roleEn: "Creative Director",
      descFr: "Designer accomplie, Rokhaya orchestre la d\xE9coration et le design graphique de DCS avec un sens artistique remarquable.",
      descEn: "Accomplished designer, Rokhaya orchestrates DCS decoration and graphic design with remarkable artistic sense.",
      initials: "RF"
    }
  ];
  getMemberRole(member) {
    return this.translation.isFr() ? member.roleFr : member.roleEn;
  }
  getMemberDesc(member) {
    return this.translation.isFr() ? member.descFr : member.descEn;
  }
  getValueTitle(v) {
    return this.translation.isFr() ? v.titleFr : v.titleEn;
  }
  getValueDesc(v) {
    return this.translation.isFr() ? v.descFr : v.descEn;
  }
  getTimelineTitle(t) {
    return this.translation.isFr() ? t.titleFr : t.titleEn;
  }
  getTimelineDesc(t) {
    return this.translation.isFr() ? t.descFr : t.descEn;
  }
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 121, vars: 26, consts: [[1, "page-hero", "bg-dark-blue"], [1, "container-dcs"], [1, "page-hero-content", "reveal"], [1, "section-badge", "section-badge-dark"], [1, "fa-solid", "fa-building"], [1, "page-hero-title"], [1, "highlight-gold"], [1, "page-hero-subtitle"], [1, "section", "mission-section"], [1, "mission-inner"], [1, "mission-content", "reveal-left"], [1, "section-badge"], [1, "fa-solid", "fa-bullseye"], [1, "section-title"], [1, "highlight"], [1, "title-divider"], [1, "section-subtitle"], [1, "mission-stats"], [1, "mission-stat"], [1, "mission-stat-val"], [1, "mission-stat-label"], [1, "mission-visual", "reveal-right"], [1, "mission-card"], [1, "mission-card-header", "bg-blue"], [1, "fa-solid", "fa-quote-left"], [1, "mission-card-body"], [1, "mission-quote-author"], [1, "mission-quote-avatar"], [1, "mission-location-badge"], [1, "fa-solid", "fa-location-dot"], [1, "section", "bg-off-white", "values-section"], [1, "section-header", "centered"], [1, "section-badge", "reveal"], [1, "fa-solid", "fa-gem"], [1, "section-title", "reveal"], [1, "title-divider", "centered", "reveal"], [1, "values-grid"], [1, "value-card", "reveal", 3, "animation-delay"], [1, "section", "timeline-section", "bg-dark-blue"], [1, "section-badge", "section-badge-dark", "reveal"], [1, "fa-solid", "fa-clock-rotate-left"], [1, "section-title", "text-white", "reveal"], [1, "timeline"], [1, "timeline-item", 3, "timeline-right", "timeline-left"], [1, "timeline-line"], [1, "section", "team-section"], [1, "fa-solid", "fa-users"], [1, "section-subtitle", "reveal"], [1, "team-grid"], [1, "team-card", "reveal", 3, "animation-delay"], [1, "section", "bg-blue", "about-cta-section"], [1, "about-cta-inner", "reveal"], [1, "about-cta-title"], [1, "about-cta-sub"], [1, "about-cta-actions"], ["routerLink", "/contact", 1, "btn-dcs", "btn-dcs-gold"], [1, "fa-solid", "fa-envelope"], ["routerLink", "/services", 1, "btn-dcs", "btn-dcs-outline"], [1, "fa-solid", "fa-grid-2"], [1, "value-card", "reveal"], [1, "value-icon"], [1, "value-title"], [1, "value-desc"], [1, "value-line"], [1, "timeline-item"], [1, "timeline-content", "reveal"], [1, "timeline-year"], [1, "timeline-title"], [1, "timeline-desc"], [1, "timeline-dot"], [1, "timeline-dot-inner"], [1, "team-card", "reveal"], [1, "team-avatar"], [1, "team-info"], [1, "team-name"], [1, "team-role"], [1, "team-desc"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "DCS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "section", 8)(13, "div", 1)(14, "div", 9)(15, "div", 10)(16, "span", 11);
      \u0275\u0275element(17, "i", 12);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "h2", 13);
      \u0275\u0275text(20);
      \u0275\u0275element(21, "br");
      \u0275\u0275elementStart(22, "span", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "div", 15);
      \u0275\u0275elementStart(25, "p", 16);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 17)(28, "div", 18)(29, "span", 19);
      \u0275\u0275text(30, "5+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 20);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 18)(34, "span", 19);
      \u0275\u0275text(35, "200+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 20);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 18)(39, "span", 19);
      \u0275\u0275text(40, "150+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 20);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 21)(44, "div", 22)(45, "div", 23);
      \u0275\u0275element(46, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 25)(48, "blockquote");
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 26)(51, "div", 27);
      \u0275\u0275text(52, "CT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div")(54, "strong");
      \u0275\u0275text(55, "Cheikh Tidiane Diallo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(58, "div", 28);
      \u0275\u0275element(59, "i", 29);
      \u0275\u0275elementStart(60, "span");
      \u0275\u0275text(61, "Gu\xE9diawaye, Dakar, S\xE9n\xE9gal");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(62, "section", 30)(63, "div", 1)(64, "div", 31)(65, "span", 32);
      \u0275\u0275element(66, "i", 33);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "h2", 34);
      \u0275\u0275text(69);
      \u0275\u0275elementStart(70, "span", 14);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(72, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 36);
      \u0275\u0275repeaterCreate(74, AboutComponent_For_75_Template, 8, 15, "div", 37, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "section", 38)(77, "div", 1)(78, "div", 31)(79, "span", 39);
      \u0275\u0275element(80, "i", 40);
      \u0275\u0275text(81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h2", 41);
      \u0275\u0275text(83);
      \u0275\u0275elementStart(84, "span", 6);
      \u0275\u0275text(85);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(86, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 42);
      \u0275\u0275repeaterCreate(88, AboutComponent_For_89_Template, 10, 11, "div", 43, _forTrack1);
      \u0275\u0275element(90, "div", 44);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "section", 45)(92, "div", 1)(93, "div", 31)(94, "span", 32);
      \u0275\u0275element(95, "i", 46);
      \u0275\u0275text(96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "h2", 34);
      \u0275\u0275text(98);
      \u0275\u0275elementStart(99, "span", 14);
      \u0275\u0275text(100);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(101, "div", 35);
      \u0275\u0275elementStart(102, "p", 47);
      \u0275\u0275text(103);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 48);
      \u0275\u0275repeaterCreate(105, AboutComponent_For_106_Template, 11, 6, "div", 49, _forTrack2);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "section", 50)(108, "div", 1)(109, "div", 51)(110, "h2", 52);
      \u0275\u0275text(111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 53);
      \u0275\u0275text(113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 54)(115, "a", 55);
      \u0275\u0275element(116, "i", 56);
      \u0275\u0275text(117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "a", 57);
      \u0275\u0275element(119, "i", 58);
      \u0275\u0275text(120);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Notre Histoire" : "Our Story", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "\xC0 Propos de" : "About", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Dawaamou Choukry Services : une entreprise n\xE9e \xE0 Gu\xE9diawaye, construite sur des valeurs d'excellence et port\xE9e par une passion pour le service." : "Dawaamou Choukry Services: a company born in Gu\xE9diawaye, built on values of excellence and driven by a passion for service.", " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Notre Mission" : "Our Mission", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "L'Excellence" : "Excellence", "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "au Quotidien" : "Every Day");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "DCS Dawaamou Choukry Services est une entreprise s\xE9n\xE9galaise d\xE9di\xE9e \xE0 la fourniture de services premium qui allient qualit\xE9 internationale et authenticit\xE9 locale. Nous croyons que l'excellence n'est pas un luxe r\xE9serv\xE9 \xE0 quelques-uns, mais un standard que chaque client m\xE9rite." : "DCS Dawaamou Choukry Services is a Senegalese company dedicated to providing premium services that combine international quality with local authenticity. We believe that excellence is not a luxury reserved for a few, but a standard that every client deserves.", " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Ann\xE9es d'expertise" : "Years of expertise");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Projets livr\xE9s" : "Projects delivered");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Clients fid\xE8les" : "Loyal clients");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? `"Notre nom, Dawaamou Choukry, signifie la gratitude permanente. C'est l'\xE2me de DCS : servir avec gratitude, cr\xE9er avec passion, et exceller avec humilit\xE9."` : '"Our name, Dawaamou Choukry, means eternal gratitude. This is the soul of DCS: serve with gratitude, create with passion, and excel with humility."', " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Fondateur, DCS" : "Founder, DCS");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Nos Valeurs" : "Our Values", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Ce Qui Nous" : "What", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "D\xE9finit" : "Defines Us");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.values);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Notre Parcours" : "Our Journey", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Notre" : "Our", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "\xC9volution" : "Evolution");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.timeline);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Notre \xC9quipe" : "Our Team", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Les Artisans de" : "The Artisans of", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "l'Excellence" : "Excellence");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Une \xE9quipe passionn\xE9e et d\xE9vou\xE9e, unie par la vision de faire de DCS la r\xE9f\xE9rence des services premium \xE0 Dakar." : "A passionate and dedicated team, united by the vision of making DCS the benchmark for premium services in Dakar.", " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.team);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Rejoignez la Famille DCS" : "Join the DCS Family", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Vous souhaitez collaborer avec nous ou en apprendre davantage sur nos services ? Notre \xE9quipe vous attend." : "Want to collaborate with us or learn more about our services? Our team is waiting for you.", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Nous Contacter" : "Contact Us", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Voir nos Services" : "See our Services", " ");
    }
  }, dependencies: [RouterLink, CommonModule], styles: ["\n\n.page-hero[_ngcontent-%COMP%] {\n  padding: 80px 0 60px;\n  text-align: center;\n}\n.section-badge-dark[_ngcontent-%COMP%] {\n  background: rgba(201, 162, 39, 0.15);\n  border-color: rgba(201, 162, 39, 0.3);\n  color: var(--dcs-gold);\n}\n.page-hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(2rem, 4vw, 3.5rem);\n  font-weight: 800;\n  color: var(--dcs-white);\n  margin: 16px 0 20px;\n  line-height: 1.1;\n}\n.page-hero-subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 1.05rem;\n  color: rgba(255, 255, 255, 0.7);\n  max-width: 620px;\n  margin: 0 auto;\n  line-height: 1.75;\n}\n.mission-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: center;\n}\n.mission-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  margin-top: 36px;\n}\n.mission-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.mission-stat-val[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 2rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      var(--dcs-blue),\n      var(--dcs-blue-light));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.mission-stat-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--color-text-light);\n  font-weight: 500;\n}\n.mission-card[_ngcontent-%COMP%] {\n  background: var(--dcs-white);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-xl);\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n  margin-bottom: 16px;\n}\n.mission-card-header[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  font-size: 2rem;\n  color: white;\n}\n.mission-card-body[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n}\n.mission-card-body[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  color: var(--dcs-grey);\n  line-height: 1.8;\n  font-style: italic;\n  margin-bottom: 24px;\n  border-left: 3px solid var(--dcs-gold);\n  padding-left: 16px;\n}\n.mission-quote-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.mission-quote-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: var(--dcs-blue);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-heading);\n  font-weight: 800;\n  color: white;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.mission-quote-author[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-heading);\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--dcs-black);\n}\n.mission-quote-author[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-light);\n}\n.mission-location-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--dcs-blue-pale);\n  color: var(--dcs-blue);\n  border: 1px solid rgba(26, 79, 160, 0.2);\n  padding: 8px 16px;\n  border-radius: var(--radius-full);\n  font-family: var(--font-heading);\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.value-card[_ngcontent-%COMP%] {\n  background: var(--dcs-white);\n  border-radius: var(--radius-lg);\n  padding: 32px 24px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--color-border);\n  text-align: center;\n  transition: var(--transition);\n  position: relative;\n  overflow: hidden;\n}\n.value-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-lg);\n}\n.value-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  border: 2px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin: 0 auto 20px;\n}\n.value-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--dcs-black);\n  margin-bottom: 12px;\n}\n.value-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-text-light);\n  line-height: 1.7;\n  margin-bottom: 20px;\n}\n.value-line[_ngcontent-%COMP%] {\n  height: 3px;\n  border-radius: var(--radius-full);\n  opacity: 0.6;\n}\n.timeline-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.text-white[_ngcontent-%COMP%] {\n  color: var(--dcs-white) !important;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.timeline-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(201, 162, 39, 0.8),\n      rgba(26, 79, 160, 0.8));\n  transform: translateX(-50%);\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 32px;\n  margin-bottom: 48px;\n  position: relative;\n}\n.timeline-item.timeline-right[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  width: calc(50% - 40px);\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n}\n.timeline-year[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--dcs-gold);\n  display: block;\n  margin-bottom: 8px;\n}\n.timeline-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--dcs-white);\n  margin-bottom: 8px;\n}\n.timeline-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 1.6;\n}\n.timeline-dot[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: var(--dcs-gold);\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.timeline-dot-inner[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--dcs-blue-darkest);\n  border-radius: 50%;\n}\n.team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.team-card[_ngcontent-%COMP%] {\n  background: var(--dcs-white);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n  transition: var(--transition);\n  text-align: center;\n}\n.team-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-lg);\n}\n.team-avatar[_ngcontent-%COMP%] {\n  height: 120px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--dcs-blue-dark),\n      var(--dcs-blue));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-heading);\n  font-size: 2rem;\n  font-weight: 800;\n  color: white;\n}\n.team-info[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.team-name[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--dcs-black);\n  margin-bottom: 4px;\n}\n.team-role[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--dcs-gold-dark);\n  margin-bottom: 12px;\n}\n.team-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--color-text-light);\n  line-height: 1.65;\n}\n.about-cta-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n.about-cta-inner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-cta-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(1.6rem, 3vw, 2.5rem);\n  font-weight: 800;\n  color: var(--dcs-white);\n  margin-bottom: 16px;\n}\n.about-cta-sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.75);\n  max-width: 500px;\n  margin: 0 auto 32px;\n  line-height: 1.7;\n}\n.about-cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n@media (max-width: 1024px) {\n  .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .mission-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n  .timeline-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .timeline-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .timeline-item.timeline-right[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .timeline-dot[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .timeline-line[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .timeline-item[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    border-left: 3px solid rgba(201, 162, 39, 0.5);\n  }\n}\n@media (max-width: 640px) {\n  .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mission-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent" });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-XELFUWQR.js.map
