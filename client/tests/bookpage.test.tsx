import '@testing-library/jest-dom';
import { fireEvent, render, cleanup, screen, waitFor } from '@testing-library/react';
import data from '../db';
import Layout from '../components/Layout';
import Book from '../pages/books/[id]/index';
import { reducer, initialState, ContextStore } from '../context/StoreContext';

const testIds = {
  addBtn: 'Add to basket',
  basket: 'basket-text',
  bookpage: 'book-page'
};

describe('Book page', () => {
  beforeEach(() => {
    render(
      <ContextStore>
        <Layout>
          <Book book={data.books[0]} />
        </Layout>
      </ContextStore>
    );
  });
  it('should should render the book page', () => {
    expect(screen.getByTestId(testIds.bookpage)).toBeInTheDocument();
  });
  it('should addbook to basket when add button is clicked', async () => {
    const button = screen.getByTestId(testIds.addBtn);
    fireEvent.click(button);
    await waitFor(() => expect(screen.queryByTestId(testIds.basket)?.innerHTML).toBe('1 item(s)'));
  });
});
