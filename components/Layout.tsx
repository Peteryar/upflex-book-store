import Image from 'next/image';
import { ReactNode } from 'react';

import styles from '../styles/Layout.module.css';

function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <Image width={250} height={100} alt="logo" src={require('../assets/logo.jpg')} />
        <span className={styles.basket}>
          <p>Empty</p>
          <button className={styles.viewButton}>VIEW BASKET</button>
        </span>
      </header>
      {children}
    </>
  );
}

interface LayoutProps {
  children: ReactNode;
}

export default Layout;
