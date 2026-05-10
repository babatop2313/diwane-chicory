import {
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter
} from "./chunk-WZSU5CGS.js";
import {
  DOCUMENT,
  provideZoneChangeDetection,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-Z4PFRYG5.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-PBKWP5VY.js").then((c) => c.PublicLayoutComponent),
    children: [
      {
        path: "accueil",
        loadComponent: () => import("./chunk-SK5G7CK4.js").then((c) => c.HomeComponent)
      },
      {
        path: "services",
        loadComponent: () => import("./chunk-7O4TPWLC.js").then((c) => c.ServicesComponent)
      },
      {
        path: "a-propos",
        loadComponent: () => import("./chunk-XELFUWQR.js").then((c) => c.AboutComponent)
      },
      {
        path: "portfolio",
        loadComponent: () => import("./chunk-ST2MD7N7.js").then((c) => c.PortfolioComponent)
      },
      {
        path: "contact",
        loadComponent: () => import("./chunk-NCAMQ6G5.js").then((c) => c.ContactComponent)
      },
      { path: "", redirectTo: "accueil", pathMatch: "full" }
    ]
  },
  {
    path: "auth",
    loadChildren: () => import("./chunk-ARXLFAQ3.js").then((r) => r.authRoutes)
  },
  {
    path: "utilisateurs",
    loadChildren: () => import("./chunk-R7LEGRI4.js").then((r) => r.userRoutes)
  },
  { path: "**", redirectTo: "/accueil" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: DOCUMENT,
      useValue: typeof document !== "undefined" ? document : {}
    }
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "dcs-website";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
