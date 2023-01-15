import { BsArrowBarLeft } from "react-icons/bs";
import Link from "next/link";

export const HomeButton = () => {
  return (
    <Link href="/" className="flex mt-4 ml-4 items-center">
      <BsArrowBarLeft className="text-2xl lg:text-4xl" />
      <p className="text-xl lg:text-2xl ml-2">Tools</p>
    </Link>
  );
};
