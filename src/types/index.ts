export interface Court {
  id: string;
  name: string;
  location: string;
  surface: 'Hard' | 'Clay' | 'Grass' | 'Carpet'
  indoor: boolean
}
