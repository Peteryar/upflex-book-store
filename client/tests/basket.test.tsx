import '@testing-library/jest-dom';
import { fireEvent, render, cleanup, screen, waitFor } from '@testing-library/react';
import data from '../db';
import Layout from '../components/Layout';
import Basket from '../pages/basket';
import Store, { reducer, initialState, ContextStore } from '../context/StoreContext';

const testIds = {
  basketItemCon: 'basket-item-con',
  basketPage: 'basket-page',
  removeBtn: 'Remove',
  basket: 'basket-text',
  payButton: 'PAY'
};

const state = {
  basket: [{ ...data.books[0], quantity: 1 }],
  itemsCount: 0
};

describe('Book page', () => {
  beforeEach(() => {
    render(
      <Store.Provider value={{ state, dispatch: () => console }}>
        <Layout>
          <Basket />
        </Layout>
      </Store.Provider>
    );
  });
  it('should render basket page', () => {
    expect(screen.getByTestId(testIds.basketPage)).toBeInTheDocument();
  });
  it('should render all the items in basket in the basket page', () => {
    expect(screen.getAllByTestId(testIds.basketItemCon).length).toBe(1);
  });
  it('should remove book from  basket when remove  button is clicked', async () => {
    const button = screen.getByTestId(testIds.removeBtn);
    fireEvent.click(button);
    await waitFor(() => expect(screen.queryByTestId(testIds.basket)?.innerHTML).toBe('Empty'));
  });

  it('should log all the items in basket in the required format to the console, on pay button click', async () => {
    console.log = jest.fn();
    const button = screen.getByTestId(testIds.payButton);
    fireEvent.click(button);
    await waitFor(() => expect(console.log).toHaveBeenCalledWith([{ id: 1, quantity: 1 }]));
  });
});
