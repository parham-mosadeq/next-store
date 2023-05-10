import Layout from '@/components/layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useGetProductsByIDQuery } from '@/redux/slices/getData';
const CheckOutPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartState.itemsID);
  const quantity = useSelector((state) => state.cartState.quantity);

  const { data, isLoading, isSuccess } = useGetProductsByIDQuery();
  console.log(cart);
  return <Layout title='Checkout ;)'></Layout>;
};

export default CheckOutPage;
