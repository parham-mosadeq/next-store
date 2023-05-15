import { trimTitles } from 'lib';
import Link from 'next/link';
import React from 'react';
const ProductsCard = ({ product }) => {
  const { id, image, title, price, category } = product;

  return (
    <>
      <div className='shadow-lg w-3/4 mx-auto my-3  rounded-md h-64   p-0 flex justify-center items-center'>
        <div className='capitalize font-bold text-center m-0 py-2'>
          <div>
            <div>
              <img
                className='block mx-auto object-cover m-0 p-0 max-w-md max-h-48'
                src={image}
                width={100}
              />
            </div>
            <h2>
              <Link
                className='text-purple-700 hover:text-purple-600 p-0 m-0'
                href={`/products/product/${id}`}
              >
                {trimTitles(title, 5)}...
              </Link>
            </h2>
          </div>

          <div className='w-full  flex justify-center items-center'>
            <div>
              {price} <span className='text-green-600'>$</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
