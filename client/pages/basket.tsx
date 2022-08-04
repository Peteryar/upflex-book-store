import Link from 'next/link';
import { memo, useCallback, useContext } from 'react';
import BookItem from '../components/BookItem';
import Button from '../components/Button';
import Meta from '../components/Meta';
import ACTIONS from '../context/actions';
import Store from '../context/StoreContext';
import { BookType } from '../types';

function Basket() {
  const {
    state: { basket },
    dispatch
  } = useContext(Store);
  const removeItemFromBasket = useCallback(
    (book: Book) => dispatch({ type: ACTIONS.REMOVE_BOOK, payload: book }),
    []
  );

  const handlePay = useCallback(() => {
    const transactingItems: Array<{ id: number; quantity: number }> = [];
    basket.map(({ id, quantity }) => transactingItems.push({ id: id, quantity }));
    console.log(transactingItems);
  }, []);
  return (
    <div data-testid="basket-page" className="container">
      <Meta title="Basket" />
      <Link href={'/'}>
        <p> &lt; Go Back</p>
      </Link>
      {basket.length > 0 && <h3>Basket Summary</h3>}
      {basket.map((book: Book) => (
        <div data-testid="basket-item-con" className="item-con" key={book.id}>
          <BookItem showDescription={false} book={book} />
          <h3>X {book.quantity}</h3>
          <Button title="Remove" handleClick={() => removeItemFromBasket(book)} />
        </div>
      ))}
      {basket.length > 0 ? (
        <Button width={300} handleClick={handlePay} title="PAY" />
      ) : (
        <h3 className="empty-text">Basket is Empty</h3>
      )}
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
              }
              .empty-text{
                text-align:center;
              }`}
      </style>
    </div>
  );
}

interface Book extends BookType {
  quantity: number;
}

export default memo(Basket);
