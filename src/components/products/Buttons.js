import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeItem } from '@/redux/slices/cartSlice';
import { checkCart } from 'lib';
import { HiShoppingCart } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
const Buttons = ({ id, product }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);
  const isValid = checkCart(id, state);
  console.log(state);
  return (
    <div className='flex w-full'>
      {!isValid ? (
        <button
          onClick={() => dispatch(addToCart({ id, product }))}
          className={`bg-blue-700 ${
            isValid ? 'w-1/2' : 'w-full'
          } text-white px-2 py-1 rounded-sm disabled:bg-gray-400 shadow-md mx-2`}
        >
          <span>
            Add to cart
            <HiShoppingCart className='inline-block mx-2' />
          </span>
        </button>
      ) : (
        <button
          disabled
          onClick={() => dispatch(addToCart({ id, product }))}
          className={`bg-blue-700 ${
            isValid ? 'w-1/2' : 'w-full'
          } text-white px-2 py-1 rounded-sm disabled:bg-gray-400 shadow-md mx-2`}
        >
          <span>
            Add to cart
            <HiShoppingCart className='inline-block mx-2' />
          </span>
        </button>
      )}

      {isValid && (
        <button
          onClick={() => dispatch(removeItem(id))}
          className={`bg-blue-700 ${
            isValid ? 'w-1/2' : 'w-full'
          } text-white px-2 py-1 rounded-sm shadow-md mx-2`}
        >
          remove <FaTimes className='inline-block' />
        </button>
      )}
    </div>
  );
};

export default Buttons;
