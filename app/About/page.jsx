import React from "react";

const Page = () => {
  return (
    <>
      {" "}
      <div
        className="relative md:h-[68vh] h-[280px] overflow-hidden flex items-center
         justify-center text-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full object-cover z-0"
        >
          <source src="/page-title.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/70
            z-10"
        />
        <h1 className="text-white text-[3rem] md:text-[5rem] font-bricolage z-20">
          About Us
        </h1>
      </div>
      {/* About Us */}
      <div className="bg-white py-10">
        {/* Top Section */}
        <div className="container mx-auto mb-10 px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h1 className="text-3xl lg:text-8xl font-bold text-gray-800">
                Interior & Exterior Solutions
              </h1>
            </div>

            <div className="lg:w-1/3">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  About Us
                </h3>
                <p className="mt-2 text-gray-600">
                  At Living Lines, we are passionate about transforming spaces
                  into stunning works of art that reflect our clients' unique
                  tastes and lifestyles. With a team of experienced designers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
