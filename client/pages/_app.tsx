import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ContextStore } from '../context/StoreContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextStore>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextStore>
  );
}

export default MyApp;
