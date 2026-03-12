import Image from "next/image";
import React from "react";
import DesingProcess from "../Component/DesingProcess/DesingProcess";
import Gallery from "../Component/Gallery/Gallery";

const Page = () => {
  return (
    <div>
      {" "}
      <div
        className="relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] 
        xl:h-[68vh] overflow-hidden flex flex-col items-center
         justify-center text-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/page-title.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute top-0 left-0 w-full h-full bg-black/70
            z-10"
        />
        <h1
          className="text-white text-2xl sm:text-3xl md:text-4xl 
        lg:text-5xl xl:text-6xl font-bricolage z-20 leading-tight px-4"
        >
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

        {/* Vision Section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div
              className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden
             rounded-lg"
            >
              <Image
                src="/ab-vision-image1.jpeg"
                alt="vision"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:w-1/2 lg:pl-12">
              <p className="mb-4 text-gray-700 leading-relaxed">
                <span className="text-gray-800 font-bold">Our </span>
                vision is to create spaces that inspire and elevate the human
                experience. We believe that thoughtful design has the power to
                transform not just physical spaces, but also the way people feel
                and interact within them. Our goal is to bring beauty, function,
                and harmony together in every project we undertake.
              </p>
              <p className="text-gray-800 leading-relaxed">
                We are committed to pushing the boundaries of design and
                innovation, while always staying true to our core values of
                integrity, creativity, and client satisfaction. At Living Lines,
                we don't just design spaces - we create living lines that
                connect people to their environments in meaningful ways.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pl-12">
              <p className="mb-4 text-gray-700 leading-relaxed">
                At <strong>LivingLines</strong>, our vision is to create spaces
                that inspire and elevate the human experience. We believe that
                thoughtful design has the power to transform not just physical
                spaces, but also the way people feel and interact within them.
                Our goal is to bring beauty, function, and harmony together in
                every project we undertake.
              </p>
              <p className="text-gray-800 leading-relaxed">
                We are committed to pushing the boundaries of design and
                innovation, while always staying true to our core values of
                integrity, creativity, and client satisfaction.
              </p>
            </div>

            <div
              className="lg:w-1/2 mb-6 lg:pl-12 lg:mb-0 overflow-hidden
             rounded-lg"
            >
              <Image
                src="/ab-vision-image2.jpeg"
                alt="vision"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className=" mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-8 
      sm:mb-10 md:mb-12 lg:mb-16"
      >
        {/* Design Process */}
        <DesingProcess />
        {/* Gallery */}
        <Gallery />
      </div>
    </div>
  );
};

export default Page;
