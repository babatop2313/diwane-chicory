import { Component, inject, signal, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../services/translation.service';
import { NavItem } from '../../../models/nav-item.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  translation = inject(TranslationService);
  isScrolled = signal(false);
  menuOpen = signal(false);

  navItems: NavItem[] = [
    { labelFr: 'Accueil',       labelEn: 'Home',      route: '/accueil' },
    { labelFr: 'Nos Services',  labelEn: 'Services',  route: '/services' },
    { labelFr: 'À Propos',      labelEn: 'About',     route: '/a-propos' },
    { labelFr: 'Réalisations',  labelEn: 'Portfolio', route: '/portfolio' },
    { labelFr: 'Contact',       labelEn: 'Contact',   route: '/contact' },
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  getLabel(item: NavItem): string {
    return this.translation.isFr() ? item.labelFr : item.labelEn;
  }
}
