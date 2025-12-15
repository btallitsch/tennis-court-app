export interface Court {
  id: string;
  name: string;
  location: string;
  surface: 'Hard' | 'Clay' | 'Grass' | 'Carpet';
  indoor: boolean;
  rating: number;
  reviewCount: number;
  image: string;
  amenities: string[];
  priceRange: '$' | '$$' | '$$$';
}

export interface Review {
  id: string;
  courtId: string;
  rating: number;
  comment: string;
  date: string;
  userName: string;
}

export type RootStackParamList = {
  CourtsList: undefined;
  CourtDetail: { court: Court };
};
