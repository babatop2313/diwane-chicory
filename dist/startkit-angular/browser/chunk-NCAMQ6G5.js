import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OU3CQOBY.js";
import {
  TranslationService
} from "./chunk-2DRHV6S6.js";
import {
  CommonModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
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
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z4PFRYG5.js";

// src/app/features/public/contact/contact.component.ts
var _forTrack0 = ($index, $item) => $item.titleFr;
var _forTrack1 = ($index, $item) => $item.value;
function ContactComponent_For_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const info_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", info_r1.link, \u0275\u0275sanitizeUrl)("target", info_r1.link.startsWith("http") ? "_blank" : "_self");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInfoValue(info_r1), " ");
  }
}
function ContactComponent_For_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const info_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInfoValue(info_r1));
  }
}
function ContactComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 46);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47)(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ContactComponent_For_23_Conditional_6_Template, 2, 3, "a", 49)(7, ContactComponent_For_23_Conditional_7_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const info_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("fa-solid ", info_r1.icon, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getInfoTitle(info_r1));
    \u0275\u0275advance();
    \u0275\u0275conditional(info_r1.link ? 6 : 7);
  }
}
function ContactComponent_Conditional_46_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", s_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getServiceLabel(s_r4));
  }
}
function ContactComponent_Conditional_46_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Veuillez remplir tous les champs obligatoires." : "Please fill in all required fields.", " ");
  }
}
function ContactComponent_Conditional_46_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 75);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Envoi en cours..." : "Sending...", " ");
  }
}
function ContactComponent_Conditional_46_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 5);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Envoyer le Message" : "Send Message", " ");
  }
}
function ContactComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 51)(2, "h3", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 54, 0);
    \u0275\u0275listener("ngSubmit", function ContactComponent_Conditional_46_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(8, "div", 55)(9, "div", 56)(10, "label", 57);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 58);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_46_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 56)(16, "label", 60);
    \u0275\u0275text(17, " Email ");
    \u0275\u0275elementStart(18, "span", 58);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_46_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 55)(22, "div", 56)(23, "label", 62);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_46_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 56)(27, "label", 64);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_46_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.service, $event) || (ctx_r1.form.service = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 66);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(32, ContactComponent_Conditional_46_For_33_Template, 2, 2, "option", 67, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 56)(35, "label", 68);
    \u0275\u0275text(36);
    \u0275\u0275elementStart(37, "span", 58);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "textarea", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Conditional_46_Template_textarea_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.message, $event) || (ctx_r1.form.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, ContactComponent_Conditional_46_Conditional_40_Template, 3, 1, "div", 70);
    \u0275\u0275elementStart(41, "button", 71);
    \u0275\u0275template(42, ContactComponent_Conditional_46_Conditional_42_Template, 2, 1)(43, ContactComponent_Conditional_46_Conditional_43_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 72);
    \u0275\u0275element(45, "i", 73);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Envoyer un Message" : "Send a Message", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Remplissez ce formulaire et nous vous r\xE9pondrons dans les 24h." : "Fill in this form and we will get back to you within 24 hours.", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Nom Complet" : "Full Name", " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275property("placeholder", ctx_r1.translation.isFr() ? "Votre nom complet" : "Your full name");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275property("placeholder", ctx_r1.translation.isFr() ? "votre@email.com" : "your@email.com");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "T\xE9l\xE9phone / WhatsApp" : "Phone / WhatsApp", " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Service Concern\xE9" : "Service of Interest", " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.service);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translation.isFr() ? "\u2014 Choisir un service \u2014" : "\u2014 Choose a service \u2014");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.services);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Votre Message" : "Your Message", " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.message);
    \u0275\u0275property("placeholder", ctx_r1.translation.isFr() ? "D\xE9crivez votre projet, vos besoins, votre budget estimatif..." : "Describe your project, your needs, your estimated budget...");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error() ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.sending());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sending() ? 42 : 43);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Vos donn\xE9es sont trait\xE9es de mani\xE8re confidentielle." : "Your data is handled confidentially.", " ");
  }
}
function ContactComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 76);
    \u0275\u0275element(2, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 80)(8, "button", 81);
    \u0275\u0275listener("click", function ContactComponent_Conditional_47_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275element(9, "i", 82);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 83);
    \u0275\u0275element(12, "i", 26);
    \u0275\u0275text(13, " WhatsApp ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Message Re\xE7u !" : "Message Received!", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Merci de nous avoir contact\xE9s. Votre message a \xE9t\xE9 transmis via WhatsApp et notre \xE9quipe vous r\xE9pondra dans les plus brefs d\xE9lais." : "Thank you for contacting us. Your message has been forwarded via WhatsApp and our team will respond as soon as possible.", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translation.isFr() ? "Nouveau Message" : "New Message", " ");
  }
}
var ContactComponent = class _ContactComponent {
  translation = inject(TranslationService);
  form = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  };
  submitted = signal(false);
  sending = signal(false);
  error = signal(false);
  services = [
    { value: "coffee", labelFr: "DCS Coffee Shop \u2014 Caf\xE9 Touba", labelEn: "DCS Coffee Shop \u2014 Caf\xE9 Touba" },
    { value: "audiovisuel", labelFr: "DCS Audiovisuel & TV", labelEn: "DCS Audiovisual & TV" },
    { value: "decoration", labelFr: "DCS D\xE9coration & Personnalisation", labelEn: "DCS Decoration & Customization" },
    { value: "printing", labelFr: "DCS Printing & Design", labelEn: "DCS Printing & Design" },
    { value: "other", labelFr: "Autre / Plusieurs services", labelEn: "Other / Multiple services" }
  ];
  contactInfos = [
    {
      icon: "fa-location-dot",
      titleFr: "Adresse",
      titleEn: "Address",
      valueFr: "Gu\xE9diawaye, Dakar, S\xE9n\xE9gal",
      valueEn: "Gu\xE9diawaye, Dakar, Senegal",
      link: null
    },
    {
      icon: "fa-whatsapp brands",
      titleFr: "WhatsApp",
      titleEn: "WhatsApp",
      valueFr: "+221 78 432 47 53",
      valueEn: "+221 78 432 47 53",
      link: "https://wa.me/221784324753"
    },
    {
      icon: "fa-envelope",
      titleFr: "Email",
      titleEn: "Email",
      valueFr: "contact@dcservices.sn",
      valueEn: "contact@dcservices.sn",
      link: "mailto:contact@dcservices.sn"
    },
    {
      icon: "fa-globe",
      titleFr: "Site Web",
      titleEn: "Website",
      valueFr: "dcservices.sn",
      valueEn: "dcservices.sn",
      link: "https://dcservices.sn"
    },
    {
      icon: "fa-clock",
      titleFr: "Disponibilit\xE9",
      titleEn: "Availability",
      valueFr: "Lun \u2013 Sam : 8h \u2013 20h",
      valueEn: "Mon \u2013 Sat: 8am \u2013 8pm",
      link: null
    }
  ];
  getServiceLabel(s) {
    return this.translation.isFr() ? s.labelFr : s.labelEn;
  }
  getInfoTitle(info) {
    return this.translation.isFr() ? info.titleFr : info.titleEn;
  }
  getInfoValue(info) {
    return this.translation.isFr() ? info.valueFr : info.valueEn;
  }
  isValid() {
    return !!(this.form.name.trim() && this.form.email.trim() && this.form.message.trim());
  }
  onSubmit() {
    if (!this.isValid())
      return;
    this.sending.set(true);
    this.error.set(false);
    const serviceLabel = this.services.find((s) => s.value === this.form.service)?.labelFr ?? this.form.service;
    const msg = `Bonjour DCS,

Nom: ${this.form.name}
Email: ${this.form.email}
T\xE9l: ${this.form.phone}
Service: ${serviceLabel}

Message:
${this.form.message}`;
    const waUrl = `https://wa.me/221784324753?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      window.open(waUrl, "_blank");
    }, 800);
  }
  resetForm() {
    this.form = { name: "", email: "", phone: "", service: "", message: "" };
    this.submitted.set(false);
    this.error.set(false);
  }
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 70, vars: 14, consts: [["f", "ngForm"], [1, "page-hero", "bg-dark-blue"], [1, "container-dcs"], [1, "page-hero-content", "reveal"], [1, "section-badge", "section-badge-dark"], [1, "fa-solid", "fa-paper-plane"], [1, "page-hero-title"], [1, "highlight-gold"], [1, "page-hero-subtitle"], [1, "section", "contact-section"], [1, "contact-grid"], [1, "contact-info-col", "reveal-left"], [1, "contact-info-title"], [1, "contact-info-subtitle"], [1, "contact-info-list"], [1, "contact-info-item"], [1, "contact-social"], [1, "contact-social-title"], [1, "contact-social-links"], ["href", "https://facebook.com", "target", "_blank", "aria-label", "Facebook", 1, "contact-social-btn"], [1, "fa-brands", "fa-facebook-f"], ["href", "https://instagram.com/DCS_Services", "target", "_blank", "aria-label", "Instagram", 1, "contact-social-btn"], [1, "fa-brands", "fa-instagram"], ["href", "https://linkedin.com", "target", "_blank", "aria-label", "LinkedIn", 1, "contact-social-btn"], [1, "fa-brands", "fa-linkedin-in"], ["href", "https://wa.me/221784324753", "target", "_blank", "aria-label", "WhatsApp", 1, "contact-social-btn", "contact-social-wa"], [1, "fa-brands", "fa-whatsapp"], ["href", "https://wa.me/221784324753", "target", "_blank", 1, "whatsapp-quick-cta"], [1, "wa-quick-icon"], [1, "wa-quick-text"], [1, "fa-solid", "fa-arrow-right", "wa-quick-arrow"], [1, "contact-form-col", "reveal-right"], [1, "contact-form-card"], [1, "contact-success-card"], [1, "section", "bg-off-white", "location-section"], [1, "section-header", "centered"], [1, "section-badge", "reveal"], [1, "fa-solid", "fa-map-location-dot"], [1, "section-title", "reveal"], [1, "highlight"], [1, "title-divider", "centered", "reveal"], [1, "location-card", "reveal"], [1, "location-map-placeholder"], [1, "location-map-text"], ["href", "https://maps.google.com/?q=Gu\xE9diawaye+Dakar+S\xE9n\xE9gal", "target", "_blank", 1, "btn-dcs", "btn-dcs-primary", "location-map-btn"], [1, "fa-solid", "fa-diamond-turn-right"], [1, "contact-info-icon"], [1, "contact-info-text"], [1, "contact-info-label"], [1, "contact-info-value", "contact-link", 3, "href", "target"], [1, "contact-info-value"], [1, "contact-form-header"], [1, "contact-form-title"], [1, "contact-form-subtitle"], ["novalidate", "", 1, "form-dcs", 3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["for", "name"], [1, "required"], ["id", "name", "type", "text", "name", "name", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "phone"], ["id", "phone", "type", "tel", "name", "phone", "placeholder", "+221 XX XXX XX XX", 3, "ngModelChange", "ngModel"], ["for", "service"], ["id", "service", "name", "service", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["for", "message"], ["id", "message", "name", "message", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-error-msg"], ["type", "submit", 1, "btn-dcs", "btn-dcs-primary", "contact-submit-btn", 3, "disabled"], [1, "form-note"], [1, "fa-solid", "fa-lock"], [1, "fa-solid", "fa-circle-exclamation"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "success-icon"], [1, "fa-solid", "fa-circle-check"], [1, "success-title"], [1, "success-text"], [1, "success-actions"], [1, "btn-dcs", "btn-dcs-outline-blue", 3, "click"], [1, "fa-solid", "fa-rotate-left"], ["href", "https://wa.me/221784324753", "target", "_blank", 1, "btn-dcs", "btn-dcs-primary"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
      \u0275\u0275element(4, "i", 5);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7);
      \u0275\u0275element(8, "br");
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "section", 9)(14, "div", 2)(15, "div", 10)(16, "div", 11)(17, "h2", 12);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 13);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275repeaterCreate(22, ContactComponent_For_23_Template, 8, 5, "div", 15, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 16)(25, "h4", 17);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 18)(28, "a", 19);
      \u0275\u0275element(29, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 21);
      \u0275\u0275element(31, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 23);
      \u0275\u0275element(33, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "a", 25);
      \u0275\u0275element(35, "i", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "a", 27)(37, "div", 28);
      \u0275\u0275element(38, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 29)(40, "strong");
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "i", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 31);
      \u0275\u0275template(46, ContactComponent_Conditional_46_Template, 47, 19, "div", 32)(47, ContactComponent_Conditional_47_Template, 14, 3, "div", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "section", 34)(49, "div", 2)(50, "div", 35)(51, "span", 36);
      \u0275\u0275element(52, "i", 37);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "h2", 38);
      \u0275\u0275text(55);
      \u0275\u0275elementStart(56, "span", 39);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(58, "div", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 41)(60, "div", 42);
      \u0275\u0275element(61, "i", 37);
      \u0275\u0275elementStart(62, "div", 43)(63, "strong");
      \u0275\u0275text(64, "DCS \u2014 Dawaamou Choukry Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "Gu\xE9diawaye, Dakar, S\xE9n\xE9gal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "a", 44);
      \u0275\u0275element(68, "i", 45);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Contactez-nous" : "Contact Us", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Parlons de" : "Let's Talk About", "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Votre Projet" : "Your Project");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Notre \xE9quipe est disponible pour r\xE9pondre \xE0 vos questions et vous accompagner dans la r\xE9alisation de vos projets." : "Our team is available to answer your questions and support you in bringing your projects to life.", " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Nos Coordonn\xE9es" : "Our Contact Details", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Choisissez le canal de communication qui vous convient le mieux." : "Choose the communication channel that suits you best.", " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.contactInfos);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Suivez-nous" : "Follow us");
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Chat instantan\xE9" : "Instant Chat");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "R\xE9ponse rapide garantie" : "Quick response guaranteed");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.submitted() ? 46 : 47);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "O\xF9 Nous Trouver" : "Where to Find Us", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Notre" : "Our", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translation.isFr() ? "Localisation" : "Location");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", ctx.translation.isFr() ? "Obtenir l'itin\xE9raire" : "Get Directions", " ");
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.page-hero[_ngcontent-%COMP%] {\n  padding: 80px 0 60px;\n  text-align: center;\n}\n.section-badge-dark[_ngcontent-%COMP%] {\n  background: rgba(201, 162, 39, 0.15);\n  border-color: rgba(201, 162, 39, 0.3);\n  color: var(--dcs-gold);\n}\n.page-hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: clamp(2rem, 4vw, 3.5rem);\n  font-weight: 800;\n  color: var(--dcs-white);\n  margin: 16px 0 20px;\n  line-height: 1.1;\n}\n.page-hero-subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 1.05rem;\n  color: rgba(255, 255, 255, 0.7);\n  max-width: 580px;\n  margin: 0 auto;\n  line-height: 1.75;\n}\n.contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 64px;\n  align-items: start;\n}\n.contact-info-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--dcs-black);\n  margin-bottom: 10px;\n}\n.contact-info-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--color-text-light);\n  margin-bottom: 32px;\n  line-height: 1.6;\n}\n.contact-info-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 36px;\n}\n.contact-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}\n.contact-info-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: var(--dcs-blue-pale);\n  border: 1px solid rgba(26, 79, 160, 0.2);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dcs-blue);\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.contact-info-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.contact-info-label[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--dcs-grey-mid);\n}\n.contact-info-value[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.95rem;\n  color: var(--dcs-grey-dark);\n  font-weight: 500;\n}\n.contact-link[_ngcontent-%COMP%]:hover {\n  color: var(--dcs-blue);\n}\n.contact-social[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.contact-social-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--dcs-grey-mid);\n  margin-bottom: 14px;\n}\n.contact-social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.contact-social-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--dcs-off-white);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  color: var(--dcs-grey);\n  font-size: 0.95rem;\n  transition: var(--transition);\n}\n.contact-social-btn[_ngcontent-%COMP%]:hover {\n  background: var(--dcs-blue);\n  border-color: var(--dcs-blue);\n  color: white;\n  transform: translateY(-2px);\n}\n.contact-social-wa[_ngcontent-%COMP%]:hover {\n  background: #25D366;\n  border-color: #25D366;\n}\n.whatsapp-quick-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #128C7E,\n      #25D366);\n  border-radius: var(--radius-lg);\n  text-decoration: none;\n  transition: var(--transition);\n  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);\n}\n.whatsapp-quick-cta[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(37, 211, 102, 0.45);\n}\n.wa-quick-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  color: white;\n  flex-shrink: 0;\n}\n.wa-quick-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.wa-quick-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: white;\n}\n.wa-quick-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.8);\n}\n.wa-quick-arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.9rem;\n}\n.contact-form-card[_ngcontent-%COMP%] {\n  background: var(--dcs-white);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-xl);\n  overflow: hidden;\n  border: 1px solid var(--color-border);\n}\n.contact-form-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--dcs-blue-dark),\n      var(--dcs-blue));\n  padding: 28px 36px;\n}\n.contact-form-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--dcs-white);\n  margin-bottom: 4px;\n}\n.contact-form-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.form-dcs[_ngcontent-%COMP%] {\n  padding: 32px 36px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.required[_ngcontent-%COMP%] {\n  color: #EF4444;\n  margin-left: 3px;\n}\n.form-error-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  color: #DC2626;\n  padding: 10px 14px;\n  border-radius: var(--radius-md);\n  font-size: 0.85rem;\n  margin-bottom: 16px;\n}\n.contact-submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  font-size: 0.9rem;\n  padding: 16px;\n}\n.contact-submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n.form-note[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  text-align: center;\n  font-size: 0.75rem;\n  color: var(--color-text-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.form-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--dcs-blue);\n}\n.contact-success-card[_ngcontent-%COMP%] {\n  background: var(--dcs-white);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-xl);\n  border: 1px solid var(--color-border);\n  padding: 64px 48px;\n  text-align: center;\n  animation: scaleIn 0.4s ease;\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #22C55E;\n  margin-bottom: 24px;\n  animation: scaleIn 0.5s ease;\n}\n.success-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--dcs-black);\n  margin-bottom: 16px;\n}\n.success-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--color-text-light);\n  line-height: 1.7;\n  max-width: 400px;\n  margin: 0 auto 32px;\n}\n.success-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.location-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n  border: 1px solid var(--color-border);\n}\n.location-map-placeholder[_ngcontent-%COMP%] {\n  height: 320px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--dcs-blue-darkest) 0%,\n      var(--dcs-blue-dark) 50%,\n      var(--dcs-blue) 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  text-align: center;\n  padding: 32px;\n}\n.location-map-placeholder[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--dcs-gold);\n  opacity: 0.8;\n}\n.location-map-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.location-map-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--dcs-white);\n}\n.location-map-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.65);\n}\n.location-map-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 10px 22px;\n  font-size: 0.8rem;\n}\n@media (max-width: 1024px) {\n  .contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 48px;\n  }\n}\n@media (max-width: 640px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact-form-header[_ngcontent-%COMP%] {\n    padding: 22px 24px;\n  }\n  .form-dcs[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .contact-success-card[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent" });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-NCAMQ6G5.js.map
