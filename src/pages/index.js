import Banners from '@/components/layout/Banners';
import Layout from '@/components/layout/Layout';
import Categories from '@/components/products/Categories';
import Image from 'next/image';
import {
  useGetProductsQuery,
  useGetCategoryQuery,
  useGetSortedProductsQuery,
  useGetCategoryIDQuery,
  useGetProductsByIDQuery,
} from '@/redux/slices/getData';
import Link from 'next/link';

const HomePage = () => {
  const { data, isLoading, isSuccess } = useGetCategoryQuery();

  if (isLoading) <Banners banner={isLoading} />;

  if (isSuccess) {
    return (
      <>
        <div className='w-full mx-0 h-screen flex justify-center items-center  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
          <h2 className='text-6xl text-slate-300'>welcome to ShopP</h2>
        </div>
        <Layout title='Home'>
          <main className='w-full py-10 min-h-screen flex items-center justify-center bg-gradient-to-tl from-red-200 via-red-300 to-yellow-200'>
            <article className='grid gap-2 grid-cols-1 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-7 2xl:grid-cols-4 2xl:gap-9 text-center  '>
              <div>
                <Link href={`/category/women's%20clothing`}>
                  <h3 className='my-2 capitalize tracking-wider font-light '>
                    women's clothing
                  </h3>
                  <div className='shadow-md'>
                    <Image
                      className='block max-h-48 rounded-md object-cover cursor-pointer hover:filter hover:blur-sm'
                      src={'/images/womCat-min.jpg'}
                      alt='women'
                      width={250}
                      height={250}
                    />
                  </div>
                </Link>
              </div>
              <div className='text-center border-blue-500'>
                <Link href={`category/men's%20clothing`}>
                  <h3 className='my-2 capitalize tracking-wider font-light '>
                    men's clothing
                  </h3>
                  <div className='shadow-md'>
                    <Image
                      className='block max-h-48 rounded-md object-cover cursor-pointer hover:filter hover:blur-sm'
                      src={'/images/manCat-min.jpg'}
                      alt='women'
                      width={250}
                      height={250}
                    />
                  </div>
                </Link>
              </div>
              <div className='text-center border-blue-500'>
                <Link href={`/category/jewelery`}>
                  <h3 className='my-2 capitalize tracking-wider font-light '>
                    jewelery
                  </h3>
                  <div className='shadow-md'>
                    <Image
                      className='block max-h-48 rounded-md object-cover cursor-pointer hover:filter hover:blur-sm'
                      src={'/images/jeweCat-min.jpg'}
                      alt='women'
                      width={250}
                      height={250}
                    />
                  </div>
                </Link>
              </div>
              <div className='text-center border-blue-500'>
                <Link href={`/category/electronics`}>
                  <h3 className='my-2 capitalize tracking-wider font-light '>
                    electronics
                  </h3>
                  <div className='shadow-md'>
                    <Image
                      className='block max-h-48 rounded-md object-cover cursor-pointer hover:filter hover:blur-sm'
                      src={'/images/techCat-min.jpg'}
                      alt='women'
                      width={250}
                      height={250}
                    />
                  </div>
                </Link>
              </div>
            </article>
          </main>
        </Layout>
      </>
    );
  }
};

export default HomePage;
