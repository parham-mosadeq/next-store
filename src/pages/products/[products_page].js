import Banners from '@/components/layout/Banners';
import Layout from '@/components/layout/Layout';
import Products from '@/components/products/Products';
import {
  useGetProductsQuery,
  useGetCategoryQuery,
  useGetSortedProductsQuery,
  useGetCategoryIDQuery,
  useGetProductsByIDQuery,
} from '@/redux/slices/getData';
import { POSTS_PER_PAGE } from 'configs';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductsPerPage = () => {
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery();

  const router = useRouter();

  if (isLoading && isSuccess) <Banners banner={isLoading} />;

  const page = parseInt(!router.query || 1);

  const numPages = Math.ceil(data.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedProducts = data.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  console.log(data);
  return (
    <>
      <div className='w-full'>
        <Products products={orderedProducts} />
      </div>
      <div>
        {Array.from(Array(numPages).keys()).map((item) => {
          return <p onClick={() => pageIndex + 2}>{item + 1}</p>;
        })}
      </div>
    </>
  );
};

export default ProductsPerPage;
