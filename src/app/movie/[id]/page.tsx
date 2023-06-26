'use client';
import { moviesApi } from 'redux/services/moviesApi';
import styles from './styles.module.css';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { ReviewsField } from 'components/ReviewsField/ReviewsField';

interface MovieProps {
  params: {
    id: string;
  };
}

export default function Movie({ params }: MovieProps) {
  const { data, isLoading, error } = moviesApi.useGetMovieQuery(params.id);

  return (
    <main className={styles.main}>
      <div className={styles.movieWrapper}>
        {isLoading ? (
          <p className={styles.loading}>Loading</p>
        ) : error ? (
          <p>error</p>
        ) : (
          data && <MovieCard {...data} />
        )}
      </div>
      <div className={styles.reviewsWrapper}>
        <ReviewsField id={params.id} />
      </div>
    </main>
  );
}
