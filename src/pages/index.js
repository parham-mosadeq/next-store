import Layout from '@/components/layout/Layout';
import { useGetProductsQuery } from '@/redux/slices/getData';

const HomePage = () => {
  // console.log(useGetProductsQuery);
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();
  console.log(isLoading);
  return (
    <Layout title='Home' className=''>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo id
        reiciendis, impedit doloremque aspernatur eligendi pariatur ad
        dignissimos assumenda ducimus dicta tenetur. Officiis, animi non
        distinctio quae atque possimus voluptatibus?
      </p>
    </Layout>
  );
};

export default HomePage;
