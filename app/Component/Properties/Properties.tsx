import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import Image from "next/image";
import PropertyData from "../../JsonData/properties";


const Properties = () => {
  return (
    <>
      <section className="px-[8%] lg:px-[12%] py-16 relative">
        <div className=" flex flex-col lg:flex-row justify-between items-start mb-12">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h1 className="text-8xl font-bricolage font-bold">
              Our Properties
            </h1>
          </div>
          <div className="w-1/2">
            <h3 className=" text-2xl font-jost font-semibold mb-3">
              Our Properties
            </h3>
            <p className="mb-4 text-gray-700">
              We build our projectss with your dreams and ideas. Touch modern
              concepts and designs with Shree Hari Associates.Our Properties
            </p>
            <a href="/Projects">
              <button
                className="flex items-center
                text-black font-semibold hover:underline text-lg py-3 px-0"
              >
                <span>View More</span>
                <i className="bi bi-arrow-up-right ml-2 text-xs"></i>
              </button>
            </a>
          </div>
        </div>

        <Swiper
          loop={true}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-project-next",
            prevEl: ".swiper-project-prev",
          }}
          autoplay={{
            delay: 1500,
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {PropertyData.map((property, index) => (
            <SwiperSlide key={index}>
              <Link href={`properties/${property.id}`}>
                <div className=" relative h-[450px] rounded overflow-hidden group">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className=" object-cover transition-transform duration-700
                         group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div
                    className=" absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black 
                      to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
                  />

                  {/* Title & Price */}
                  <div
                    className=" flex justify-between items-center w-full absolute bottom-0
                       left-0 z-10 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform
                        duration-700"
                  >
                    <h4 className=" text-white text-2xl font-bricolage font-bold">
                      {property.title}
                    </h4>
                    <p className="text-white text-xl font-bricolage">
                      ${property.price}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Navigation Buttons
            <div
              className=" swiper-project-prev hidden lg:block absolute right-
             top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-black text-2xl"
            >
              <i className="bi bi-arrow-right"></i>
            </div>
            <div
              className=" swiper-project-next hidden lg:block absolute right-
             top-1/4 transform -translate-y-1/2 cursor-pointer z-10 text-black text-2xl"
            >
              <i className="bi bi-arrow-left"></i>
            </div> */}
      </section>
    </>
  );
};

export default Properties;
