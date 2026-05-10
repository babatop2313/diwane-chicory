import {
  TranslationService
} from "./chunk-2DRHV6S6.js";
import {
  RouterLink
} from "./chunk-WZSU5CGS.js";
import {
  CommonModule,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Z4PFRYG5.js";

// src/app/shared/data/portfolio.data.ts
var PORTFOLIO_ITEMS = [
  {
    id: 1,
    titleFr: "Caf\xE9 Touba - \xC9v\xE9nement JOJ 2026",
    titleEn: "Caf\xE9 Touba - JOJ 2026 Event",
    category: "coffee",
    categoryLabelFr: "Coffee Shop",
    categoryLabelEn: "Coffee Shop",
    image: "assets/images/portfolio/coffee-1.jpg",
    descriptionFr: "Service Caf\xE9 Touba pour les Jeux Olympiques de la Jeunesse",
    descriptionEn: "Caf\xE9 Touba service for the Youth Olympic Games"
  },
  {
    id: 2,
    titleFr: "Production Audiovisuelle - C\xE9r\xE9monie Officielle",
    titleEn: "Audiovisual Production - Official Ceremony",
    category: "audiovisuel",
    categoryLabelFr: "Audiovisuel",
    categoryLabelEn: "Audiovisual",
    image: "assets/images/portfolio/av-1.jpg",
    descriptionFr: "Captation 4K d'une c\xE9r\xE9monie officielle \xE0 Dakar",
    descriptionEn: "4K capture of an official ceremony in Dakar"
  },
  {
    id: 3,
    titleFr: "Impression T-shirts - \xC9quipe DCS",
    titleEn: "T-shirt Printing - DCS Team",
    category: "printing",
    categoryLabelFr: "Impression",
    categoryLabelEn: "Printing",
    image: "assets/images/portfolio/print-1.jpg",
    descriptionFr: "Collection T-shirts et mugs personnalis\xE9s DCS",
    descriptionEn: "DCS custom T-shirts and mugs collection"
  },
  {
    id: 4,
    titleFr: "D\xE9coration Espace Bureau DCS",
    titleEn: "DCS Office Space Decoration",
    category: "decoration",
    categoryLabelFr: "D\xE9coration",
    categoryLabelEn: "Decoration",
    image: "assets/images/portfolio/deco-1.jpg",
    descriptionFr: "Am\xE9nagement et branding du si\xE8ge DCS",
    descriptionEn: "Layout and branding of DCS headquarters"
  },
  {
    id: 5,
    titleFr: "Caf\xE9 Touba - Grand Magal de Touba",
    titleEn: "Caf\xE9 Touba - Grand Magal de Touba",
    category: "coffee",
    categoryLabelFr: "Coffee Shop",
    categoryLabelEn: "Coffee Shop",
    image: "assets/images/portfolio/coffee-2.jpg",
    descriptionFr: "Service mobile Caf\xE9 Touba au Grand Magal",
    descriptionEn: "Mobile Caf\xE9 Touba service at Grand Magal"
  },
  {
    id: 6,
    titleFr: "Montage - Court-M\xE9trage Documentaire",
    titleEn: "Editing - Short Documentary Film",
    category: "audiovisuel",
    categoryLabelFr: "Audiovisuel",
    categoryLabelEn: "Audiovisual",
    image: "assets/images/portfolio/av-2.jpg",
    descriptionFr: "Production et montage d'un documentaire sur Dakar",
    descriptionEn: "Production and editing of a documentary about Dakar"
  },
  {
    id: 7,
    titleFr: "Accessoires Personnalis\xE9s - Collection 2025",
    titleEn: "Custom Accessories - 2025 Collection",
    category: "printing",
    categoryLabelFr: "Impression",
    categoryLabelEn: "Printing",
    image: "assets/images/portfolio/print-2.jpg",
    descriptionFr: "Collection compl\xE8te d'accessoires DCS 2025",
    descriptionEn: "Complete DCS 2025 accessories collection"
  },
  {
    id: 8,
    titleFr: "D\xE9coration \xC9v\xE9nement Corporatif",
    titleEn: "Corporate Event Decoration",
    category: "decoration",
    categoryLabelFr: "D\xE9coration",
    categoryLabelEn: "Decoration",
    image: "assets/images/portfolio/deco-2.jpg",
    descriptionFr: "Mise en sc\xE8ne d'un \xE9v\xE9nement corporatif premium",
    descriptionEn: "Premium corporate event staging"
  }
];

// src/app/features/public/portfolio/portfolio.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function PortfolioComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function PortfolioComponent_For_16_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(f_r2.value));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeCategory() === f_r2.value);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa-solid ", f_r2.icon, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFilterLabel(f_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r2.value === "all" ? ctx_r2.allItems.length : ctx_r2.countByCategory(f_r2.value), " ");
  }
}
function PortfolioComponent_For_19_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getItemDescription(item_r5));
  }
}
function PortfolioComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function PortfolioComponent_For_19_Template_div_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openLightbox(item_r5));
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "div", 30);
    \u0275\u0275element(3, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275element(5, "i", 33);
    \u0275\u0275elementStart(6, "div", 34)(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h4", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 37)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3", 38);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, PortfolioComponent_For_19_Conditional_16_Template, 2, 1, "p", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const \u0275$index_38_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("animation-delay", \u0275$index_38_r6 * 0.05 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("placeholder-" + item_r5.category);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getCategoryIcon(item_r5.category));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getItemCategory(item_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getItemTitle(item_r5));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("portfolio-cat-badge cat-", item_r5.category, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getItemCategory(item_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getItemTitle(item_r5));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getItemDescription(item_r5) ? 16 : -1);
  }
}
function PortfolioComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translation.isFr() ? "Aucune r\xE9alisation dans cette cat\xE9gorie." : "No work in this category.");
  }
}
function PortfolioComponent_Conditional_21_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getItemDescription(ctx_r2.lightboxItem()));
  }
}
function PortfolioComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function PortfolioComponent_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function PortfolioComponent_Conditional_21_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 43);
    \u0275\u0275listener("click", function PortfolioComponent_Conditional_21_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "div", 46);
    \u0275\u0275element(6, "i", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 47)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PortfolioComponent_Conditional_21_Conditional_12_Template, 2, 1, "p", 49);
    \u0275\u0275elementStart(13, "a", 50);
    \u0275\u0275element(14, "i", 25);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classMap("placeholder-" + ctx_r2.lightboxItem().category);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getCategoryIcon(ctx_r2.lightboxItem().category));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("portfolio-cat-badge cat-", ctx_r2.lightboxItem().category, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getItemCategory(ctx_r2.lightboxItem()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getItemTitle(ctx_r2.lightboxItem()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getItemDescription(ctx_r2.lightboxItem()) ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translation.isFr() ? "Commander ce service" : "Order this service", " ");
  }
}
var PortfolioComponent = class _PortfolioComponent {
  translation = inject(TranslationService);
  allItems = PORTFOLIO_ITEMS;
  activeCategory = signal("all");
  lightboxItem = signal(null);
  filters = [
    { value: "all", labelFr: "Tout", labelEn: "All", icon: "fa-grid-2" },
    { value: "coffee", labelFr: "Coffee Shop", labelEn: "Coffee Shop", icon: "fa-mug-hot" },
    { value: "audiovisuel", labelFr: "Audiovisuel", labelEn: "Audiovisual", icon: "fa-video" },
    { value: "printing", labelFr: "Impression", labelEn: "Printing", icon: "fa-print" },
    { value: "decoration", labelFr: "D\xE9coration", labelEn: "Decoration", icon: "fa-couch" }
  ];
  filteredItems = computed(() => {
    const cat = this.activeCategory();
    return cat === "all" ? this.allItems : this.allItems.filter((i) => i.category === cat);
  });
  setFilter(cat) {
    this.activeCategory.set(cat);
  }
  openLightbox(item) {
    this.lightboxItem.set(item);
  }
  closeLightbox() {
    this.lightboxItem.set(null);
  }
  getFilterLabel(f) {
    return this.translation.isFr() ? f.labelFr : f.labelEn;
  }
  getItemTitle(item) {
    return this.translation.isFr() ? item.titleFr : item.titleEn;
  }
  getItemCategory(item) {
    return this.translation.isFr() ? item.categoryLabelFr : item.categoryLabelEn;
  }
  getItemDescription(item) {
    if (!item.descriptionFr && !item.descriptionEn)
      return "";
    return this.translation.isFr() ? item.descriptionFr ?? "" : item.descriptionEn ?? "";
  }
  getCategoryIcon(cat) {
    const icons = {
      all: "fa-grid-2",
      coffee: "fa-mug-hot",
      audiovisuel: "fa-video",
      printing: "fa-print",
      decoration: "fa-couch"
    };
    return icons[cat];
  }
  countByCategory(category) {
    return this.allItems.filter((i) => i.category === category).length;
  }
  static \u0275fac = function PortfolioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioComponent, selectors: [["app-portfolio"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 9, consts: [[1, "page-hero", "bg-dark-blue"], [1, "container-dcs"], [1, "page-hero-content", "reveal"], [1, "section-badge", "section-badge-dark"], [1, "fa-solid", "fa-images"], [1, "page-hero-title"], [1, "highlight-gold"], [1, "page-hero-subtitle"], [1, "section", "portfolio-section"], [1, "portfolio-filters", "reveal"], [1, "filter-btn", 3, "active"], [1, "portfolio-grid"], [1, "portfolio-item", "reveal", 3, "animation-delay"], [1, "portfolio-empty"], [1, "lightbox-overlay"], [1, "section", "bg-off-white", "portfolio-cta-section"], [1, "portfolio-cta-inner", "reveal"], [1, "section-title"], [1, "highlight"], [1, "title-divider", "centered"], [1, "section-subtitle", 2, "margin", "0 auto 32px"], [1, "portfolio-cta-btns"], ["routerLink", "/contact", 1, "btn-dcs", "btn-dcs-primary"], [1, "fa-solid", "fa-paper-plane"], ["href", "https://wa.me/221784324753", "target", "_blank", 1, "btn-dcs", "btn-dcs-outline-blue"], [1, "fa-brands", "fa-whatsapp"], [1, "filter-btn", 3, "click"], [1, "filter-count"], [1, "portfolio-item", "reveal", 3, "click"], [1, "portfolio-item-img"], [1, "portfolio-placeholder"], [1, "fa-solid"], [1, "portfolio-overlay"], [1, "fa-solid", "fa-magnifying-glass-plus", "overlay-icon"], [1, "overlay-info"], [1, "overlay-category"], [1, "overlay-title"], [1, "portfolio-item-body"], [1, "portfolio-item-title"], [1, "portfolio-item-desc"], [1, "fa-solid", "fa-search"], [1, "lightbox-overlay", 3, "click"], [1, "lightbox-content", 3, "click"], [1, "lightbox-close", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "lightbox-img-wrap"], [1, "lightbox-placeholder"], [1, "lightbox-info"], [1, "lightbox-title"], [1, "lightbox-desc"], ["href", "https://wa.me/221784324753", "target", "_blank", 1, "btn-dcs", "btn-dcs-primary"]], template: function PortfolioComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(12, "section", 8)(13, "div", 1)(14, "div", 9);
      \u0275\u0275repeaterCreate(15, PortfolioComponent_For_16_Template, 5, 7, "button", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275repeaterCreate(18, PortfolioComponent_For_19_Template, 17, 14, "div", 12, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, PortfolioComponent_Conditional_20_Template, 4, 1, "div", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, PortfolioComponent_Conditional_21_Template, 16, 11, "div", 14);
      \u0275\u0275elementStart(22, "section", 15)(23, "div", 1)(24, "div", 16)(25, "h2", 17);
      \u0275\u0275text(26);
      \u0275\u0275elementStart(27, "span", 18);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(29, "div", 19);
      \u0275\u0275elementStart(30, "p", 20);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 21)(33, "a", 22);
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 24);
      \u0275\u0275element(37, "i", 25);
      \u0275\u0275text(38, " WhatsApp ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Nos R\xE9alisations" : "Our Work", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Portfolio" : "Portfolio", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "D\xE9couvrez nos meilleures r\xE9alisations \xE0 travers nos quatre domaines d'expertise. Chaque projet t\xE9moigne de notre engagement pour l'excellence." : "Discover our best work across our four areas of expertise. Every project reflects our commitment to excellence.", " ");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.filters);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.filteredItems());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filteredItems().length === 0 ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.lightboxItem() ? 21 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Votre Projet," : "Your Project,", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Notre Prochaine R\xE9alisation" : "Our Next Creation");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Pr\xEAt \xE0 cr\xE9er quelque chose d'exceptionnel ? Contactez DCS et discutons de votre projet." : "Ready to create something exceptional? Contact DCS and let's discuss your project.", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "D\xE9marrer un Projet" : "Start a Project", " ");
    }
  }, dependencies: [RouterLink, CommonModule], styles: ["\n\n.page-hero[_ngcontent-%COMP%] {\n  padding: 80px 0 60px;\n  text-align: center;\n}\n.section-badge-dark[_ngcontent-%COMP%] {\n  background: rgba(201, 162, 39, 0.15);\n  border-color: rgba(201, 162, 39, 0.3);\n  color: var(--dcs-gold);\n}\n.page-hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(2rem, 4vw, 3.5rem);\n  font-weight: 800;\n  color: var(--dcs-white);\n  margin: 16px 0 20px;\n  line-height: 1.1;\n}\n.page-hero-subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 1.05rem;\n  color: rgba(255, 255, 255, 0.7);\n  max-width: 620px;\n  margin: 0 auto;\n  line-height: 1.75;\n}\n.portfolio-section[_ngcontent-%COMP%] {\n}\n.portfolio-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n  justify-content: center;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: var(--dcs-white);\n  border: 1.5px solid var(--color-border);\n  border-radius: var(--radius-full);\n  font-family: var(--font-heading);\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--color-text-light);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--dcs-blue);\n  color: var(--dcs-blue);\n  box-shadow: var(--shadow-sm);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--dcs-blue);\n  border-color: var(--dcs-blue);\n  color: var(--dcs-white);\n  box-shadow: 0 4px 16px rgba(26, 79, 160, 0.35);\n}\n.filter-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: var(--radius-full);\n  padding: 1px 7px;\n  font-size: 0.7rem;\n}\n.filter-btn[_ngcontent-%COMP%]:not(.active)   .filter-count[_ngcontent-%COMP%] {\n  background: var(--dcs-blue-pale);\n  color: var(--dcs-blue);\n}\n.portfolio-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.portfolio-item[_ngcontent-%COMP%] {\n  background: var(--dcs-white);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.portfolio-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-xl);\n}\n.portfolio-item-img[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 200px;\n}\n.portfolio-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  color: rgba(255, 255, 255, 0.7);\n  transition: transform 0.5s ease;\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-placeholder[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.placeholder-coffee[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3D1C02,\n      #8B4513);\n}\n.placeholder-audiovisuel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0D2450,\n      #1A4FA0);\n}\n.placeholder-printing[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #064E3B,\n      #059669);\n}\n.placeholder-decoration[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4C1D95,\n      #7C3AED);\n}\n.placeholder-all[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--dcs-blue-dark),\n      var(--dcs-blue));\n}\n.portfolio-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(6, 15, 43, 0.85);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.overlay-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--dcs-gold);\n}\n.overlay-info[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 16px;\n}\n.overlay-category[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-heading);\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--dcs-gold);\n  margin-bottom: 6px;\n}\n.overlay-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--dcs-white);\n}\n.portfolio-item-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.portfolio-cat-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  font-family: var(--font-heading);\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.cat-coffee[_ngcontent-%COMP%] {\n  background: #FFF3E0;\n  color: #8B4513;\n}\n.cat-audiovisuel[_ngcontent-%COMP%] {\n  background: var(--dcs-blue-pale);\n  color: var(--dcs-blue);\n}\n.cat-printing[_ngcontent-%COMP%] {\n  background: #E8F5E9;\n  color: #059669;\n}\n.cat-decoration[_ngcontent-%COMP%] {\n  background: #F3E8FF;\n  color: #7C3AED;\n}\n.cat-all[_ngcontent-%COMP%] {\n  background: var(--dcs-blue-pale);\n  color: var(--dcs-blue);\n}\n.portfolio-item-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--dcs-black);\n  margin-bottom: 8px;\n  line-height: 1.3;\n}\n.portfolio-item-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-light);\n  line-height: 1.55;\n}\n.portfolio-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 0;\n  color: var(--color-text-light);\n}\n.portfolio-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n  display: block;\n  opacity: 0.4;\n}\n.portfolio-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.lightbox-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(6, 15, 43, 0.94);\n  z-index: var(--z-modal);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  animation: scaleIn 0.25s ease;\n}\n.lightbox-content[_ngcontent-%COMP%] {\n  background: var(--dcs-white);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  max-width: 720px;\n  width: 100%;\n  box-shadow: var(--shadow-xl);\n  position: relative;\n}\n.lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1rem;\n  color: var(--dcs-grey);\n  z-index: 2;\n  transition: var(--transition);\n}\n.lightbox-close[_ngcontent-%COMP%]:hover {\n  background: var(--dcs-blue);\n  color: white;\n  border-color: var(--dcs-blue);\n}\n.lightbox-img-wrap[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: hidden;\n}\n.lightbox-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 5rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.lightbox-info[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.lightbox-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--dcs-black);\n  margin: 12px 0 12px;\n}\n.lightbox-desc[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--color-text-light);\n  line-height: 1.7;\n  margin-bottom: 24px;\n}\n.portfolio-cta-section[_ngcontent-%COMP%] {\n}\n.portfolio-cta-inner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.portfolio-cta-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n@media (max-width: 1200px) {\n  .portfolio-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .portfolio-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .portfolio-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .filter-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.filter-count) {\n    display: none;\n  }\n  .lightbox-img-wrap[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .lightbox-info[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=portfolio.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioComponent, { className: "PortfolioComponent" });
})();
export {
  PortfolioComponent
};
//# sourceMappingURL=chunk-ST2MD7N7.js.map
