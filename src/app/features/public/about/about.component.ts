import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../shared/services/translation.service';

interface TimelineItem {
  year: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  icon: string;
}

interface Value {
  icon: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  color: string;
}

interface TeamMember {
  name: string;
  roleFr: string;
  roleEn: string;
  descFr: string;
  descEn: string;
  initials: string;
  color: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  translation = inject(TranslationService);

  stats = [
    { value: '5+',   labelFr: "Années d'experience", labelEn: 'Years of experience' },
    { value: '200+', labelFr: 'Projets réalisés',     labelEn: 'Projects completed'  },
    { value: '150+', labelFr: 'Clients satisfaits',   labelEn: 'Satisfied clients'   },
  ];

  timeline: TimelineItem[] = [
    {
      year: '2018',
      icon: 'fa-rocket',
      titleFr: 'Fondation de DCS',
      titleEn: 'DCS Founded',
      descFr: "Dawaamou Choukry Services est fondée à Guédiawaye avec une vision claire : offrir des services premium authentiquement sénégalais.",
      descEn: "Dawaamou Choukry Services is founded in Guédiawaye with a clear vision: offer premium authentically Senegalese services.",
    },
    {
      year: '2020',
      icon: 'fa-expand',
      titleFr: 'Expansion des Services',
      titleEn: 'Service Expansion',
      descFr: "DCS lance ses pôles Audiovisuel et Printing & Design, diversifiant son offre pour mieux servir les entreprises dakaroises.",
      descEn: "DCS launches its Audiovisual and Printing & Design divisions, diversifying its offer to better serve Dakar businesses.",
    },
    {
      year: '2022',
      icon: 'fa-handshake',
      titleFr: 'Partenariats Stratégiques',
      titleEn: 'Strategic Partnerships',
      descFr: "DCS signe des partenariats avec des institutions et grandes entreprises, consolidant sa réputation d'excellence locale.",
      descEn: "DCS signs partnerships with institutions and major companies, consolidating its reputation for local excellence.",
    },
    {
      year: '2024',
      icon: 'fa-medal',
      titleFr: 'Reconnaissance & Prix',
      titleEn: 'Recognition & Awards',
      descFr: "DCS est reconnue comme l'une des entreprises de services les plus innovantes du Sénégal par plusieurs organisations professionnelles.",
      descEn: "DCS is recognized as one of Senegal's most innovative service companies by several professional organizations.",
    },
    {
      year: '2026',
      icon: 'fa-trophy',
      titleFr: 'Partenaire JOJ Dakar 2026',
      titleEn: 'JOJ Dakar 2026 Partner',
      descFr: "DCS devient partenaire officiel des Jeux Olympiques de la Jeunesse Dakar 2026 — une consécration de 8 années d'excellence.",
      descEn: "DCS becomes an official partner of the 2026 Youth Olympic Games in Dakar — a consecration of 8 years of excellence.",
    },
  ];

  values: Value[] = [
    {
      icon: 'fa-medal',
      titleFr: 'Excellence',
      titleEn: 'Excellence',
      descFr: "Nous visons la perfection dans chaque prestation. Chaque détail compte pour dépasser vos attentes.",
      descEn: "We aim for perfection in every service. Every detail matters to exceed your expectations.",
      color: '#C9A227',
    },
    {
      icon: 'fa-heart',
      titleFr: 'Teranga',
      titleEn: 'Teranga',
      descFr: "L'hospitalité sénégalaise est au cœur de notre culture d'entreprise — chaleur, respect et bienveillance.",
      descEn: "Senegalese hospitality is at the heart of our business culture — warmth, respect and kindness.",
      color: '#1A4FA0',
    },
    {
      icon: 'fa-shield-halved',
      titleFr: 'Confiance',
      titleEn: 'Trust',
      descFr: "La transparence et l'intégrité sont nos piliers fondamentaux. Vous pouvez compter sur nous.",
      descEn: "Transparency and integrity are our fundamental pillars. You can count on us.",
      color: '#10B981',
    },
    {
      icon: 'fa-lightbulb',
      titleFr: 'Innovation',
      titleEn: 'Innovation',
      descFr: "Nous combinons tradition et modernité pour créer des solutions créatives et toujours plus efficaces.",
      descEn: "We combine tradition and modernity to create creative and increasingly effective solutions.",
      color: '#8B5CF6',
    },
  ];

  team: TeamMember[] = [
    {
      name: 'Cheikh Tidiane Ndiaye',
      roleFr: 'Fondateur & Directeur Général',
      roleEn: 'Founder & CEO',
      descFr: "Visionnaire et entrepreneur passionné, Cheikh Tidiane a fondé DCS avec la conviction que l'excellence locale peut rivaliser avec les standards internationaux.",
      descEn: "Visionary and passionate entrepreneur, Cheikh Tidiane founded DCS with the conviction that local excellence can rival international standards.",
      initials: 'CN',
      color: 'linear-gradient(135deg, #1A4FA0, #2563C4)',
    },
    {
      name: 'Aminata Sow',
      roleFr: 'Directrice des Opérations',
      roleEn: 'Operations Director',
      descFr: "Avec plus de 10 ans d'expérience en gestion de projets, Aminata assure la qualité et la ponctualité de chaque prestation DCS.",
      descEn: "With more than 10 years of project management experience, Aminata ensures the quality and punctuality of every DCS service.",
      initials: 'AS',
      color: 'linear-gradient(135deg, #C9A227, #F0C040)',
    },
    {
      name: 'Moussa Ndoye',
      roleFr: 'Directeur Audiovisuel',
      roleEn: 'Audiovisual Director',
      descFr: "Cinéaste et technicien aguerri, Moussa dirige l'équipe de production audiovisuelle avec une exigence créative constante.",
      descEn: "Seasoned filmmaker and technician, Moussa leads the audiovisual production team with constant creative standards.",
      initials: 'MN',
      color: 'linear-gradient(135deg, #059669, #10B981)',
    },
    {
      name: 'Rokhaya Faye',
      roleFr: 'Directrice Créative & Design',
      roleEn: 'Creative Director & Design',
      descFr: "Designer de talent, Rokhaya insuffle une identité visuelle forte et cohérente à tous les projets Décoration et Printing de DCS.",
      descEn: "Talented designer, Rokhaya infuses a strong and consistent visual identity into all DCS Decoration and Printing projects.",
      initials: 'RF',
      color: 'linear-gradient(135deg, #7C3AED, #8B5CF6)',
    },
  ];

  getValueTitle(v: Value): string  { return this.translation.isFr() ? v.titleFr : v.titleEn; }
  getValueDesc(v: Value): string   { return this.translation.isFr() ? v.descFr : v.descEn; }
  getTimelineTitle(t: TimelineItem): string { return this.translation.isFr() ? t.titleFr : t.titleEn; }
  getTimelineDesc(t: TimelineItem): string  { return this.translation.isFr() ? t.descFr : t.descEn; }
  getMemberRole(m: TeamMember): string { return this.translation.isFr() ? m.roleFr : m.roleEn; }
  getMemberDesc(m: TeamMember): string { return this.translation.isFr() ? m.descFr : m.descEn; }
  statLabel(s: any): string { return this.translation.isFr() ? s.labelFr : s.labelEn; }
}
