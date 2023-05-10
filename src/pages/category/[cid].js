import { useRouter } from 'next/router';
import { useGetCategoryIDQuery } from '@/redux/slices/getData';
import Banners from '@/components/layout/Banners';
import Products from '@/components/products/Products';
import Layout from '@/components/layout/Layout';
const CategoryPage = () => {
  const {
    query: { cid },
  } = useRouter();
  const { data, isLoading, isSuccess } = useGetCategoryIDQuery(cid);
  console.log(data);

  if (isLoading) <Banners />;

  if (isSuccess) {
    return (
      <Layout title={cid.toLocaleUpperCase()}>
        <Products products={data} />
      </Layout>
    );
  }
};

export default CategoryPage;
