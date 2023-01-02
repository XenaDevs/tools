import Link from "next/link";

const Navbar = () => {
  return (
    <div className="pt-2 flex justify-between mx-auto">
      <h2 className="text-2xl text-Accent md:text-4xl">Xena</h2>
      <div className="flex items-center hover:text-CTA hover:underline">
        <Link href="/contact">Contact us</Link>
      </div>
    </div>
  );
};

export default Navbar;
