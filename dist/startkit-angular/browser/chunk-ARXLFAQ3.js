import {
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-WZSU5CGS.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-Z4PFRYG5.js";

// src/app/features/back-office/auth/components/login/login.component.ts
var _c0 = () => ["/auth/forgot-password"];
var _c1 = () => ["/utilisateurs"];
var LoginComponent = class _LoginComponent {
  login() {
    console.log("login");
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 4, consts: [[1, "text-center"], [1, "row", "mt-5", "g-3"], [1, "col-sm-12"], [1, "form-label"], ["type", "text", "placeholder", "Saisir", 1, "form-control"], [1, "input-group", "input-custom-group"], ["placeholder", "*******", 1, "form-control"], [1, "col-md-12"], ["title", "Mot de passe oubli\xE9", 1, "text-span", "d-flex", "justify-content-end", "my-2", "text-blue", 3, "routerLink"], ["type", "button", 1, "button", "button-primary", "w-100", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1, "Authentification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "form")(3, "div", 1)(4, "div", 2)(5, "label", 3);
      \u0275\u0275text(6, "Identifiant");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 2)(9, "label", 3);
      \u0275\u0275text(10, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5);
      \u0275\u0275element(12, "input", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "a", 8)(15, "small");
      \u0275\u0275text(16, "Mot de passe oubli\xE9 ?");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 7)(18, "button", 9);
      \u0275\u0275text(19, "Se connecter");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c1));
    }
  }, dependencies: [RouterModule, RouterLink], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: 2px 2px 64px -4px rgba(0, 0, 0, 0.11);\n  padding: 0;\n  margin: 0;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-size: 1rem;\n  font-weight: 600;\n  margin-top: 20px;\n  background-color: blue;\n  color: white;\n  border: none;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent" });
})();

// src/app/features/back-office/auth/components/forgot-password/forgot-password.component.ts
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "forgot-password works!");
      \u0275\u0275elementEnd();
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent" });
})();

// src/app/features/back-office/auth/components/reset-password/reset-password.component.ts
var ResetPasswordComponent = class _ResetPasswordComponent {
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "reset-password works!");
      \u0275\u0275elementEnd();
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent" });
})();

// src/app/shared/components/layouts/mainguest/mainguest.component.ts
var MainguestComponent = class _MainguestComponent {
  static \u0275fac = function MainguestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainguestComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainguestComponent, selectors: [["app-mainguest"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 0, consts: [[1, "container"], [1, "centre-box"], [1, "row", "justify-content-center", "align-items-center", "centre-box-container"], [1, "col-lg-6", "d-none", "d-lg-block", "py-5"], ["src", "assets/images/login-image.svg", "alt", "Titre du projet", 1, "img-fluid", "img-left"], [1, "col-lg-6", "bg-grey", "p-5"], [1, "card-form"], ["src", "assets/images/logo-image.svg", "id", "logo", "alt", "Titre du projet", 1, "img-fluid"]], template: function MainguestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "img", 7)(8, "router-outlet");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [RouterOutlet], styles: ["\n\n.centre-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n}\n.centre-box[_ngcontent-%COMP%]   .centre-box-container[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: 2px 2px 64px -4px rgba(0, 0, 0, 0.11);\n  padding: 0;\n  margin: 0;\n}\n.card-form[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 30px auto;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #E5F0F7;\n}\n.img-left[_ngcontent-%COMP%] {\n  max-height: 420px;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=mainguest.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainguestComponent, { className: "MainguestComponent" });
})();

// src/app/features/back-office/auth/auth.routes.ts
var authRoutes = [
  {
    path: "",
    component: MainguestComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent
      },
      {
        path: "reset-password",
        component: ResetPasswordComponent
      },
      { path: "", redirectTo: "login", pathMatch: "full" }
    ]
  }
];
export {
  authRoutes
};
//# sourceMappingURL=chunk-ARXLFAQ3.js.map
