import styles from './styles.module.css';
import localFont from 'next/font/local';
import classNames from 'classnames';
import { ChangeEvent } from 'react';
const SFProFont = localFont({ src: '../../assets/fonts/SFProText-Regular.ttf' });

interface InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ id, label, placeholder, onChange, type }: InputProps) => {
  return (
    <div className={classNames(SFProFont.className, styles.inputWrapper)}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        className={classNames(SFProFont.className, styles.input)}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};
