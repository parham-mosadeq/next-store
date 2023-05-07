import Banners from '@/components/layout/Banners';
import Layout from '@/components/layout/Layout';
import Categories from '@/components/products/Categories';
import {
  useGetProductsQuery,
  useGetCategoryQuery,
  useGetSortedProductsQuery,
  useGetCategoryIDQuery,
  useGetProductsByIDQuery,
} from '@/redux/slices/getData';

const HomePage = () => {
  const { data, isLoading, isSuccess } = useGetCategoryQuery();

  if (isLoading) <Banners banner={isLoading} />;

  if (isSuccess) {
    return (
      <Layout title='Home'>
        <main className='w-full my-10 h-screen md:w-3/4'>
          <Categories categories={data} />
        </main>
      </Layout>
    );
  }
};

export default HomePage;
