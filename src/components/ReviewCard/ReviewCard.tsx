import styles from './styles.module.css';
import { IReview } from 'types/movieApi';
import Image from 'next/image';

import photoPlaceholder from 'assets/icons/photo.svg';

export const ReviewCard = ({ name, text, rating, avatarUrl }: IReview) => {
  const avatarSize = avatarUrl ? 100 : 32;

  return (
    <article className={styles.review}>
      <div className={styles.image}>
        <Image
          src={avatarUrl ? avatarUrl : photoPlaceholder}
          alt="Avatar"
          width={avatarSize}
          height={avatarSize}
        />
      </div>
      <div className={styles.reviewInner}>
        <div className={styles.titleWrapper}>
          <h4 className={styles.title}>{name}</h4>
          <p className={styles.rating}>
            Оценка: <b>{rating}</b>
          </p>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </article>
  );
};
