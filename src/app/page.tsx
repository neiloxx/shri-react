'use client';

import { moviesApi } from 'redux/services/moviesApi';
import { TicketsField } from 'components/TicketsField/TicketsField';

import styles from './page.module.css';

export default function Home() {
  const { data, isLoading, error } = moviesApi.useGetMoviesQuery();

  return (
    <main className={styles.main}>
      {isLoading ? <p>Loading</p> : error ? <p>error</p> : data && <TicketsField tickets={data} />}
    </main>
  );
}
