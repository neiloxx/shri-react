import styles from './styles.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <h1>
          <Link href="/" className={styles.link}>
            Билетопоиск
          </Link>
        </h1>
        <div className={styles.cartWrapper}>
          <Link href="/cart" className={styles.cart}></Link>
        </div>
      </header>
    </div>
  );
};
