// import type { NextPage } from 'next';
import Image from 'next/image';
import BookItem from '../components/BookItem';
import MetaData from '../components/Meta';
import styles from '../styles/Home.module.css';
import { BookType } from '../types';
import homeCover from '../assets/main-img.jpg';
import URL from '../config';

const Home = ({ data, books }: Props) => {
  return (
    <div className={styles.container}>
      <MetaData title={data.SEO.metaTitle} description={data.SEO.metaDescription} />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Upflex Online <a>Book Store</a>
        </h1>

        <p className={styles.description}>Here you can order amazing books!</p>

        <p className={styles.copy}>{data.homepageCopy}</p>

        <section className={styles.booksContainer}>
          <div className={styles.homeBookCover}>
            <Image alt="Book shelf" src={homeCover} />
          </div>

          <div className={styles.grid}>
            {books.map((book, index) => (
              <BookItem showDescription={true} book={book} key={index} />
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
  const res = await fetch(`${URL}/homepage`);
  const res1 = await fetch(`${URL}/books`);
  const data = await res.json();
  const books = await res1.json();
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
  books: Array<BookType>;
}

export default Home;
