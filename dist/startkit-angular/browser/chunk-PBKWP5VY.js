import {
  TranslationService
} from "./chunk-2DRHV6S6.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-WZSU5CGS.js";
import {
  CommonModule,
  PLATFORM_ID,
  filter,
  inject,
  isPlatformBrowser,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-Z4PFRYG5.js";

// src/app/shared/components/layouts/navbar/navbar.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function NavbarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 11)(1, "a", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLabel(item_r1), " ");
  }
}
function NavbarComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 25);
    \u0275\u0275listener("click", function NavbarComponent_For_34_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r4.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLabel(item_r4), " ");
  }
}
var NavbarComponent = class _NavbarComponent {
  translation = inject(TranslationService);
  isScrolled = signal(false);
  menuOpen = signal(false);
  navItems = [
    { labelFr: "Accueil", labelEn: "Home", route: "/accueil" },
    { labelFr: "Nos Services", labelEn: "Services", route: "/services" },
    { labelFr: "\xC0 Propos", labelEn: "About", route: "/a-propos" },
    { labelFr: "R\xE9alisations", labelEn: "Portfolio", route: "/portfolio" },
    { labelFr: "Contact", labelEn: "Contact", route: "/contact" }
  ];
  ngOnInit() {
  }
  onScroll() {
    this.isScrolled.set(window.scrollY > 60);
  }
  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }
  closeMenu() {
    this.menuOpen.set(false);
  }
  getLabel(item) {
    return this.translation.isFr() ? item.labelFr : item.labelEn;
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
        return ctx.onScroll();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 16, consts: [[1, "navbar-dcs"], [1, "container-dcs", "navbar-inner"], ["routerLink", "/accueil", 1, "navbar-logo", 3, "click"], [1, "logo-emblem"], [1, "logo-icon"], [1, "fa-solid", "fa-d"], [1, "logo-text"], [1, "logo-main"], [1, "logo-sub"], [1, "navbar-nav-desktop"], [1, "nav-list"], [1, "nav-item"], [1, "navbar-actions"], ["type", "button", 1, "lang-toggle", 3, "click"], [1, "lang-divider"], ["routerLink", "/contact", 1, "btn-dcs", "btn-dcs-primary", "btn-nav-cta"], [1, "fa-solid", "fa-paper-plane"], ["type", "button", 1, "menu-burger", 3, "click"], [1, "mobile-menu"], [1, "mobile-menu-inner"], [1, "mobile-nav-list"], [1, "mobile-actions"], ["type", "button", 1, "lang-toggle", "mobile-lang", 3, "click"], ["routerLink", "/contact", 1, "btn-dcs", "btn-dcs-gold", "w-100", "justify-content-center", 3, "click"], ["routerLinkActive", "active", 1, "nav-link-dcs", 3, "routerLink"], ["routerLinkActive", "active", 1, "mobile-nav-link", 3, "click", "routerLink"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_2_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8, "DCS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "Dawaamou Choukry Services");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "nav", 9)(12, "ul", 10);
      \u0275\u0275repeaterCreate(13, NavbarComponent_For_14_Template, 3, 2, "li", 11, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12)(16, "button", 13);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_16_listener() {
        return ctx.translation.toggleLang();
      });
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "FR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 14);
      \u0275\u0275text(20, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22, "EN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "a", 15);
      \u0275\u0275element(24, "i", 16);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 17);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_26_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(27, "span")(28, "span")(29, "span");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 18)(31, "div", 19)(32, "ul", 20);
      \u0275\u0275repeaterCreate(33, NavbarComponent_For_34_Template, 3, 2, "li", null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 21)(36, "button", 22);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_36_listener() {
        return ctx.translation.toggleLang();
      });
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "Fran\xE7ais");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 14);
      \u0275\u0275text(40, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "English");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "a", 23);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_43_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275element(44, "i", 16);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("scrolled", ctx.isScrolled());
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.navItems);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active-lang", ctx.translation.isFr());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active-lang", !ctx.translation.isFr());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Devis Gratuit" : "Free Quote", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.menuOpen());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("open", ctx.menuOpen());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.navItems);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active-lang", ctx.translation.isFr());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active-lang", !ctx.translation.isFr());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Demander un Devis" : "Request a Quote", " ");
    }
  }, dependencies: [RouterLink, RouterLinkActive, CommonModule], styles: ['\n\n.navbar-dcs[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: var(--z-navbar);\n  background: rgba(6, 15, 43, 0.92);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-bottom: 1px solid rgba(184, 196, 212, 0.1);\n  transition: var(--transition);\n}\n.navbar-dcs.scrolled[_ngcontent-%COMP%] {\n  background: rgba(6, 15, 43, 0.98);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);\n}\n.navbar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 72px;\n  gap: 24px;\n}\n.navbar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.logo-emblem[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--dcs-blue),\n      var(--dcs-blue-mid));\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  color: white;\n  box-shadow: 0 4px 12px rgba(26, 79, 160, 0.4);\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 900;\n}\n.logo-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.logo-main[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: var(--dcs-white);\n  letter-spacing: 0.05em;\n  line-height: 1;\n}\n.logo-sub[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.6rem;\n  color: var(--dcs-gold);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  line-height: 1;\n  margin-top: 2px;\n}\n.navbar-nav-desktop[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n}\n.nav-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  gap: 4px;\n  margin: 0;\n  padding: 0;\n}\n.nav-link-dcs[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.75);\n  padding: 8px 14px;\n  border-radius: var(--radius-full);\n  transition: var(--transition);\n  position: relative;\n}\n.nav-link-dcs[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 2px;\n  background: var(--dcs-gold);\n  border-radius: var(--radius-full);\n  transition: width 0.3s ease;\n}\n.nav-link-dcs[_ngcontent-%COMP%]:hover, \n.nav-link-dcs.active[_ngcontent-%COMP%] {\n  color: var(--dcs-white);\n}\n.nav-link-dcs[_ngcontent-%COMP%]:hover::after, \n.nav-link-dcs.active[_ngcontent-%COMP%]::after {\n  width: 24px;\n}\n.navbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.lang-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: var(--radius-full);\n  padding: 6px 12px;\n  font-family: var(--font-heading);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.6);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.lang-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.14);\n  color: rgba(255, 255, 255, 0.9);\n}\n.active-lang[_ngcontent-%COMP%] {\n  color: var(--dcs-gold);\n}\n.lang-divider[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.2);\n}\n.btn-nav-cta[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 0.75rem;\n}\n.menu-burger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n}\n.menu-burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 24px;\n  height: 2px;\n  background: var(--dcs-white);\n  border-radius: 2px;\n  transition: var(--transition);\n}\n.menu-burger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.menu-burger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.menu-burger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n  background: rgba(6, 15, 43, 0.99);\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s ease;\n}\n.mobile-menu.open[_ngcontent-%COMP%] {\n  max-height: 600px;\n}\n.mobile-menu-inner[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.mobile-nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.mobile-nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 16px;\n  font-family: var(--font-heading);\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.75);\n  border-radius: var(--radius-md);\n  transition: var(--transition);\n}\n.mobile-nav-link[_ngcontent-%COMP%]:hover, \n.mobile-nav-link.active[_ngcontent-%COMP%] {\n  color: var(--dcs-white);\n  background: rgba(255, 255, 255, 0.06);\n}\n.mobile-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.mobile-lang[_ngcontent-%COMP%] {\n  justify-content: center;\n  font-size: 0.85rem;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.justify-content-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n@media (max-width: 900px) {\n  .navbar-nav-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .btn-nav-cta[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-burger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 480px) {\n  .logo-sub[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent" });
})();

