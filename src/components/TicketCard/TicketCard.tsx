import styles from './styles.module.css';
import Image from 'next/image';
import { TicketCounter } from '../TicketCounter/TicketCounter';
import { TicketCardProps } from 'types/movieApi';

export const TicketCard = ({ title, genre, id, posterUrl }: TicketCardProps) => {
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
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.genre}>{genre}</p>
      </div>
      <TicketCounter id={id} />
    </article>
  );
};
