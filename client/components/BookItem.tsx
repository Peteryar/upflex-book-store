import { BookType } from '../types';
import styles from '../styles/BookItem.module.css';
import Link from 'next/link';

function BookItem({ book, showDescription }: Props) {
  return (
    <Link href="/books/[id]" as={`/books/${book.id}`}>
      <span data-testid={`book-item${book.id}`} className={styles.bookItem}>
        {showDescription?<h2>
          {book.title} &rarr;
        </h2>:<h2>{book.title}</h2>}
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