// src/app/shared/components/layouts/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  translation = inject(TranslationService);
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 79, vars: 14, consts: [[1, "footer-dcs"], [1, "footer-top"], [1, "container-dcs"], [1, "footer-grid"], [1, "footer-brand"], [1, "footer-logo"], [1, "footer-logo-emblem"], [1, "footer-tagline"], [1, "footer-social"], ["href", "https://facebook.com", "target", "_blank", "aria-label", "Facebook", 1, "social-btn"], [1, "fa-brands", "fa-facebook-f"], ["href", "https://instagram.com/DCS_Services", "target", "_blank", "aria-label", "Instagram", 1, "social-btn"], [1, "fa-brands", "fa-instagram"], ["href", "https://linkedin.com", "target", "_blank", "aria-label", "LinkedIn", 1, "social-btn"], [1, "fa-brands", "fa-linkedin-in"], ["href", "https://wa.me/221784324753", "target", "_blank", "aria-label", "WhatsApp", 1, "social-btn", "social-wa"], [1, "fa-brands", "fa-whatsapp"], [1, "footer-col"], [1, "footer-heading"], [1, "footer-links"], ["routerLink", "/services"], ["routerLink", "/accueil"], ["routerLink", "/a-propos"], ["routerLink", "/portfolio"], ["routerLink", "/contact"], [1, "footer-contact-list"], [1, "fa-solid", "fa-location-dot"], ["href", "https://wa.me/221784324753"], [1, "fa-solid", "fa-envelope"], ["href", "mailto:contact@dcservices.sn"], [1, "fa-solid", "fa-globe"], ["href", "https://dcservices.sn", "target", "_blank"], [1, "footer-bottom"], [1, "container-dcs", "footer-bottom-inner"], [1, "footer-copy"], [1, "footer-joj"], [1, "fa-solid", "fa-medal", "text-gold"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span");
      \u0275\u0275text(8, "DCS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "a", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 11);
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 13);
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 15);
      \u0275\u0275element(19, "i", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 17)(21, "h4", 18);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "ul", 19)(24, "li")(25, "a", 20);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li")(28, "a", 20);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "a", 20);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 20);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 17)(37, "h4", 18);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "ul", 19)(40, "li")(41, "a", 21);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li")(44, "a", 22);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 23);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 24);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 17)(53, "h4", 18);
      \u0275\u0275text(54, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "ul", 25)(56, "li");
      \u0275\u0275element(57, "i", 26);
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59, "Gu\xE9diawaye, Dakar, S\xE9n\xE9gal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li");
      \u0275\u0275element(61, "i", 16);
      \u0275\u0275elementStart(62, "a", 27);
      \u0275\u0275text(63, "+221 78 432 47 53");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li");
      \u0275\u0275element(65, "i", 28);
      \u0275\u0275elementStart(66, "a", 29);
      \u0275\u0275text(67, "contact@dcservices.sn");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li");
      \u0275\u0275element(69, "i", 30);
      \u0275\u0275elementStart(70, "a", 31);
      \u0275\u0275text(71, "dcservices.sn");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(72, "div", 32)(73, "div", 33)(74, "p", 34);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 35);
      \u0275\u0275element(77, "i", 36);
      \u0275\u0275text(78);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "L'Excellence au Service de Votre Vision." : "Excellence at the Service of Your Vision.", " ");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Nos Services" : "Our Services", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Caf\xE9 Touba" : "Caf\xE9 Touba");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Audiovisuel & TV" : "Audiovisual & TV");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "D\xE9coration & Personnalisation" : "Decoration & Customization");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Printing & Design" : "Printing & Design");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Navigation" : "Navigation", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Accueil" : "Home");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "\xC0 Propos" : "About Us");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "R\xE9alisations" : "Portfolio");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Contact" : "Contact");
      \u0275\u0275advance(24);
      \u0275\u0275textInterpolate2(" \xA9 ", ctx.currentYear, " DCS \u2014 Dawaamou Choukry Services. ", ctx.translation.isFr() ? "Tous droits r\xE9serv\xE9s." : "All rights reserved.", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Partenaire Local d'Excellence \u2014 Dakar 2026" : "Local Excellence Partner \u2014 Dakar 2026", " ");
    }
  }, dependencies: [RouterLink, CommonModule], styles: ['\n\n.footer-dcs[_ngcontent-%COMP%] {\n  background: var(--dcs-blue-darkest);\n  color: rgba(255, 255, 255, 0.7);\n}\n.footer-top[_ngcontent-%COMP%] {\n  padding: 72px 0 48px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.8fr 1fr 1fr 1.2fr;\n  gap: 48px;\n}\n.footer-brand[_ngcontent-%COMP%] {\n}\n.footer-logo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.footer-logo-emblem[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--dcs-blue),\n      var(--dcs-blue-mid));\n  border-radius: var(--radius-md);\n  padding: 10px 18px;\n}\n.footer-logo-emblem[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.6rem;\n  font-weight: 900;\n  color: white;\n  letter-spacing: 0.08em;\n}\n.footer-tagline[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 1.6;\n  margin-bottom: 24px;\n  max-width: 280px;\n  font-style: italic;\n}\n.footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.social-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-sm);\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 0.9rem;\n  transition: var(--transition);\n}\n.social-btn[_ngcontent-%COMP%]:hover {\n  background: var(--dcs-blue);\n  border-color: var(--dcs-blue);\n  color: white;\n  transform: translateY(-2px);\n}\n.social-wa[_ngcontent-%COMP%]:hover {\n  background: #25D366;\n  border-color: #25D366;\n}\n.footer-col[_ngcontent-%COMP%] {\n}\n.footer-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--dcs-gold);\n  margin-bottom: 20px;\n}\n.footer-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.6);\n  transition: var(--transition);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: "\\2192";\n  opacity: 0;\n  transform: translateX(-6px);\n  transition: var(--transition);\n  color: var(--dcs-gold);\n  font-size: 0.75rem;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--dcs-white);\n  padding-left: 6px;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  transform: translateX(0);\n}\n.footer-contact-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.footer-contact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  font-size: 0.9rem;\n}\n.footer-contact-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--dcs-gold);\n  margin-top: 2px;\n  width: 16px;\n  flex-shrink: 0;\n}\n.footer-contact-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  transition: var(--transition);\n}\n.footer-contact-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--dcs-white);\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.footer-bottom-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.footer-copy[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n.footer-joj[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-family: var(--font-heading);\n  color: rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.footer-joj[_ngcontent-%COMP%]   .text-gold[_ngcontent-%COMP%] {\n  color: var(--dcs-gold);\n}\n@media (max-width: 1024px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .footer-top[_ngcontent-%COMP%] {\n    padding: 48px 0 32px;\n  }\n  .footer-bottom-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent" });
})();

