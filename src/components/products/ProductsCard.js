import Link from 'next/link';
import React from 'react';
const ProductsCard = ({ product }) => {
  console.log(product);
  const { id, image, title, price, category } = product;
  return (
    <>
      <div className='shadow-lg my-3 mx-3 rounded-md h-64 w-full p-0 flex justify-center items-center'>
        <div className='capitalize font-bold text-center m-0 py-2'>
          <div>
            <div>
              <img
                className='block mx-auto object-cover m-0 p-0 max-w-md max-h-28'
                src={image}
                width={100}
              />
            </div>
            <h2>
              <Link
                className='text-purple-700 hover:text-purple-600 p-0 m-0'
                href={`/product/${id}`}
              >
                {title}
              </Link>
            </h2>
          </div>
          <div className='w-full flex justify-between items-center'>
            <div>
              {price} <span className='text-green-600'>$</span>
            </div>
            <div>
              <Link
                className=' font-thin text-purple-400 hover:text-purple-600'
                href={`/categories/category/${id}`}
              >
                {category}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
