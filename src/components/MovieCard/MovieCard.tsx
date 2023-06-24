import Image from 'next/image';
import styles from './styles.module.css';
import { TicketCounter } from '../TicketCounter/TicketCounter';
import { IMovie } from '../../types/movieApi';

export const MovieCard = ({
  id,
  posterUrl,
  title,
  genre,
  releaseYear,
  rating,
  director,
  description,
}: IMovie) => {
  return (
    <section className={styles.movieWrapper}>
      <Image className={styles.image} src={posterUrl} alt={title} width={400} height={500} />
      <div className={styles.info}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <TicketCounter id={id} />
        </div>
        <ul className={styles.infoList}>
          <li className={styles.infoListItem}>
            <b>Жанр:</b> {genre}
          </li>
          <li className={styles.infoListItem}>
            <b>Год выпуска:</b> {releaseYear}
          </li>
          <li className={styles.infoListItem}>
            <b>Рейтинг:</b> {rating}
          </li>
          <li className={styles.infoListItem}>
            <b>Режиссер:</b> {director}
          </li>
        </ul>
        <div className={styles.description}>
          <p className={styles.descriptionTitle}>Описание</p>
          <p className={styles.descriptionText}>{description}</p>
        </div>
      </div>
    </section>
  );
};
