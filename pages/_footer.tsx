import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="absolute bottom-auto md:bottom-0 pb-4 mt-4 md:mt-0 flex justify-between md:justify-center md:gap-10 px-5 md:px-20 lg:px-40 w-full">
      <p className="text-Accent text-md">© 2023 Xena-dev</p>
      <div
        className="flex cursor-pointer ml-4"
        onClick={() => window.open("/discord", "_blank")}
      >
        <BsDiscord fill="#f9a826" className="text-lg md:text-xl" />
        <h2 className="text-md text-CTA md:text-xl">Contact us.</h2>
      </div>
    </div>
  );
};

export default Footer;