import React from 'react';
import Titles from './Titles';

const Layout = ({ children, title }) => {
  return (
    <main className='max-w-96 mx-auto'>
      <Titles title={title} />
      {children}
    </main>
  );
};

export default Layout;
