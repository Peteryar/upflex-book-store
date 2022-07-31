import { BookType } from '../types';
import styles from '../styles/BookItem.module.css';
import Link from 'next/link';

function BookItem({ book }: Props) {
  return (
    <Link href="/books/[id]" as={`/books/${book.id}`}>
      <span className={styles.bookItem}>
        <h2>{book.title} &rarr;</h2>
        <p>{book.metaDescription}</p>
      </span>
    </Link>
  );
}

interface Props {
  book: BookType;
}

export default BookItem;
