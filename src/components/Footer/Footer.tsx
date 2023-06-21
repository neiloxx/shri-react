import styles from './styles.module.css';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <Link href="/faq" className={styles.link}>
          Вопросы-ответы
        </Link>
        <Link href="/about" className={styles.link}>
          О нас
        </Link>
      </footer>
    </div>
  );
};
