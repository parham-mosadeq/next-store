import { useSelector, useDispatch } from 'react-redux';

const CheckOutPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);

  return <div></div>;
};

export default CheckOutPage;
