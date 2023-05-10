import React from 'react';
import { HiShoppingBag } from 'react-icons/hi';
import { useSelector } from 'react-redux';
const ItemsCounter = () => {
  const items = useSelector((state) => state.cartState.quantity);
  return (
    <div className='relative block w-full'>
      <HiShoppingBag className=' font-bold text-lg right-10 z-50 text-purple-900' />
      <div className='absolute bottom-0 text-center font-thin text-lg z-10 text-white  rounded-full'>
        {items}
      </div>
    </div>
  );
};

export default ItemsCounter;
