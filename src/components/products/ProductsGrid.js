const ProductsGrid = ({ children }) => {
  return (
    <div className='max-h-screen w-full grid md:grid-cols-2 xl:grid-cols-3'>
      {children}
    </div>
  );
};

export default ProductsGrid;
