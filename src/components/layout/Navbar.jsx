import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ItemsCounter from './ItemsCounter';
const navItems = ['products', 'category', 'aboutUs', 'checkout'];

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => setIsOpen(false), [router.pathname]);
  return (
    <header className='relative w-full  mx-auto  bg-purple-500 h-10 md:max-h-10'>
      <nav className='max-w-7xl  mx-auto flex justify-between items-center h-10 pl-2 pr-2'>
        <div className=' w-full h-full'>
          <Link href={'/'}>
            <Image
              className='rounded-full block object-cover '
              src='/logo/logo.png'
              alt='LOGO'
              width={40}
              height={40}
            />
          </Link>
        </div>

        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className={`cursor-pointer flex items-center  md:hidden text-lg font-bold text-yellow-50 z-50`}
        >
          {!isOpen ? <HiMenu /> : <HiX />}
        </div>

        <ul
          className={`${
            isOpen ? 'translate--x-full' : 'hidden'
          } w-1/2 capitalize bg-purple-600  absolute right-0 min-h-screen top-0 text-center
         md:relative md:flex md:items-center md:justify-center md:bg-inherit md:min-h-0 md:w-min`}
        >
          <li className=' mt-3 ml-3 md:m-0'>
            <Link href='/checkout'>
              <ItemsCounter />
            </Link>
          </li>
          {navItems.map((ni) => (
            <li
              className={`${
                ni.toLocaleLowerCase() === 'checkout' &&
                'bg-white text-black p-1 rounded-lg hover:bg-slate-300'
              } text-white mt-10 hover:scale-95 hover:text-yellow-100  md:mr-3 md:m-0 md:border-none`}
              key={ni}
            >
              <Link href={`/${ni === 'home' ? '' : ni.toLowerCase()} `}>
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
