import Link from "next/link";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="absolute bottom-auto sm:bottom-0 pb-4 mt-4 md:mt-0 flex justify-between md:justify-center md:gap-10 lg:gap-20 px-5 md:px-20 lg:px-40 w-full">
      <p className="text-Accent text-md">© 2023 Xena-dev</p>
      <Link
        className="flex ml-4"
        href="https://discord.gg/fJpypWzSyH"
        target="_blank"
      >
        <BsDiscord fill="#f9a826" className="text-lg md:text-xl" />
        <h2 className="text-md text-CTA md:text-xl">Contact us.</h2>
      </Link>
    </div>
  );
};

export default Footer;
