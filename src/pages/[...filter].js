import Banners from '@/components/layout/Banners';
import Layout from '@/components/layout/Layout';
import Products from '@/components/products/Products';
import { useGetProductsQuery } from '@/redux/slices/getData';
import { sortItems } from 'lib';
const FilterPage = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery();
  if (isLoading) {
    return <Banners />;
  }

  const sortedItems = sortItems(data);

  if (isSuccess) {
    return (
      <Layout>
        <Products products={sortedItems} />
      </Layout>
    );
  }
};

export default FilterPage;
