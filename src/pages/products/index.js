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

const ProductsPage = () => {
  const { data, isLoading, isSuccess } = useGetProductsQuery();

  if (isLoading && isSuccess) <Banners banner={isLoading} />;
  console.log(data);
  return (
    <Layout title='Shop-P | Products '>
      <div className='w-full'>
        <Products products={data} />
      </div>
    </Layout>
  );
};

export default ProductsPage;
