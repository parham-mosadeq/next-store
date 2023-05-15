import { Circles } from 'react-loader-spinner';
const Banners = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <Circles
        height='80'
        width='80'
        color='#4d6fa9'
        ariaLabel='circles-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
};

export default Banners;
