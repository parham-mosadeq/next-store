import { HiArrowLeft } from 'react-icons/hi';
import { useRouter } from 'next/router';
const BackBtn = () => {
  const { back } = useRouter();
  return (
    <div className='mt-4'>
      <button onClick={() => back()}>
        <HiArrowLeft />
      </button>
    </div>
  );
};

export default BackBtn;
