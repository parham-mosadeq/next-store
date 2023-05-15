import Link from 'next/link';
import ProductsGrid from './ProductsGrid';
import { useGetCategoryQuery } from '@/redux/slices/getData';
const Categories = () => {
  const { data } = useGetCategoryQuery();
  console.log(data);
  return (
    <>
      <ProductsGrid>
        {data.map((cat) => {
          return (
            <div className='w-full h-fit bg-red-50 p-4 ' key={cat}>
              <Link href={`/category/${cat.toLowerCase()}`}>{cat}</Link>
            </div>
          );
        })}
      </ProductsGrid>
    </>
  );
};

export default Categories;
