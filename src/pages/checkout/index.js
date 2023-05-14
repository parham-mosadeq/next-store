import Layout from '@/components/layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useGetProductsByIDQuery } from '@/redux/slices/getData';
import Products from '@/components/products/Products';
import { useEffect } from 'react';
let storedData = null;
const CheckOutPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartState.items);
  const quantity = useSelector((state) => state.cartState.quantity);
  console.log(cart);
  return (
    <Layout title='Checkout ;)'>
      <Products products={cart} />
    </Layout>
  );
};

export default CheckOutPage;
