import minus from 'assets/icons/minus.svg';
import plus from 'assets/icons/plus.svg';
import { Button } from 'components/Button/Button';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductAmount } from 'redux/feature/cart/selector';
import { cartActions } from 'redux/feature/cart';
import { RootState } from 'redux/store';
import closeIcon from 'assets/icons/close.svg';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import Image from 'next/image';

interface TicketCounterProps {
  id: string;
  isDeletable?: boolean;
}

const MAX_TICKETS = 30;

export const TicketCounter = ({ id, isDeletable }: TicketCounterProps) => {
  const ticketsAmount = useSelector((state: RootState) => selectProductAmount(state, id));
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(cartActions.deleteItem(id));
    setModalOpen(false);
  };

  return (
    <>
      <div className={styles.buttonsWrapper}>
        <Button
          iconSrc={minus}
          className={styles.button}
          onClick={() =>
            ticketsAmount === 1 ? setModalOpen(true) : dispatch(cartActions.decrement(id))
          }
          disabled={ticketsAmount === 0}
        />
        <p className={styles.text}>{ticketsAmount}</p>
        <Button
          iconSrc={plus}
          className={styles.button}
          onClick={() => dispatch(cartActions.increment(id))}
          disabled={ticketsAmount >= MAX_TICKETS}
        />
        {isDeletable && (
          <Button
            className={styles.deleteIcon}
            iconSrc={closeIcon}
            alt="delete"
            onClick={() => setModalOpen(true)}
            isDeleteButton
          />
        )}
      </div>
      {isModalOpen && (
        <Modal close={() => setModalOpen(false)}>
          <>
            <div className={styles.deleteWrapper}>
              <h4 className={styles.deleteTitle}>Удаление билета</h4>
              <Image
                className={styles.close}
                src={closeIcon}
                alt="close"
                width={16}
                height={16}
                onClick={() => setModalOpen(false)}
              />
            </div>
            <p className={styles.deleteText}>Вы уверены, что хотите удалить билет?</p>
            <div className={styles.btnsWrapper}>
              <Button text="Да" onClick={handleDelete} />
              <Button text="Нет" outlined onClick={() => setModalOpen(false)} />
            </div>
          </>
        </Modal>
      )}
    </>
  );
};
