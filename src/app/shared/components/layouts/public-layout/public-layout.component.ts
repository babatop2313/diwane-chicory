import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappBtnComponent } from '../../ui/whatsapp-btn/whatsapp-btn.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappBtnComponent],
  template: `
    <app-navbar />
    <main class="main-content">
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-btn />
  `,
  styles: [`
    .main-content { padding-top: 72px; }
  `],
})
export class PublicLayoutComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private router     = inject(Router);
  private routerSub?: Subscription;
  private observer?:  IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // ── Navigations SUIVANTES ──────────────────────────────────────────────
    // Scroll en haut + révèle les éléments de la nouvelle page.
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => this.initScrollReveal(), 150);
    });

    // ── PREMIER CHARGEMENT ─────────────────────────────────────────────────
    // La NavigationEnd initiale peut se déclencher avant que la souscription
    // ci-dessus soit établie (timing lazy-load). Ce second timer joue le rôle
    // de filet de sécurité ; il saute les éléments déjà visibles pour éviter
    // tout flash visuel en cas de double exécution.
    setTimeout(() => this.initScrollReveal(), 350);
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.observer?.disconnect();
  }

  private initScrollReveal(): void {
    // Déconnecte l'observeur précédent avant d'en créer un nouveau.
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Plus besoin d'observer cet élément une fois visible.
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      // Ne réinitialise pas les éléments déjà visibles → évite le flash.
      if (!el.classList.contains('visible')) {
        this.observer!.observe(el);
      }
    });
  }
}
