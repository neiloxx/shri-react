import styles from './styles.module.css';
import { JSX, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: JSX.Element;
  close: () => void;
}

export const Modal = ({ children, close }: ModalProps) => {
  useEffect(() => {
    document.body.setAttribute('style', 'overflow: hidden');

    return () => document.body.removeAttribute('style');
  });

  return createPortal(
    <div className={styles.overlay} onClick={close}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};
