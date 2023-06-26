import styles from './styles.module.css';
import classNames from 'classnames';
import Image from 'next/image';

interface ButtonProps {
  iconSrc?: string;
  onClick?: () => void;
  className?: string | string[];
  disabled?: boolean;
  alt?: string;
  isDeleteButton?: boolean;
  text?: string;
  outlined?: boolean;
}

export const Button = ({
  iconSrc,
  onClick,
  className,
  disabled,
  alt,
  isDeleteButton,
  text,
  outlined,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        className,
        isDeleteButton ? styles.deleteButton : iconSrc ? styles.iconButton : styles.textButton,
        { [styles.outlined]: outlined }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {iconSrc && <Image src={iconSrc} alt={alt ? alt : ''} fill />}
      {text && <p>{text}</p>}
    </button>
  );
};
