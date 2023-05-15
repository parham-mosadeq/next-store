import React from 'react';
import Titles from './Titles';
import BackBtn from './BackBtn';
import { useRouter } from 'next/router';

const Layout = ({ children, title }) => {
  const { pathname } = useRouter();
  const isHome = pathname !== '/';
  return (
    <main className={`${!isHome ? 'w-full' : 'w-3/4'} mx-auto min-h-screen`}>
      <Titles title={title} />
      {isHome && <BackBtn />}
      {children}
    </main>
  );
};

export default Layout;
