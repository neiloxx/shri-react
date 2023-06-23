export interface Movie {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description?: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export interface TicketCardProps {
  title: string;
  genre: string;
  id: string;
  posterUrl: string;
}
