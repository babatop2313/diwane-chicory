export type PortfolioCategory = 'all' | 'coffee' | 'audiovisuel' | 'printing' | 'decoration';

export interface PortfolioItem {
  id: number;
  titleFr: string;
  titleEn: string;
  category: PortfolioCategory;
  categoryLabelFr: string;
  categoryLabelEn: string;
  image: string;
  descriptionFr?: string;
  descriptionEn?: string;
}
