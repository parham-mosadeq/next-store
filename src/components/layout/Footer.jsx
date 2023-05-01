import React from 'react';

const currentYear = new Date().getFullYear().toString();

const Footer = () => {
  return (
    <footer className='w-full capitalize bg-purple-300 flex flex-col items-center justify-center '>
      <p className='font-thin tracking-wide'>
        Parham mosadeqzadeh | front-end developer
      </p>
      <span className='font-thin '>&copy;{currentYear} </span>
    </footer>
  );
};

export default Footer;
