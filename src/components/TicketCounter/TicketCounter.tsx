import minus from 'assets/icons/minus.svg';
import plus from 'assets/icons/plus.svg';
import { Button } from '../Button/Button';

import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductAmount } from '../../redux/feature/cart/selector';
import { cartActions } from '../../redux/feature/cart';
import { RootState } from '../../redux/store';

interface TicketCounterProps {
  id: string;
}

const MAX_TICKETS = 30;

export const TicketCounter = ({ id }: TicketCounterProps) => {
  const ticketsAmount = useSelector((state: RootState) => selectProductAmount(state, id));
  const dispatch = useDispatch();

  return (
    <div className={styles.buttonsWrapper}>
      <Button
        iconSrc={minus}
        className={styles.button}
        onClick={() => dispatch(cartActions.decrement(id))}
        disabled={ticketsAmount === 0}
      />
      <p className={styles.text}>{ticketsAmount}</p>
      <Button
        iconSrc={plus}
        className={styles.button}
        onClick={() => dispatch(cartActions.increment(id))}
        disabled={ticketsAmount >= MAX_TICKETS}
      />
    </div>
  );
};
