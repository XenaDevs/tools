import Link from "next/link";

const OtherServices = () => {
  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-7xl mx-auto">
      <h2 className="pt-5 mb-2 text-lg md:text-2xl text-Accent">
        Did you know that we offer more services than our tools?
      </h2>
      <p className="md:text-lg">
        We offer custom websites, hosting, and discord bots.
      </p>

      <div className="md:flex mt-10 gap-6">
        <section className="min-h-full md:p-6 rounded-md">
          <div className="flex flex-col gap-12 items-center">
            <div className="my-4">
              <p className="mb-6">
                One of our discord bots is called Moveer and is designed to do
                just that. Move people in various ways, to your liking by the
                press of a button. We currently have{" "}
                <span className="text-Accent">18.000</span> individual servers
                and
                <span className="text-Accent"> 5000</span> active users.
              </p>
              <Link
                className="bg-CTA text-Black text-lg p-2 rounded-md"
                href="https://top.gg/bot/400724460203802624"
                target="_blank"
              >
                Moveer bot
              </Link>
            </div>
            <div className="mb-10">
              <p className="mb-6">
                Head over to our contact page and request your own bot!
              </p>
              <Link
                className="bg-CTA text-Black text-lg p-2 rounded-md"
                href="/contact"
              >
                Request bot
              </Link>
            </div>
          </div>
        </section>

        <div className="my-4 h-1 bg-Accent" />

        <section className="min-h-full md:p-6 rounded-md">
          <div className="flex flex-col gap-12 items-center">
            <div className="my-4 mb-10">
              <p className="mb-6">
                Want your resume as a webpage? Do you want your own space for
                showcases or are you running a small business in need of a
                homepage or landingpage? Click the link below and make it a
                reality today.
              </p>
              <Link
                className="bg-CTA text-Black text-lg p-2 rounded-md"
                href="https://www.saveljeff.com"
              >
                Request website
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OtherServices;
