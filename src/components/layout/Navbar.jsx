import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
const navItems = ['products', 'category', 'aboutUs'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='relative w-full  mx-auto  bg-purple-500 h-10 md:max-h-10'>
      <nav className='max-w-7xl  mx-auto flex justify-between items-center h-10 pl-2 pr-2'>
        <div>
          <Link href={'/'}>
            <img src='LOGO' alt='LOGO' />
          </Link>
        </div>

        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className={`cursor-pointer  md:hidden text-lg font-bold text-yellow-50 z-50`}
        >
          {!isOpen ? <HiMenu /> : <HiX />}
        </div>

        <ul
          className={`${
            isOpen ? 'translate--x-full' : 'hidden'
          } w-1/2 capitalize bg-purple-600  absolute right-0 min-h-screen top-0 text-center
         md:relative md:flex md:items-center md:justify-center md:bg-inherit md:min-h-0 md:w-min`}
        >
          {navItems.map((ni) => (
            <li
              className='text-white mt-10 hover:scale-95 hover:text-yellow-100  md:mr-3 md:m-0 md:border-none'
              key={ni}
            >
              <Link href={`/${ni === 'home' ? '' : ni.toLowerCase()}`}>
                {ni}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
