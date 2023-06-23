import minus from 'assets/icons/minus.svg';
import plus from 'assets/icons/plus.svg';
import { Button } from '../Button/Button';

import styles from './styles.module.css';

interface TicketCounterProps {
  id: string;
}

export const TicketCounter = ({ id }: TicketCounterProps) => {
  return (
    <div className={styles.buttonsWrapper}>
      <Button iconSrc={minus} className={styles.button} />
      <p>0</p>
      <Button iconSrc={plus} className={styles.button} />
    </div>
  );
};
