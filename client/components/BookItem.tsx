import { BookType } from '../types';
import styles from '../styles/BookItem.module.css';
import Link from 'next/link';

function BookItem({ book, showDescription }: Props) {
  return (
    <Link href="/books/[id]" as={`/books/${book.id}`}>
      <span className={styles.bookItem}>
        <h2>
          {book.title} {showDescription ? `&rarr;` : ''}
        </h2>
        {showDescription && <p>{book.metaDescription}</p>}
      </span>
    </Link>
  );
}

interface Props {
  book: BookType;
  showDescription: boolean;
}

export default BookItem;
