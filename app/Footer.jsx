import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 ">
        <div className="absolute inset-0 footer invert z-[-1]" />
        <div
          className="absolute bottom-0 footer-shape bg-no-repeat bg-bottom-right  
                invert z-[-1] right-0 w-full h-full"
        />
        <div className=" container mx-auto lg:flex-row lg:justify-between gap-12">
          <div
            className="flex flex-col lg:flex-row lg:justify-between
          gap-12 mb-12"
          >
            {/**Left col */}
            <div className="lg:w-1/2 pr-10 lg:pr-0">
              <h2 className="font-bricolage text-6xl mb-6 mt-6">
                We'd love to cooperate to build amazing {""}
              </h2>
              <p className="my-5 text-lg font-medium">
                Through a unique combination of creativity, precision, and a
                deep understanding of our clients' needs, we transform spaces
                into extraordinary living environments. We are committed to
                delivering exceptional design solutions that not only meet but
                exceed our clients' expectations, creating spaces that inspire
                and delight.
              </p>
              <div
                className="flex justify-between items-center
             w-full max-w-md"
              >
                <div>
                  <span className="text-xl block">Call our office</span>
                  <h4 className="mt-3 text-xl font-semibold">
                    <a href="tel:+237652872441" className="hover:underline">
                      +237 652 872 441
                    </a>
                  </h4>
                </div>

                <div>
                  <span className="text-xl block">Send a message</span>
                  <a
                    href="#"
                    className="mt-3 text-lg hover:underline inline-block"
                  >
                    Example@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div>
                <div className="flex flex-col space-y-3 mt-6">
                  <h3 className=" uppercase text-3xl font-bricolage mb-3 hover:ps-2 transition-all duration-300">
                    Company
                  </h3>
                  <Link
                    href="/About"
                    className="text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/properties"
                    className="text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                  >
                    Properties
                  </Link>
                  <Link
                    href="/Contact"
                    className="text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>

                <div className="lg:flex-1 mt-6">
                  <h5 className="font-bricolage text-3xl mb-3">Address</h5>
                  <p className="text-lg font-medium max-w-sm">
                    123 Main Street, Anytown, USA
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-3 mt-6">
                <h3
                  className=" uppercase text-3xl font-bricolage
                 mb-3"
                >
                  Follow Us
                </h3>
                <a
                  href="#"
                  className="text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                >
                  Github
                </a>{" "}
                <a
                  href="#"
                  className="text-xl font-medium text-gray-700 hover:text-black
                     hover:ps-2 transition-all duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 py-6 bg-white">
          <p className="text-center text-lg">
            &copy; {new Date().getFullYear()} Living Lines. All rights reserved
            by{" "}
            <a href="#" className="font-semibold *:hover:underline">
              Joran Fred
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
