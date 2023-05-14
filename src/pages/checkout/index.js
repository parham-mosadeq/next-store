import Layout from '@/components/layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import Products from '@/components/products/Products';
import { checkout } from '@/redux/slices/cartSlice';
const CheckOutPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartState.items);

  return (
    <Layout title='Checkout ;)'>
      {cart.length > 0 ? (
        <>
          <Products products={cart} />
          <button
            onClick={() => dispatch(checkout())}
            className='bg-blue-700 mx-auto w-1/2 rounded-md hover:shadow-lg flex items-center justify-center my-1 text-white px-3 py-2 active:scale-95'
          >
            checkout here
          </button>
        </>
      ) : (
        <p className='text-center capitalize tracking-wider text-lg mt-10'>
          nothing to show :(
        </p>
      )}
    </Layout>
  );
};

export default CheckOutPage;
