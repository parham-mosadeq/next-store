import React from 'react';
import Titles from './Titles';

const Layout = ({ children, title }) => {
  return (
    <main className='w-3/4  mx-auto h-screen my-5 '>
      <Titles title={title} />
      {children}
    </main>
  );
};

export default Layout;
