import router from "next/router";
import {
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Contact = () => {
  return (
    <main className="px-10 md:px-20 lg:px-30 max-w-5xl mx-auto">
      <section className="min-h-screen pt-10">
        <h1 className="text-Accent text-2xl mt-5">Reach out to us!</h1>
        <div className="flex flex-col justify-between">
          <div className="mt-4">
            <h2 className="text-xl text-Accent">Jonatan Saveljeff</h2>
            <h3 className="text-md">Flexible freelancing services</h3>
            <p className="text-sm mt-3">
              I am a freelancer and web developer specializing in creating
              top-quality digital content and improving customer satisfaction
              and conversion rates. Let me help bring your vision to life with
              my skills and passion for technology.
            </p>
            <div className="flex justify-evenly text-4xl mt-2 text-CTA">
              <AiFillTwitterSquare
                onClick={() => router.push("https://twitter.com/JonatanSav")}
              />
              <AiFillLinkedin
                onClick={() =>
                  router.push(
                    "https://www.linkedin.com/in/jonatan-saveljeff-a94650109/"
                  )
                }
              />
              <AiFillGithub
                onClick={() =>
                  router.push("https://github.com/Saveljeffjonatan")
                }
              />
            </div>
          </div>

          <div className="mt-14" />

          <h2 className="text-xl text-Accent">Oscar Andersson</h2>
          <h3 className="text-md">Lorem, ipsum dolor.</h3>
          <p className="text-sm mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
            facilis labore cupiditate ut alias sed eveniet illum nisi dolores
            illo tempora. Libero minus voluptate dolorum totam, laborum voluptas
            impedit debitis!
          </p>
          <div className="flex justify-evenly text-4xl mt-2 text-CTA">
            <AiFillTwitterSquare />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
