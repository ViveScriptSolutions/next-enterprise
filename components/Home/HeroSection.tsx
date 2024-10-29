import Link from "next/link";
import GetStartedModal from "./GetStartedModal";
import Header from "../Header/Header";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <Header />
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            Elevate Your Business with Modern
            <span className="text-indigo-400"> Web/AI Technology</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Boost Efficiency and Grow Your Business with Tailored Web Solutions.
            Implement AI technology, workflow automation and modern web
            application for your business.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <GetStartedModal />
            {/* TODO: Change the Button link for Explore Our Services */}
            <Link href="#services" className="btn-secondary ml-4">
              Our Services
            </Link>
          </div>
          <div className="flex gap-x-4 text-gray-400 text-sm">
            <div className="flex">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
              </svg>
            </div>
            <p>
              <span className="text-gray-100">5.0</span> by over 300 clients
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <Image
            src="/assets/images/hero-sample-image.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
            width={1099}
            height={632}
            alt="Hero image"
          />
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
    </>
    // <section className="hero bg-cover bg-center py-24">
    //   <div className="text-center">
    //     <h1 className="text-4xl font-bold mb-4">
    //       Elevate Your Business with Cutting-Edge Web Development & Automation.
    //     </h1>
    //     <p className="text-xl mb-6">
    //       Boost Efficiency and Grow Your Business with Tailored Web Solutions.
    //     </p>
    //     {/* <Button>
    //       Book a Consultation
    //     </Button> */}
    //     <GetStartedModal />
    //     {/* TODO: Change the Button link for Explore Our Services */}
    //     <Link href="/about" className="btn-secondary ml-4">
    //       Our Services
    //     </Link>
    //   </div>
    // </section>
  );
};

export default HeroSection;
