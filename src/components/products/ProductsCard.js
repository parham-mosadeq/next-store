import Link from 'next/link';
import React, { useState } from 'react';
const ProductsCard = ({ product }) => {
  const { id, image, title, price, category } = product;

  const [details, setDetails] = useState(false);

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
                href={`/product/${id}`}
              >
                {title}
              </Link>
            </h2>
          </div>
          {
            <button onClick={() => setDetails((prev) => !prev)}>
              {details ? 'Hide details' : 'Show more details'}
            </button>
          }
          {details && (
            <div className='w-full  flex justify-between items-center'>
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
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
