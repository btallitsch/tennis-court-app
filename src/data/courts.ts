export type Review = {
  id: string;
  author: string;
  rating: number;
  comment: string;
};

export type Court = {
  id: string;
  name: string;
  city: string;
  surface: "Hard" | "Clay" | "Grass";
  rating: number;
  reviews: Review[];
};

const surfaces = ["Hard", "Clay", "Grass"] as const;

export const courts: Court[] = Array.from({ length: 60 }).map((_, i) => ({
  id: String(i + 1),
  name: `Tennis Court ${i + 1}`,
  city: ["Durham", "Raleigh", "Chapel Hill"][i % 3],
  surface: surfaces[i % 3],
  rating: Math.floor(Math.random() * 3) + 3,
  reviews: [
    {
      id: "1",
      author: "Alex",
      rating: 4,
      comment: "Nice courts and usually well maintained.",
    },
  ],
}));
