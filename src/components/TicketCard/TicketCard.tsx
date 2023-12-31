'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import { TicketCounter } from 'components/TicketCounter/TicketCounter';
import { TicketCardProps } from 'types/movieApi';
import Link from 'next/link';
import { translationMap } from 'utils/const';

export const TicketCard = ({ title, genre, id, posterUrl, isDeletable }: TicketCardProps) => {
  return (
    <article className={styles.ticketWrapper}>
      <div className={styles.image}>
        <Image
          className={styles.image}
          src={posterUrl}
          alt={title}
          fill
          sizes="(max-width: 100px)"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.titleWrapper}>
        <Link href={`movie/${id}`}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.genre}>{translationMap[genre]}</p>
        </Link>
      </div>
      <TicketCounter id={id} isDeletable={isDeletable} />
    </article>
  );
};
