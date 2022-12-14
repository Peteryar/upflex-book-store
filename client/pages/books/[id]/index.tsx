import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { BookType } from '../../../types';
import styles from '../../../styles/Book.module.css';
import MetaData from '../../../components/Meta';
import Link from 'next/link';
import { useCallback, useContext } from 'react';
import Store from '../../../context/StoreContext';
import ACTIONS from '../../../context/actions';
import Button from '../../../components/Button';
import URL from '../../../config';

function Book({ book }: Props) {
  const { dispatch } = useContext(Store);
  const addBookToBasket = useCallback(
    () => dispatch({ type: ACTIONS.ADD_BOOK, payload: book }),
    []
  );
  return (
    <div data-testid="book-page" className={styles.bookPageContainer}>
      <MetaData title={book.metaTitle} description={book.metaDescription} />
      <Link href={'/'}>
        <p> &lt; Go Back</p>
      </Link>
      <section>
        <div className={styles.bookContainer}>
          <Image width={250} height={250} alt="Book Cover" src={book.cover} />
          <div>
            <span>
              <h3>Title</h3>
              <p>{book.title}</p>
            </span>
            <span>
              <h3>Author</h3>
              <p>{book.author}</p>
            </span>
          </div>
        </div>
        <Button handleClick={addBookToBasket} title="Add to basket" />
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${URL}/books/${context?.params?.id}`);
  const book = await res.json();
  return {
    props: {
      book
    }
  };
};

interface Props {
  book: BookType;
}

export default Book;
