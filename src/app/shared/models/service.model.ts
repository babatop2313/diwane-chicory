export interface DcsService {
  id: string;
  slug: string;
  icon: string;
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  features: ServiceFeature[];
  image: string;
  color: string;
  gradient: string;
}

export interface ServiceFeature {
  icon: string;
  labelFr: string;
  labelEn: string;
}
