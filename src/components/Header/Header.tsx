import styles from './styles.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Link href="/" className={styles.link}>
          Билетопоиск
        </Link>
        <div className={styles.cartWrapper}>
          <Link href="/cart" className={styles.cart}></Link>
        </div>
      </header>
    </div>
  );
};
