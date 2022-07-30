import React, { ReactNode, useEffect, useReducer } from 'react';
import { Book } from '../types';
import ACTIONS from './actions';

const initialState = {
  books: []
};

interface InitialState {
  books: Array<Book>;
}

const reducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case ACTIONS.FETCH_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

interface Actions {
  type: string;
  payload: Array<Book>;
}

const Store = React.createContext({} as ContextInterface);

interface ContextInterface {
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
}

function ContextStore({ children, books }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log('books----->', books);
  }, [books]);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}

interface Props {
  children: ReactNode;
  books: Array<Book>;
}

export default Store;

export { ContextStore };
