import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie } from 'types/movieApi';

const BASE_URL = 'http://localhost:3001/api';

export const moviesApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovie[], void>({ query: () => 'movies' }),
    getMovie: builder.query<IMovie, string>({ query: (id: string) => `movie?movieId=${id}` }),
  }),
});

//
// Дефолтно запускается сервер на http://localhost:3001.
//
//   Кинотеатры:
//     http://localhost:3001/api/cinemas
//
//       Фильмы:
//         http://localhost:3001/api/movies - все фильмы
//           http://localhost:3001/api/movies?cinemaId={айдишка кинотеатра} - фильмы в конкретном кинотеатре
//             http://localhost:3001/api/movie?movieId={айдишка фильма} - конкретный фильм
//
//               Отзывы:
//                 http://localhost:3001/api/reviews - все отзывы
//                   http://localhost:3001/api/reviews?movieId={айдишка фильма} - отзывы конкретного фильма
