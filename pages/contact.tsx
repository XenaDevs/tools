import router from "next/router";
import {
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { LinkButton } from "../components";

const Contact = () => {
  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-7xl mx-auto">
      <section className="min-h-full pt-10 md:mt-10">
        <div className="hidden md:flex md:flex-col max-w-4xl mx-auto">
          <h2 className="text-2xl text-Accent mb-2">
            Need help or have questions? <br /> Contact us on Discord or through
            our social media.
          </h2>
          <p className="text-lg">
            We&apos;re a small team of two dedicated to providing great support
            for our project. Your feedback is important to us, and we offer free
            feature requests in our Discord community. Thank you for using our
            project and for supporting us. We appreciate your business and look
            forward to helping you in any way we can.
          </p>
        </div>
        <div className="flex flex-col mt-5 md:flex-row md:mt-20 md:gap-20 justify-between">
          <div className="mt-4 md:w-1/2" id="jonatan">
            <h2 className="text-xl md:2xl lg:text-3xl text-Accent">
              Jonatan Saveljeff
            </h2>
            <h3 className="text-md md:text-lg lg:text-xl">
              Flexible freelancing services
            </h3>
            <p className="text-sm md:text-md lg:text-lg mt-3">
              I am a freelancer and web developer specializing in creating
              top-quality digital content and improving customer satisfaction
              and conversion rates. Let me help bring your vision to life with
              my skills and passion for technology.
            </p>
            <div className="flex justify-evenly text-4xl my-4 text-CTA">
              <AiFillTwitterSquare
                onClick={() => router.push("https://twitter.com/JonatanSav")}
                className="hover:cursor-pointer hover:bg-opacity-90"
              />
              <AiFillLinkedin
                onClick={() =>
                  router.push(
                    "https://www.linkedin.com/in/jonatan-saveljeff-a94650109/"
                  )
                }
                className="hover:cursor-pointer hover:bg-opacity-90"
              />
              <AiFillGithub
                onClick={() =>
                  router.push("https://github.com/Saveljeffjonatan")
                }
                className="hover:cursor-pointer hover:bg-opacity-90"
              />
            </div>
            <p className="hidden md:flex justify-center my-4 text-Accent text-xl">
              saveljeffjonatan@gmail.com
            </p>
          </div>

          <div className="mt-6 md:hidden" />
          <div className="w-1 bg-CTA" />

          <div className="mt-4 md:w-1/2 mb-8" id="oscar">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-Accent">
              Oscar Andersson
            </h2>
            <h3 className="text-md md:text-lg lg:text-xl">
              Lorem, ipsum dolor.
            </h3>
            <p className="text-sm md:text-md lg:text-lg mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              facilis labore cupiditate ut alias sed eveniet illum nisi dolores
              illo tempora. Libero minus voluptate dolorum totam, laborum
              voluptas impedit debitis!
            </p>
            <div className="flex justify-evenly text-4xl my-4 text-CTA">
              <AiFillTwitterSquare
                className="hover:cursor-pointer hover:bg-opacity-90"
                onClick={() => router.push("/")}
              />
              <AiFillLinkedin
                className="hover:cursor-pointer hover:bg-opacity-90"
                onClick={() => router.push("/")}
              />

              <AiFillGithub
                onClick={() => router.push("/")}
                className="hover:cursor-pointer hover:bg-opacity-90"
              />
            </div>
            <p className="hidden md:flex justify-center text-Accent text-xl">
              foo@andersson.lazy
            </p>
          </div>
        </div>

        <div className="hidden md:flex mt-32" />

        <div className="hidden md:flex flex-col w-fit mx-auto">
          <LinkButton href="/discord" target={"_blank"}>
            Support Discord
          </LinkButton>
        </div>
      </section>
    </main>
  );
};

export default Contact;
