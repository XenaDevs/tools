import Link from "next/link";
import router from "next/router";
import {
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Contact = () => {
  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-7xl mx-auto">
      <section className="min-h-full pt-10 md:mt-10">
        <div className="hidden mt-6 md:mt-0 lg:flex lg:flex-col max-w-4xl mx-auto">
          <h2 className="text-2xl text-Accent mb-2">
            Welcome to our contact page!
          </h2>
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
            there is anything we can do to assist you, please don&apos;t
            hesitate to reach out. We strive to go above and beyond to meet your
            needs and exceed your expectations. Thank you for choosing our
            project to help streamline your work.
          </p>
        </div>
        <div className="flex flex-col mt-5 lg:flex-row lg:mt-20 lg:gap-20 justify-between">
          <div className="mt-4 lg:w-1/2" id="jonatan">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-Accent">
              Jonatan Saveljeff
            </h2>
            <p className="hidden md:flex justify-center mb-2 text-xl">
              freelance.saveljeff@gmail.com
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
          </div>

          <div className="my-6 lg:hidden" />
          <div className="w-1 bg-Accent" />

          <div className="mt-4 lg:w-1/2 mb-8" id="oscar">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-Accent">
              Oscar Andersson
            </h2>
            <p className="hidden md:flex justify-center mb-2 text-xl">
              anderssonoscar0@gmail.com
            </p>
            <div className="flex justify-evenly text-4xl my-4 text-CTA">
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
            href="/discord"
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
