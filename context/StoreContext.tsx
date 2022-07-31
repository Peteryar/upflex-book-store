import React, { ReactNode, useEffect, useReducer } from 'react';
import Book from '../pages/books/[id]';
import { BookType } from '../types';
import ACTIONS from './actions';

const initialState = {
  basket: [],
  count: 0
};

interface Book extends BookType {
  count: number;
}
interface InitialState {
  basket: Array<Book>;
  count: number;
}

const reducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case ACTIONS.ADD_BOOK:
      console.log('addingItem to basket');
      const index = state.basket.findIndex((book) => book.title === action.payload.title);
      if (index !== -1) {
        const book = state.basket[index];
        book.count += 1;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
      state.count += 1;
      return state;
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
  useEffect(() => {
    console.log('state-------->', state.count);
  }, [state.count]);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}

interface Props {
  children: ReactNode;
}

export default Store;

export { ContextStore };
