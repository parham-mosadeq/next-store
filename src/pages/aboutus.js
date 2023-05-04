import Layout from '@/components/layout/Layout';
import Titles from '@/components/layout/Titles';
import React from 'react';

const AboutUsPage = () => {
  return (
    <Layout>
      <Titles title='About Us' />
      <div className='mb-5'>
        <h3>Welcome To shop-P</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex perferendis
        omnis totam quis fugit iusto. Eveniet aperiam quis sed molestias.
      </p>
    </Layout>
  );
};

export default AboutUsPage;
