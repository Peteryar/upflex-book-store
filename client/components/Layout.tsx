import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useCallback, useContext } from 'react';
import Store from '../context/StoreContext';

import styles from '../styles/Layout.module.css';
import Button from './Button';

function Layout({ children }: LayoutProps) {
  const { state } = useContext(Store);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <header data-testid="page-header" className={styles.header}>
        <Link href="/">
          <Image width={250} height={100} alt="logo" src={require('../assets/logo.jpg')} />
        </Link>
        <span className={styles.basket}>
          <p data-testid="basket-text">{state.itemsCount === 0 ?'Empty':`${state.itemsCount} item(s)`}</p>
          <Button handleClick={useCallback(() => router.push('/basket'), [])} title="VIEW BASKET" />
        </span>
      </header>
      {children}
    </div>
  );
}

interface LayoutProps {
  children: ReactNode;
}

export default Layout;
