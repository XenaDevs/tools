import Link from "next/link";
import router from "next/router";
import {
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Contact = () => {
  const renderMobileDetails = () => {
    return (
      <>
        <p className="text-md text-left mb-4">
          Thank you for visiting our contact page! Our team is dedicated to
          providing the best support possible for our project. Here are a few
          ways you can reach out to us:
        </p>
        <ul className="list-disc content-between space-y-4 text-sm">
          <li className="text-left">
            Share your feedback and ideas with us in our{" "}
            <Link
              className="text-CTA underline"
              href="https://discord.gg/fJpypWzSyH"
              target="_blank"
            >
              Discord
            </Link>{" "}
            community. We offer{" "}
            <span className="text-Accent font-bold">free feature</span> requests
            and appreciate your input.
          </li>
          <li className="text-left">
            If you need assistance or have any questions, don&apos;t hesitate to
            reach out. We&apos;re here to help!
          </li>
          <li className="text-left">
            Thank you for choosing our project. We strive to go above and beyond
            to meet your needs and exceed your{" "}
            <span className="text-Accent font-bold">expectations.</span>
          </li>
        </ul>
        <p className="text-md mt-8 mb-4">
          We value your business and appreciate your support. Thank you for
          choosing our project to help streamline your work.
        </p>
      </>
    );
  };
  const renderScreenDetails = () => {
    return (
      <>
        <p className="text-lg">
          Thank you for taking the time to visit our contact page. Our team is
          small but mighty, and we are committed to providing the best support
          possible for our project. We value your feedback and are constantly
          striving to improve our services. That&apos;s why we offer free
          feature requests in our Discord community, where you can share your
          ideas and suggestions with us.
        </p>
        <br />
        <p className="text-lg">
          We are grateful for your support and appreciate your business. If
          there is anything we can do to assist you, please don&apos;t hesitate
          to reach out. We strive to go above and beyond to meet your needs and
          exceed your expectations. Thank you for choosing our project to help
          streamline your work.
        </p>
      </>
    );
  };

  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-7xl mx-auto">
      <section className="min-h-full">
        <h2 className="mt-6 mb-4 text-2xl text-Accent">
          Welcome to our contact page!
        </h2>
        <div className="md:mt-0 lg:flex lg:flex-col max-w-4xl mx-auto">
          <div className="md:hidden">{renderMobileDetails()}</div>
          <div className="hidden md:flex md:flex-col">
            {renderScreenDetails()}
          </div>
        </div>
        <div className="flex sm:hidden flex-col w-fit mx-auto">
          <Link
            className="bg-CTA text-Black text-sm p-2 my-4 rounded-md w-fit mx-auto"
            href="https://discord.gg/fJpypWzSyH"
            target="_blank"
          >
            Support Discord
          </Link>
        </div>
        <div className="flex flex-col mt-5 lg:flex-row lg:mt-20 lg:gap-20 justify-between">
          <div className="mt-4 lg:w-1/2" id="jonatan">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-Accent">
              Jonatan Saveljeff
            </h2>
            <p className="hidden md:flex justify-center mb-2 text-xl">
              freelance.saveljeff@gmail.com
            </p>
            <div className="flex justify-center gap-10 text-4xl my-4 text-CTA">
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
          </div>

          <div className="my-3 lg:hidden" />
          <div className="w-1 bg-Accent" />

          <div className="mt-4 lg:w-1/2 mb-8" id="oscar">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-Accent">
              Oscar Andersson
            </h2>
            <p className="hidden md:flex justify-center mb-2 text-xl">
              anderssonoscar0@gmail.com
            </p>
            <div className="flex justify-center gap-10 text-4xl my-4 text-CTA">
              <AiFillLinkedin
                className="hover:cursor-pointer hover:bg-opacity-90"
                onClick={() =>
                  router.push("https://www.linkedin.com/in/anderssonoscar0/")
                }
              />

              <AiFillGithub
                onClick={() =>
                  router.push("https://github.com/anderssonoscar0")
                }
                className="hover:cursor-pointer hover:bg-opacity-90"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex mt-32" />
        <div className="mt-8 lg:hidden" />

        <div className="hidden lg:flex flex-col w-fit mx-auto">
          <Link
            className="bg-CTA text-Black text-lg p-2 rounded-md w-fit mx-auto"
            href="https://discord.gg/fJpypWzSyH"
            target="_blank"
          >
            Support Discord
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
