import { Testimonial } from '../models/testimonial.model';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Mamadou Diallo',
    role: 'Directeur Général',
    company: 'Groupe Dakar Business',
    avatar: 'assets/images/avatars/avatar-1.jpg',
    textFr: 'DCS a transformé notre événement annuel en une expérience mémorable. Le Café Touba Dawaamou Choukry était simplement exceptionnel — nos invités en parlent encore. Un professionnalisme remarquable.',
    textEn: 'DCS transformed our annual event into a memorable experience. Dawaamou Choukry Café Touba was simply exceptional — our guests still talk about it. Remarkable professionalism.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fatou Sarr',
    role: 'Responsable Communication',
    company: 'Agence Innovatech SN',
    avatar: 'assets/images/avatars/avatar-2.jpg',
    textFr: 'Leur équipe audiovisuelle a livré une qualité de production 4K impressionnante pour notre campagne de lancement. Délais respectés, travail soigné. Je recommande vivement DCS!',
    textEn: 'Their audiovisual team delivered impressive 4K production quality for our launch campaign. Deadlines met, careful work. I highly recommend DCS!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ibrahima Kane',
    role: 'CEO',
    company: 'StartUp Teranga Hub',
    avatar: 'assets/images/avatars/avatar-3.jpg',
    textFr: 'Nous avons commandé nos t-shirts et goodies pour notre hackathon. La qualité d\'impression est top, les délais ont été respectés et les prix très compétitifs. Partenaire de confiance!',
    textEn: 'We ordered our t-shirts and goodies for our hackathon. Print quality is excellent, deadlines were met and prices very competitive. Trusted partner!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Aissatou Ndiaye',
    role: 'Event Manager',
    company: 'Dakar Events Pro',
    avatar: 'assets/images/avatars/avatar-4.jpg',
    textFr: 'La décoration réalisée par DCS pour notre gala a bluffé tous nos clients. Un sens du détail remarquable et une créativité au service de notre vision. Merci à toute l\'équipe!',
    textEn: 'The decoration done by DCS for our gala impressed all our clients. Remarkable attention to detail and creativity in service of our vision. Thank you to the whole team!',
    rating: 5,
  },
];
