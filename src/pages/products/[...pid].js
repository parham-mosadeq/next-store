import Layout from '@/components/layout/Layout';

import { useRouter } from 'next/router';
import { useGetProductsByIDQuery } from '@/redux/slices/getData';
import ProductsDetails from '@/components/products/ProductsDetails';
import Banners from '@/components/layout/Banners';
import { trimTitles } from 'lib';
const ProductPage = () => {
  const {
    query: { pid },
  } = useRouter();

  const { data, isLoading, isSuccess } = useGetProductsByIDQuery(
    pid ? +pid[1] : ''
  );
  console.log(data);

  if (isLoading) <Banners />;

  if (isSuccess) {
    const pageTitle = trimTitles(data.title);
    return (
      <>
        <div className='min-h-screen'>
          <ProductsDetails {...data} pageTitle={pageTitle} />
        </div>
      </>
    );
  }
};

export default ProductPage;
