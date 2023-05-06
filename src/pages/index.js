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

const HomePage = () => {
  const { data, isLoading, isSuccess } = useGetSortedProductsQuery(4);

  if (isLoading) <Banners banner={isLoading} />;

  if (isSuccess) {
    return (
      <Layout title='Home'>
        <main className='  '>
          <Products products={data} />
        </main>
      </Layout>
    );
  }
};

export default HomePage;
