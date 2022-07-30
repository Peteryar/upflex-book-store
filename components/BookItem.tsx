import { Book } from '../types';
import styles from '../styles/BookItem.module.css';

function BookItem({ book }: Props) {
  return (
    <a href="https://nextjs.org/docs" className={styles.bookItem}>
      <h2>{book.title} &rarr;</h2>
      <p>{book.metaDescription}</p>
    </a>
  );
}

interface Props {
  book: Book;
}

export default BookItem;
