import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropDown = () => {
    return (
      <ul className="bg-Silver p-2">
        <li className="text-left">
          {
            <Link href="/contact" className="text-CTA">
              Contact Us
            </Link>
          }
        </li>
        <div className="h-0.5 my-2 bg-Accent" />
        <li className="text-left">
          {
            <Link href="/services" className="text-CTA">
              Other Services
            </Link>
          }
        </li>
      </ul>
    );
  };

  return (
    <div className="p-4 flex mx-auto">
      <h2 className="text-2xl text-Accent md:text-4xl">Xena</h2>
      <div className="flex flex-col md:flex-row items-end md:items-center w-full justify-end md:mr-10">
        <RxHamburgerMenu
          size={40}
          className="hover:cursor-pointer text-CTA p-2"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />

        {isOpen && openDropDown()}
        <div className="hidden md:flex">
          <Link href="/contact" className="hover:text-CTA hover:underline">
            Contact Us
          </Link>
          <Link href="/services" className="hover:text-CTA hover:underline">
            Other Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
