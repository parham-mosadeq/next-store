import Banners from '@/components/layout/Banners';
import Layout from '@/components/layout/Layout';
import Categories from '@/components/products/Categories';
import {
  useGetCategoryQuery,
  useGetCategoryIDQuery,
} from '@/redux/slices/getData';

const CategoriesPage = () => {
  const { data, isLoading, isSuccess } = useGetCategoryQuery();

  if (isLoading) <Banners />;
  if (isSuccess) {
    return (
      <Layout title='Categories'>
        <Categories categories={data} />
      </Layout>
    );
  }
};

export default CategoriesPage;
