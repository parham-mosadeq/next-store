import Link from 'next/link';
import ProductsGrid from './ProductsGrid';
const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <>
      <ProductsGrid>
        {categories.map((cat) => {
          return (
            <div className='w-full bg-red-50 p-4 ' key={cat}>
              <Link href={`/`}>{cat}</Link>
            </div>
          );
        })}
      </ProductsGrid>
    </>
  );
};

export default Categories;
