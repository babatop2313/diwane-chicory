import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/layouts/public-layout/public-layout.component').then(
        c => c.PublicLayoutComponent
      ),
    children: [
      {
        path: 'accueil',
        loadComponent: () =>
          import('./features/public/home/home.component').then(c => c.HomeComponent),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./features/public/services/services.component').then(c => c.ServicesComponent),
      },
      {
        path: 'a-propos',
        loadComponent: () =>
          import('./features/public/about/about.component').then(c => c.AboutComponent),
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('./features/public/portfolio/portfolio.component').then(c => c.PortfolioComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/public/contact/contact.component').then(c => c.ContactComponent),
      },
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/accueil' },
];
