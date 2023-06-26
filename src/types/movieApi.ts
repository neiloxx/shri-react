type Genres = 'horror' | 'comedy' | 'fantasy' | 'action';

export interface IMovie {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: Genres;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export interface TicketCardProps {
  title: string;
  genre: Genres;
  id: string;
  posterUrl: string;
  isDeletable?: boolean;
}

export type CartState = {
  items: { [x: string]: number };
  totalCount: number;
};

export interface IReview {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatarUrl?: string;
}

export interface ICinema {
  id: string;
  name: string;
  movieIds: string[];
}
