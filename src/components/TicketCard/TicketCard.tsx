'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import { TicketCounter } from 'components/TicketCounter/TicketCounter';
import { TicketCardProps } from 'types/movieApi';
import closeIcon from 'assets/icons/close.svg';
import { cartActions } from 'redux/feature/cart';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import Link from 'next/link';

export const TicketCard = ({ title, genre, id, posterUrl, isDeletable }: TicketCardProps) => {
  const dispatch = useDispatch();

  return (
    <article className={styles.ticketWrapper}>
      <div className={styles.image}>
        <Image
          className={styles.image}
          src={posterUrl}
          alt={title}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.titleWrapper}>
        <Link href={`movie/${id}`}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.genre}>{genre}</p>
        </Link>
      </div>
      <TicketCounter id={id} />
      {isDeletable && (
        <Button
          className={styles.deleteIcon}
          iconSrc={closeIcon}
          alt="delete"
          onClick={() => dispatch(cartActions.deleteItem(id))}
          isDeleteButton
        />
      )}
    </article>
  );
};
