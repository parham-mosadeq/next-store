import Head from 'next/head';

const Titles = ({ title }) => {
  return (
    <Head>
      <title>Shop-P | {title}</title>
    </Head>
  );
};

export default Titles;
