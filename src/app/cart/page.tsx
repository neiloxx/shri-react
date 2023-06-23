'use client';
import styles from './styles.module.css';
import { moviesApi } from 'redux/services/moviesApi';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { selectCartItems, selectCartTotalCount } from 'redux/feature/cart/selector';
import { TicketsField } from 'components/TicketsField/TicketsField';
import { Movie, TicketCardProps } from 'types/movieApi';

function GetCartItems(): TicketCardProps[] {
  const { data } = moviesApi.useGetMoviesQuery();
  const items = useSelector((state: RootState) => selectCartItems(state));

  return data
    ? data.reduce((acc: Movie[], curr) => {
        if (curr.id in items) {
          acc.push(curr);
        }
        return acc;
      }, [])
    : [];
}

export default function Cart() {
  const tickets = GetCartItems();
  const totalCount = useSelector((state: RootState) => selectCartTotalCount(state));

  return (
    <main className={styles.main}>
      <TicketsField tickets={tickets} isDeletable={true} />

      <article className={styles.result}>
        <h4 className={styles.resultTitle}>
          Итого билетов:<span className={styles.resultCounter}>{totalCount}</span>
        </h4>
      </article>
    </main>
  );
}
