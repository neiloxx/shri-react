'use client';
import { moviesApi } from 'redux/services/moviesApi';
import styles from './styles.module.css';
import { MovieCard } from 'components/MovieCard/MovieCard';

interface MovieProps {
  params: {
    id: string;
  };
}

export default function Movie({ params }: MovieProps) {
  const { data, isLoading, error } = moviesApi.useGetMovieQuery(params.id);

  return (
    <main className={styles.main}>
      {isLoading ? <p>Loading</p> : error ? <p>error</p> : data && <MovieCard {...data} />}
    </main>
  );
}
