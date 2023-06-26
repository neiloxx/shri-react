import styles from './styles.module.css';
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import Image from 'next/image';

import arrowUp from 'assets/icons/arrow-square-up.svg';
import arrowDown from 'assets/icons/arrow-square-down.svg';

const SFProFont = localFont({ src: '../../assets/fonts/SFProText-Regular.ttf' });

interface DropdownProps {
  id: string;
  options: string[];
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  updateValue: Dispatch<SetStateAction<string>>;
}

export const Dropdown = ({
  id,
  label,
  placeholder,
  options,
  defaultValue = '',
  updateValue,
}: DropdownProps) => {
  const dropdownRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const listRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClick = (option: string) => {
    updateValue(option);
    setOpen(!isOpen);
  };

  const getOptionsStyle = () => {
    const { width, height, top, left } = dropdownRef.current!.getClientRects()[0];
    return {
      top: `${top + height + 4}px`,
      maxWidth: `${width}px`,
      left: `${left}px`,
    };
  };

  return (
    <div
      id={id}
      className={classNames(styles.dropdownWrapper, SFProFont.className)}
      ref={dropdownRef}
    >
      <div className={styles.label}>{label}</div>
      <div
        className={classNames(styles.select, {
          [styles.active]: isOpen,
        })}
        tabIndex={0}
        id={id}
        onClick={() => setOpen(!isOpen)}
      >
        <p
          className={classNames(styles.placeholder, SFProFont.className, {
            [styles.placeholderActive]: !!defaultValue,
          })}
        >
          {defaultValue || placeholder}
        </p>
        <Image src={isOpen ? arrowUp : arrowDown} alt="" width={20} height={20} />
      </div>

      {isOpen &&
        createPortal(
          <div className={styles.optionsWrapper} style={getOptionsStyle()} ref={listRef}>
            <p className={styles.option} onClick={() => handleClick('')}>
              Не выбран
            </p>
            {options.map((option) => (
              <p key={option} className={styles.option} onClick={() => handleClick(option)}>
                {option}
              </p>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
};
