import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICinema, IMovie, IReview } from 'types/movieApi';

const BASE_URL = 'http://localhost:3001/api';

export const moviesApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovie[], void>({ query: () => 'movies' }),
    getMovie: builder.query<IMovie, string>({ query: (id: string) => `movie?movieId=${id}` }),
    getReviewByMovieId: builder.query<IReview[], string>({
      query: (id: string) => `reviews?movieId=${id}`,
    }),
    getCinemas: builder.query<ICinema[], void>({ query: () => 'cinemas' }),
  }),
});
