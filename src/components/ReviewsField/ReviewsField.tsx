import { moviesApi } from 'redux/services/moviesApi';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { IReview } from 'types/movieApi';
import styles from './style.module.css';

interface ReviewsFieldProps {
  id: string;
}

export const ReviewsField = ({ id }: ReviewsFieldProps) => {
  const { data } = moviesApi.useGetReviewByMovieIdQuery(id);

  return (
    <div className={styles.reviewsWrapper}>
      {data &&
        data.map((el: IReview, idx) => <ReviewCard key={`review-${el.id}-${idx}`} {...el} />)}
    </div>
  );
};
