import React from 'react';
import Titles from './Titles';
import BackBtn from './BackBtn';
import { useRouter } from 'next/router';

const Layout = ({ children, title }) => {
  const { pathname } = useRouter();
  return (
    <main className=' w-full mx-auto min-h-screen'>
      <Titles title={title} />
      {pathname !== '/' ? <BackBtn /> : ''}
      {children}
    </main>
  );
};

export default Layout;
