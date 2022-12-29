import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="absolute bottom-0 mb-4 flex justify-center">
      <p className="text-Accent text-xl">© 2023 Xena-dev</p>
      <div
        className="flex cursor-pointer ml-4 gap-2"
        onClick={() => window.open("/discord", "_blank")}
      >
        <BsDiscord fill="#f9a826" className="text-xl" />
        <h2 className="text-xl text-CTA">Contact us.</h2>
      </div>
    </div>
  );
};

export default Footer;
