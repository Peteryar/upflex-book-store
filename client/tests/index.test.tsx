import '@testing-library/jest-dom';
import { fireEvent, render, cleanup, screen } from '@testing-library/react';
import data from '../db';
import Home, { getStaticProps } from '../pages';
import { reducer, initialState } from '../context/StoreContext';

const testIds = {
  bookItemCon: 'book-item-con',
  footer: 'footer',
  pageCover: 'page-cover-image',
  description: 'home-description',
};

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home data={data.homepage} books={data.books} />);
  });
  it('should render the home page', () => {
    expect(screen.getByTestId(testIds.bookItemCon)).toBeInTheDocument();
    expect(screen.getByTestId(testIds.bookItemCon).children.length).toBe(2);
    expect(screen.getByTestId(testIds.footer)).toBeInTheDocument();
    expect(screen.getByTestId(testIds.pageCover).children.length).toBe(1);
    expect(screen.getByTestId(testIds.description)).toBeInTheDocument();
  });
})
