import React from 'react';
import Titles from './Titles';
import BackBtn from './BackBtn';

const Layout = ({ children, title }) => {
  return (
    <main className=' w-3/4 mx-auto min-h-screen'>
      <Titles title={title} />
      <BackBtn />
      {children}
    </main>
  );
};

export default Layout;
