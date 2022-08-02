import React, { ReactNode, useReducer } from 'react';
import Book from '../pages/books/[id]';
import { BookType } from '../types';
import ACTIONS from './actions';

const initialState = {
  basket: [],
  itemsCount: 0
};

interface Book extends BookType {
  quantity: number;
}
interface InitialState {
  basket: Array<Book>;
  itemsCount: number;
}

const reducer = (state: InitialState, action: Actions) => {
  const index = state.basket.findIndex((book) => book.id === action.payload.id);
  switch (action.type) {
    case ACTIONS.ADD_BOOK:
      if (index !== -1) {
        state.basket[index] = {
          ...state.basket[index],
          quantity: state.basket[index].quantity + 1
        };
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
      return { ...state, itemsCount: state.itemsCount + 1 };

    case ACTIONS.REMOVE_BOOK:
      state.basket[index].quantity -= 1;
      if (state.basket[index].quantity === 0) {
        state.basket.splice(index, 1);
      }
      return { ...state, itemsCount: state.itemsCount - 1 };

    default:
      return state;
  }
};

interface Actions {
  type: string;
  payload: BookType;
}

const Store = React.createContext({} as ContextInterface);

interface ContextInterface {
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
}

function ContextStore({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}

interface Props {
  children: ReactNode;
}

export default Store;

export { ContextStore };
