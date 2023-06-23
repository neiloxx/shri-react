'use client';
import styles from './styles.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { selectProductAmount } from 'redux/feature/cart/selector';
import Image from 'next/image';

import cartIcon from 'assets/icons/cart.svg';

export const Header = () => {
  const totalTickets = useSelector((state: RootState) => selectProductAmount(state, 'totalCount'));

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <h1>
          <Link href="/" className={styles.link}>
            Билетопоиск
          </Link>
        </h1>
        <div className={styles.cartWrapper}>
          {totalTickets > 0 && <span className={styles.ticketsCounter}>{totalTickets}</span>}
          <Link href="/cart">
            <Image src={cartIcon} alt="Cart" width={32} height={32} />
          </Link>
        </div>
      </header>
    </div>
  );
};
