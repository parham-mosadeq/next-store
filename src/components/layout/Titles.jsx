import Head from 'next/head';

const Titles = ({ title }) => {
  // * upgrades page titles
  return (
    <Head>
      <title>Shop-P | {title}</title>
    </Head>
  );
};

export default Titles;
