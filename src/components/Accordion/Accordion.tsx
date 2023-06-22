'use client';

import { createContext, JSX, useCallback, useContext, useState } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import Image from 'next/image';

import arrowDown from 'assets/icons/arrow-down.svg';
import arrowUp from 'assets/icons/arrow-up.svg';

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
  classnames?: string | string[];
}

interface ProviderValue {
  activeGroup?: string;
  switchGroup: (x?: string) => void;
}

const AccordionContext = createContext<ProviderValue>({
  switchGroup: () => {},
});

export const Accordion = ({ children }: Props) => {
  const [activeGroup, setActiveGroup] = useState<undefined | string>();

  const switchGroup = useCallback((title?: string) => {
    setActiveGroup((activeTitle) => (activeTitle === title ? undefined : title));
  }, []);

  return (
    <AccordionContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </AccordionContext.Provider>
  );
};

Accordion.Group = function MenuGroup({ children, title }: Props) {
  const { activeGroup, switchGroup } = useContext(AccordionContext);

  return (
    <div className={styles.group} onClick={() => switchGroup(title)}>
      <h3 className={styles.title}>
        {title}
        <Image src={activeGroup === title ? arrowUp : arrowDown} alt="" />
      </h3>
      {
        <div className={classNames(activeGroup === title && styles.visible, styles.groupItem)}>
          {children}
        </div>
      }
    </div>
  );
};

Accordion.Item = ({ children, classnames }: Props) => {
  return <div className={classNames(classnames, styles.item)}>{children}</div>;
};
