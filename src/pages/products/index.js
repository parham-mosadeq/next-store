import Banners from '@/components/layout/Banners';
import Layout from '@/components/layout/Layout';
import Pagination from '@/components/layout/Pagination';
import Products from '@/components/products/Products';
import { useGetProductsQuery } from '@/redux/slices/getData';
import { POSTS_PER_PAGE } from 'configs';
import { useState } from 'react';

const ProductsPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery();
  if (isLoading) {
    return <Banners />;
  }
  if (isSuccess) {
    const numPages = Math.ceil(data.length / POSTS_PER_PAGE);
    const orderedProducts = data.slice(
      pageIndex * POSTS_PER_PAGE,
      (pageIndex + 1) * POSTS_PER_PAGE
    );
    return (
      <Layout title='Shop-P | Products '>
        <div className='w-full'>
          <Products products={orderedProducts} />
        </div>
        <div className='flex justify-center items-center'>
          <Pagination
            numPages={numPages}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        </div>
      </Layout>
    );
  }
};

export default ProductsPage;
