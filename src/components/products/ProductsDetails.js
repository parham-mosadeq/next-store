import Link from 'next/link';
import Layout from '../layout/Layout';
import { HiStar, HiBookOpen } from 'react-icons/hi';
const ProductsDetails = ({
  category,
  description,
  id,
  image,
  price,
  rating: { rate, count },
  title,
  pageTitle,
}) => {
  return (
    <Layout title={pageTitle}>
      <main className='w-full h-full  my-10 rounded-md md:h-96 shadow-xl '>
        {/* left side  */}
        <h2 className='text-purple-800 text-center border-b-2 my-2 pt-4 pb-2'>
          {title}
        </h2>
        <div className='px-1 py-2 flex flex-col items-center justify-center mx-auto md:grid md:grid-cols-2 '>
          <article className='h-1/2 w-1/2   md:h-full lg:h-56'>
            <div className='h-full w-3/4 mx-auto mb-3 md:m-1 '>
              <img
                className='w-full h-min md:h-full object-cover rounded-sm block m-0 '
                src={image}
                alt={title}
              />
            </div>
          </article>
          {/* right side  */}
          <article className='capitalize '>
            <div>
              <h3 className='text-center text-purple-500'>
                <Link href={`/categories/${category}`}>{category}</Link>
              </h3>
              <div className='w-full flex justify-between'>
                <p className='flex items-center '>
                  {rate}
                  <HiStar className='inline-block mx-1 text-yellow-400' />{' '}
                </p>
                <p className='flex items-center '>
                  {count} <HiBookOpen className='mx-1 text-purple-700' />{' '}
                </p>
              </div>
            </div>
            <div>
              <p className='text-sm tracking-wide font-medium'>{description}</p>
              <div>
                <p className='text-green-500'>{price}$</p>
              </div>
            </div>
          </article>
          {/* btn */}
        </div>
      </main>
    </Layout>
  );
};

export default ProductsDetails;
