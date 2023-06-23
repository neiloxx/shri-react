import styles from './styles.module.css';
import classNames from 'classnames';
import Image from 'next/image';

interface ButtonProps {
  iconSrc?: string;
  onClick?: () => void;
  className?: string | string[];
}

export const Button = ({ iconSrc, onClick, className }: ButtonProps) => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {iconSrc && <Image src={iconSrc} alt="" width={12} height={12} />}
    </button>
  );
};
