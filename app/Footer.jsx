import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10">
        <div className="absolute inset-0 footer invert z-[-1]" />
        <div
          className="absolute bottom-0 footer-shape bg-no-repeat bg-bottom-right  
                invert z-[-1] right-0 w-full h-full"
        />
        <div className="px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 sm:py-12 md:py-16">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
            {/**Left col */}
            <div className="lg:w-1/2 pr-0 lg:pr-10">
              <h2 className="font-bricolage text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 mt-4 sm:mt-6 leading-tight">
                We'd love to cooperate to build amazing {""}
              </h2>
              <p className="my-3 sm:my-4 md:my-5 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                Through a unique combination of creativity, precision, and a
                deep understanding of our clients' needs, we transform spaces
                into extraordinary living environments. We are committed to
                delivering exceptional design solutions that not only meet but
                exceed our clients' expectations, creating spaces that inspire
                and delight.
              </p>
              <div
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center
             w-full max-w-md gap-6 sm:gap-4 mt-6 sm:mt-8"
              >
                <div>
                  <span className="text-sm sm:text-base md:text-lg block">
                    Call our office
                  </span>
                  <h4 className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-semibold">
                    <a href="tel:+237652872441" className="hover:underline">
                      +237 652 872 441
                    </a>
                  </h4>
                </div>

                <div>
                  <span className="text-sm sm:text-base md:text-lg block">
                    Send a message
                  </span>
                  <a
                    href="#"
                    className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg hover:underline inline-block"
                  >
                    Example@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col sm:flex-row gap-6 sm:gap-6 md:gap-12">
              <div className="flex-1">
                <div className="flex flex-col space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  <h3 className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl font-bricolage mb-2 sm:mb-3 hover:ps-2 transition-all duration-300">
                    Company
                  </h3>
                  <Link
                    href="/About"
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/properties"
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                  >
                    Properties
                  </Link>
                  <Link
                    href="/Contact"
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>

                <div className="lg:flex-1 mt-6 sm:mt-8">
                  <h5 className="font-bricolage text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3">
                    Address
                  </h5>
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg font-medium max-w-sm leading-relaxed">
                    123 Main Street, Anytown, USA
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                <h3
                  className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl font-bricolage
                 mb-2 sm:mb-3"
                >
                  Follow Us
                </h3>
                <a
                  href="#"
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                >
                  Github
                </a>{" "}
                <a
                  href="#"
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 py-4 sm:py-6 bg-white px-4 sm:px-6">
          <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg">
            &copy; {new Date().getFullYear()} Living Lines. All rights reserved
            by{" "}
            <a href="#" className="font-semibold hover:underline">
              Joran Fred
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
