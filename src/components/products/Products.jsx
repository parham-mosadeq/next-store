import React from 'react';
import ProductsGrid from './ProductsGrid';
import ProductsCard from './ProductsCard';
import Link from 'next/link';
import { FaCoins } from 'react-icons/fa';
const Products = ({ products }) => {
  return (
    <div className='grid md:grid-cols-12 span'>
      <div className='md:col-span-11'>
        <ProductsGrid>
          {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </div>
      <div className='bg-gray-50 h-fit flex w-full '>
        <Link className=' my-1 flex items-center ' href={`/filter/price`}>
          filter
          <span className='text-yellow-500 ml-1'>
            <FaCoins />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Products;
