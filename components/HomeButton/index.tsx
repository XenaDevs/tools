import { BsArrowBarLeft } from 'react-icons/bs'
import Link from 'next/link';

export const HomeButton = () => {
  return (
    <Link href="/" className='flex absolute left-6 top-6 items-center'>
      <BsArrowBarLeft className="text-3xl lg:text-5xl" />
      <p className="text-xl lg:text-2xl ml-2">Tools</p>
    </Link>
  );
};
