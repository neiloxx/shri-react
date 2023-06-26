'use client';

import { useLayoutEffect, useState } from 'react';
import { moviesApi } from 'redux/services/moviesApi';
import { TicketsField } from 'components/TicketsField/TicketsField';
import { MovieFilter } from 'components/MovieFilter/MovieFilter';
import styles from './page.module.css';
import { IMovie } from 'types/movieApi';

export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { data, isLoading, error } = moviesApi.useGetMoviesQuery();

  useLayoutEffect(() => {
    data && setMovies(data);
  }, [data]);

  return (
    <main className={styles.main}>
      <MovieFilter applyFilters={(filteredMovies) => setMovies(filteredMovies)} />
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>error</p>
      ) : movies?.length > 0 ? (
        <TicketsField tickets={movies} />
      ) : (
        <p>К сожалению, по вашему запросу ничего не найдено...</p>
      )}
    </main>
  );
}
