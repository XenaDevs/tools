import Link from "next/link";

const Navbar = () => {
  return (
    <div className="pt-2 flex mx-auto">
      <h2 className="text-2xl text-Accent md:text-4xl">Xena</h2>
      <div className="flex items-center w-full justify-end gap-4 md:mr-10">
        <Link
          href="/contact"
          className="hidden md:flex hover:text-CTA hover:underline"
        >
          Contact Us
        </Link>
        <Link href="/services" className="hover:text-CTA hover:underline">
          Other Services
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
