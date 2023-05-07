import React from 'react';
import Titles from './Titles';

const Layout = ({ children, title }) => {
  return (
    <main className='w-3/4  mx-auto min-h-screen  mt-5 mb-20'>
      <Titles title={title} />
      {children}
    </main>
  );
};

export default Layout;
