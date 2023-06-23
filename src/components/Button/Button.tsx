import styles from './styles.module.css';
import classNames from 'classnames';
import Image from 'next/image';

interface ButtonProps {
  iconSrc?: string;
  onClick?: () => void;
  className?: string | string[];
  disabled?: boolean;
}

export const Button = ({ iconSrc, onClick, className, disabled }: ButtonProps) => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick} disabled={disabled}>
      {iconSrc && <Image src={iconSrc} alt="" width={12} height={12} />}
    </button>
  );
};
