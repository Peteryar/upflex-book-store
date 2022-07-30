// import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import BookItem from '../components/BookItem';
import styles from '../styles/Home.module.css';
import { Book } from '../types';

const Home = ({ data, books }: Props) => {
  useEffect(() => {
    console.log('booksFromHome', books);
  }, [books]);
  return (
    <div className={styles.container}>
      <Head>
        <title>{data.SEO.metaTitle}</title>
        <meta name="description" content={data.SEO.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Upflex Online <a>Book Store</a>
        </h1>

        <p className={styles.description}>Here you can order amazing books!</p>

        <p className={styles.copy}>{data.homepageCopy}</p>

        <section className={styles.booksContainer}>
          <div className={styles.homeBookCover}>
            <Image alt="Book shelf" src={require('../assets/main-img.jpg')} />
          </div>

          <div className={styles.grid}>
            {books.map((book, index) => (
              <BookItem book={book} key={index} />
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/homepage');
  const res1 = await fetch('http://localhost:3000/books');
  const data = await res.json();
  const books = await res1.json();
  console.log('books-', books);
  return {
    props: { data, books }
  };
};

interface Props {
  data: {
    SEO: {
      metaTitle: string;
      metaDescription: string;
    };
    homepageCopy: string;
  };
  books: Array<Book>;
}

export default Home;
