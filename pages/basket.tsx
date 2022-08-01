import Link from 'next/link';
import { memo, useCallback, useContext } from 'react';
import BookItem from '../components/BookItem';
import Button from '../components/Button';
import ACTIONS from '../context/actions';
import Store from '../context/StoreContext';
import { BookType } from '../types';

function Basket() {
  const { state, dispatch } = useContext(Store);
  const removeItemFromBasket = useCallback(
    (book: Book) => dispatch({ type: ACTIONS.REMOVE_BOOK, payload: book }),
    []
  );

  const handlePay = useCallback(() => {
    const transactingItems: Array<{ id: number; quantity: number }> = [];
    state.basket.map(({ id, quantity }) => transactingItems.push({ id, quantity }));
    console.log(transactingItems);
  }, []);
  return (
    <div className="container">
      <Link href={'/'}>
        <p> &lt; Go Back</p>
      </Link>
      <h3>Basket Summary</h3>
      {state.basket.map((book: Book) => (
        <div className="item-con" key={book.id}>
          <BookItem showDescription={false} book={book} />
          <h3>X {book.quantity}</h3>
          <Button title="Remove" handleClick={() => removeItemFromBasket(book)} />
        </div>
      ))}
      <Button width={300} handleClick={handlePay} title="PAY" />
      <style>
        {`
        .container{
            width:80%;
        }
        .item-con h3{
            align-self:center
        }
        .item-con{
                  display:flex;
                  align-item:center;
              }
              .item-con button{
                  width:150px;
                  height:50px;
                  align-self:center;
                  margin-left:10px;
              }`}
      </style>
    </div>
  );
}

interface Book extends BookType {
  quantity: number;
}

export default memo(Basket);