// src/app/shared/components/ui/whatsapp-btn/whatsapp-btn.component.ts
var WhatsappBtnComponent = class _WhatsappBtnComponent {
  translation = inject(TranslationService);
  get waLink() {
    const message = this.translation.isFr() ? "Bonjour DCS, je souhaite avoir plus d'informations sur vos services." : "Hello DCS, I would like more information about your services.";
    return `https://wa.me/221784324753?text=${encodeURIComponent(message)}`;
  }
  static \u0275fac = function WhatsappBtnComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhatsappBtnComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhatsappBtnComponent, selectors: [["app-whatsapp-btn"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 3, consts: [["target", "_blank", 1, "whatsapp-float", 3, "href"], [1, "wa-pulse"], [1, "fa-brands", "fa-whatsapp"], [1, "wa-tooltip"]], template: function WhatsappBtnComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275element(1, "div", 1)(2, "i", 2);
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("href", ctx.waLink, \u0275\u0275sanitizeUrl);
      \u0275\u0275attribute("aria-label", ctx.translation.isFr() ? "Contacter sur WhatsApp" : "Contact on WhatsApp");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Discutons !" : "Let's chat!");
    }
  }, dependencies: [CommonModule], styles: ['\n\n.whatsapp-float[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: var(--z-float);\n  width: 58px;\n  height: 58px;\n  background: #25D366;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.6rem;\n  color: white;\n  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);\n  transition: var(--transition);\n  text-decoration: none;\n}\n.whatsapp-float[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);\n  color: white;\n}\n.wa-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: rgba(37, 211, 102, 0.4);\n  animation: pulse-ring 2s ease-out infinite;\n}\n.wa-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%);\n  background: var(--dcs-black);\n  color: white;\n  padding: 6px 12px;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n}\n.wa-tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  border: 5px solid transparent;\n  border-left-color: var(--dcs-black);\n}\n.whatsapp-float[_ngcontent-%COMP%]:hover   .wa-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (max-width: 480px) {\n  .whatsapp-float[_ngcontent-%COMP%] {\n    bottom: 16px;\n    right: 16px;\n    width: 52px;\n    height: 52px;\n  }\n}\n/*# sourceMappingURL=whatsapp-btn.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhatsappBtnComponent, { className: "WhatsappBtnComponent" });
})();

// src/app/shared/components/layouts/public-layout/public-layout.component.ts
var PublicLayoutComponent = class _PublicLayoutComponent {
  platformId = inject(PLATFORM_ID);
  router = inject(Router);
  routerSub;
  observer;
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId))
      return;
    this.routerSub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      setTimeout(() => this.initScrollReveal(), 150);
    });
    setTimeout(() => this.initScrollReveal(), 350);
  }
  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.observer?.disconnect();
  }
  initScrollReveal() {
    this.observer?.disconnect();
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
      if (!el.classList.contains("visible")) {
        this.observer.observe(el);
      }
    });
  }
  static \u0275fac = function PublicLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLayoutComponent, selectors: [["app-public-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [[1, "main-content"]], template: function PublicLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "main", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-footer")(4, "app-whatsapp-btn");
    }
  }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappBtnComponent], styles: ["\n\n.main-content[_ngcontent-%COMP%] {\n  padding-top: 72px;\n}\n/*# sourceMappingURL=public-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLayoutComponent, { className: "PublicLayoutComponent" });
})();
export {
  PublicLayoutComponent
};
//# sourceMappingURL=chunk-PBKWP5VY.js.map
