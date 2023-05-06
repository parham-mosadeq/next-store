import React from 'react';
const ProductsCard = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className=' max-h-full m-0 p-0 '>
        <div>
          <div>
            <img src={product.image} width={100} height={30} />
          </div>
          <h2>{product.title}</h2>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
