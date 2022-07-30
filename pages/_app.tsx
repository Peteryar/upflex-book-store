import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ContextStore } from '../context/StoreContext';
import { Book } from '../types';

function MyApp({ Component, pageProps, books }: Props) {
  return (
    <ContextStore books={books}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextStore>
  );
}

interface Props extends AppProps {
  books: Array<Book>;
}
export default MyApp;
