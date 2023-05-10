import Link from 'next/link';
import ProductsGrid from './ProductsGrid';
const Categories = ({ categories }) => {
  return (
    <>
      <ProductsGrid>
        {categories.map((cat) => {
          return (
            <div className='w-full bg-red-50 p-4 ' key={cat}>
              <Link href={`/category/${cat.toLowerCase()}`}>{cat}</Link>
            </div>
          );
        })}
      </ProductsGrid>
    </>
  );
};

export default Categories;
