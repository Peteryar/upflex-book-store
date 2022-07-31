import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useContext, useEffect } from 'react';
import Store from '../context/StoreContext';

import styles from '../styles/Layout.module.css';

function Layout({ children }: LayoutProps) {
  const {
    state: { count }
  } = useContext(Store);
  useEffect(() => {
    console.log('state---->', count);
  });
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <Image width={250} height={100} alt="logo" src={require('../assets/logo.jpg')} />
        </Link>
        <span className={styles.basket}>
          {count === 0 ? <p>Empty</p> : <p>{count} item(s)</p>}
          <button className={styles.viewButton}>VIEW BASKET</button>
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
