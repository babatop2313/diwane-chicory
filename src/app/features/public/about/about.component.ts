import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  translation = inject(TranslationService);

  timeline = [
    {
      year: '2018',
      titleFr: 'Fondation de DCS',
      titleEn: 'DCS Founded',
      descFr: 'Dawaamou Choukry Services naît à Guédiawaye, Dakar, avec une vision claire : l\'excellence au service de la communauté locale.',
      descEn: 'Dawaamou Choukry Services is born in Guédiawaye, Dakar, with a clear vision: excellence in service of the local community.',
    },
    {
      year: '2020',
      titleFr: 'Expansion des Services',
      titleEn: 'Service Expansion',
      descFr: 'Lancement des services audiovisuels et d\'impression personnalisée, élargissant notre offre au-delà du Café Touba.',
      descEn: 'Launch of audiovisual services and custom printing, expanding our offering beyond Café Touba.',
    },
    {
      year: '2022',
      titleFr: 'Partenariats Stratégiques',
      titleEn: 'Strategic Partnerships',
      descFr: '150+ clients et de nombreux partenariats avec des entreprises, institutions et organisateurs d\'événements à Dakar.',
      descEn: '150+ clients and numerous partnerships with businesses, institutions and event organizers in Dakar.',
    },
    {
      year: '2024',
      titleFr: 'Reconnaissance Nationale',
      titleEn: 'National Recognition',
      descFr: 'DCS est reconnu comme partenaire local d\'excellence, positionnant Guédiawaye sur la carte des prestataires premium.',
      descEn: 'DCS is recognized as a local excellence partner, placing Guédiawaye on the map of premium service providers.',
    },
    {
      year: '2026',
      titleFr: 'JOJ Dakar 2026',
      titleEn: 'JOJ Dakar 2026',
      descFr: 'DCS s\'associe aux Jeux Olympiques de la Jeunesse Dakar 2026, une reconnaissance internationale de notre savoir-faire.',
      descEn: 'DCS partners with the Dakar 2026 Youth Olympic Games, an international recognition of our expertise.',
    },
  ];

  values = [
    {
      icon: 'fa-medal',
      titleFr: 'Excellence',
      titleEn: 'Excellence',
      descFr: 'Chaque prestation est réalisée avec le plus haut niveau d\'exigence et de professionnalisme.',
      descEn: 'Every service is delivered with the highest level of demand and professionalism.',
      color: '#C9A227',
    },
    {
      icon: 'fa-heart',
      titleFr: 'Teranga',
      titleEn: 'Teranga',
      descFr: 'L\'hospitalité sénégalaise au cœur de chaque interaction, chaque service, chaque moment.',
      descEn: 'Senegalese hospitality at the heart of every interaction, every service, every moment.',
      color: '#1A4FA0',
    },
    {
      icon: 'fa-handshake',
      titleFr: 'Confiance',
      titleEn: 'Trust',
      descFr: 'Des relations durables fondées sur la transparence, l\'honnêteté et la livraison de nos promesses.',
      descEn: 'Lasting relationships based on transparency, honesty and delivery of our promises.',
      color: '#059669',
    },
    {
      icon: 'fa-lightbulb',
      titleFr: 'Innovation',
      titleEn: 'Innovation',
      descFr: 'Toujours à la recherche de nouvelles façons de dépasser les attentes de nos clients.',
      descEn: 'Always looking for new ways to exceed our clients\' expectations.',
      color: '#7C3AED',
    },
  ];

  team = [
    {
      name: 'Cheikh Tidiane Diallo',
      roleFr: 'Fondateur & Directeur Général',
      roleEn: 'Founder & CEO',
      descFr: 'Visionnaire et entrepreneur, Cheikh a fondé DCS avec la conviction que l\'excellence locale peut rivaliser avec les standards internationaux.',
      descEn: 'Visionary and entrepreneur, Cheikh founded DCS with the conviction that local excellence can rival international standards.',
      initials: 'CT',
    },
    {
      name: 'Aminata Sow',
      roleFr: 'Directrice des Opérations',
      roleEn: 'Operations Director',
      descFr: 'Avec 8 ans d\'expérience en gestion de projets événementiels, Aminata garantit la qualité de chaque prestation DCS.',
      descEn: 'With 8 years of experience in event project management, Aminata guarantees the quality of every DCS service.',
      initials: 'AS',
    },
    {
      name: 'Moussa Ndoye',
      roleFr: 'Directeur Audiovisuel',
      roleEn: 'Audiovisual Director',
      descFr: 'Expert en production vidéo et réalisation, Moussa dirige l\'équipe audiovisuelle DCS avec passion et créativité.',
      descEn: 'Expert in video production and direction, Moussa leads the DCS audiovisual team with passion and creativity.',
      initials: 'MN',
    },
    {
      name: 'Rokhaya Faye',
      roleFr: 'Directrice Créative',
      roleEn: 'Creative Director',
      descFr: 'Designer accomplie, Rokhaya orchestre la décoration et le design graphique de DCS avec un sens artistique remarquable.',
      descEn: 'Accomplished designer, Rokhaya orchestrates DCS decoration and graphic design with remarkable artistic sense.',
      initials: 'RF',
    },
  ];

  getMemberRole(member: { roleFr: string; roleEn: string }): string {
    return this.translation.isFr() ? member.roleFr : member.roleEn;
  }

  getMemberDesc(member: { descFr: string; descEn: string }): string {
    return this.translation.isFr() ? member.descFr : member.descEn;
  }

  getValueTitle(v: { titleFr: string; titleEn: string }): string {
    return this.translation.isFr() ? v.titleFr : v.titleEn;
  }

  getValueDesc(v: { descFr: string; descEn: string }): string {
    return this.translation.isFr() ? v.descFr : v.descEn;
  }

  getTimelineTitle(t: { titleFr: string; titleEn: string }): string {
    return this.translation.isFr() ? t.titleFr : t.titleEn;
  }

  getTimelineDesc(t: { descFr: string; descEn: string }): string {
    return this.translation.isFr() ? t.descFr : t.descEn;
  }
}
