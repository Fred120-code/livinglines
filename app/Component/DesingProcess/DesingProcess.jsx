import React from "react";
import { ProcessSteps } from "../../JsonData/ProcessSteps";

const DesingProcess = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className=" flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-8xl font-bricolage font-bold">
                Our Desing Process
              </h1>
            </div>

            <div className="lg:w-1/2">
              <h3
                className=" uppercase tracking-wider font-semibold border-b 
                                  pb-2 mb-6 text-sm w-fit"
              >
                Process
              </h3>
              <p className="text-lg max-w-md">
                Discover how our thoughtfull process transforms ideas info
                personalized, function and beatifuly beatifully style spaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 pt-10">
            {ProcessSteps.map(({ id, imgSrc, title, description }) => (
              <div key={id} className="w-full relative mb-10">
                <div className=" flex flex-col items-center cursor-pointer relative group">
                  {/**Circle with image and number */}
                  <div
                    className="w-[170px] h-[170px] rounded-full shadow-lg flex items-center
                           justify-center relative hover:-translate-y-1.5 transition-transform duration-300
                           "
                  >
                    <img
                      src={imgSrc}
                      alt={`process ste ${id}`}
                      className="w-[70px] h-[70px] transition-transform duration-500 ease-out
                            group-hover:-rotate-y-360"
                    />
                    <span
                      className=" absolute -top-3 right-10 bg-black text-white w-8 h-8 flex items-center
                       justify-center rounded-full text-sm font-semibold select-none"
                    >
                      {id}.
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className=" font-bricolage text-xl mt-6 mb-4 relative after:absolute
                       after:bottom-0 after:left-0 after:h-0.5 after:bg-black after:w-0 
                       group-hover:after:w-full after:transition-width after:duration-300"
                  >
                    {title}
                  </h2>
                  {/* Descrption */}
                  <p className="text-center text-base max-w-[70%] mx-auto">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesingProcess;
