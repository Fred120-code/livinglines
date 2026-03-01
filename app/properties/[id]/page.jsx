"use client";
import { notFound } from "next/navigation";
import PropertyData from "../../JsonData/properties";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

export default async function PropertyDetails({ params }) {
  const { id } = await params;
  const property = PropertyData.find((item) => item.id === parseInt(id));
  if (!property) notFound();

  const relatedProperties = PropertyData.filter(
    (item) => item.id !== property.id && item.location === property.location,
  );

  return (
    <>
      <div
        className="relative h-[68vh] overflow-hidden flex items-center
         justify-center"
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
          {property.title}
        </h1>
      </div>

      {/* Property Details */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8">
            <div className=" flex justify-between items-start gap-2">
              <div>
                <h2
                  className="text-4xl font-bold text-gray-800
                         font-bricolage mb-2"
                >
                  {property.title}
                </h2>
                <p className="text-lg text-gray-600 mb-1 leading-relaxed">
                  {property.desc}
                </p>
              </div>

              <span>${property.price}</span>
            </div>

            {/* Static info section */}
            <div
              className="mb-6 mt-3 space-y-1 text-gray-700
            font-medium flex flex-wrap gap-x-5 gap-y-3"
            >
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Area:</span>
                2200 Sd. Ft.
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Location:</span>
                USA
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Design By:</span>
                John Doe
              </p>{" "}
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Client:</span>
                Jay Smith
              </p>
            </div>

            <p className="mt-3 font-bricolage text-gray-700">
              A cozy and modern home designed for comfortable living, Properties
              3 combines pratical layout with stylish details. Perfect for those
              seeking a peacefull and affordable residence.
            </p>
            <p className="mt-3 font-bricolage text-gray-700">
              This charming propertiy offers a bright and inviting space, ideal
              for a growing family or anyone looking for. Experience comfort and
              convenience in a beautiful setting.
            </p>
          </div>
        </div>
      </div>

      {/* Desc */}
      <div className="px-[8%] lg:px-[12%] py-16">
        <h1 className="text-6xl font-bold font-bricolage mb-10">Description</h1>
        <p className="font-bricolage text-lg mb-2">
          This 2200 sqft residence in Prabha colony, showcases a subtile and
          sophisticated approach to moder living , Designed with a minimalist
          mindeset, the home balances functionality with elegance through clean
          geometry, soft meutral tones, and purposeful spatial planning
        </p>
        <p className="font-bricolage text-lg mb-2">
          A minimal yet impactful approach, taillored for hedling and p clarity.
        </p>
        <p className="font-bricolage text-lg mb-2">
          A compact yet impacfull home that speaks of thought desing and refined
          simplicity.
        </p>
      </div>

      {/* Amenties */}
      <div className="px-[8%] lg:px-[12%] py-16 rounded-xl shadow-sm bg-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Amenities</h1>

        {/* Amenities Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5
                    gap-8 text-gray-700"
        >
          <div className="flex items-center gap-3">
            <i
              className="bi bi-lightning-charge text-yellow-600
                text-2xl"
            ></i>
            <span>Power Back Up</span>
          </div>
          <div className="flex items-center gap-3">
            <i
              className="bi bi-wifi text-yellow-600
                text-2xl"
            ></i>
            <span>Internet/Wifi Connectivity</span>
          </div>
          <div className="flex items-center gap-3">
            <i
              className="bi bi-tools text-yellow-600
                text-2xl"
            ></i>
            <span>Maintenance Staff</span>
          </div>
          <div className="flex items-center gap-3">
            <i
              className="bi bi-building text-yellow-600
                text-2xl"
            ></i>
            <span>Vaastu Compliant</span>
          </div>
          <div className="flex items-center gap-3">
            <i
              className="bi bi-houses text-yellow-600
                text-2xl"
            ></i>
            <span>Rentable Community Space</span>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Related Properties
        </h2>

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
          {relatedProperties.map((property, index) => (
            <SwiperSlide key={index}>
              <Link href={`/properties/${property.id}`}>
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

        
      </div>
    </>
  );
}
