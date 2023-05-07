import React from 'react';
import ProductsGrid from './ProductsGrid';
import ProductsCard from './ProductsCard';
const Products = ({ products }) => {
  return (
    <ProductsGrid>
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </ProductsGrid>
  );
};

export default Products;
