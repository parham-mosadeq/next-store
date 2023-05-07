const ProductsGrid = ({ children }) => {
  return (
    <div className='w-full grid gap-2 md:grid-cols-2 xl:grid-cols-3'>
      {children}
    </div>
  );
};

export default ProductsGrid;
