import React from 'react'
import { tabContent, tabs } from "../../JsonData/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { useState } from 'react';

const About = () => {
      const [activeTab, setActiveTab] = useState("his");
    
  return (
    <>
      {" "}
      <section className="px-[8%] lg:px-[12%] py-12">
        {/* Top Section */}
        <div className=" flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="lg:w-2/3">
            <h2
              className="text-[4rem] leading-[4rem] lg:text-[6rem] lg:leading-[6rem]
              tracking-[0.2rem] font-bricolage font-bold"
            >
              Interior & Architecture Desing Solutions
            </h2>
          </div>
          <div className="w-1/2">
            <h3
              className=" uppercase tracking-wider font-semibold border-b 
            pb-2 mb-6 text-sm w-fit"
            >
              About Us
            </h3>
            <p className="text-base mb-4 text-gray-700">
              At shree harl associates, we're comitted to transforming spaces
              through creative vision, elegant desing, and solutions that
              reflect your lifestyle.
            </p>
            <a
              href="/about"
              className=" inline-flex items-center
            text-black font-semibold hover:underline text-lg"
            >
              Company Info <i className="bi bi-arrow-up-right ml-2 text-xs"></i>
            </a>
          </div>
        </div>

        {/* Main Section */}
        <div className="mt-12 flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 w-full">
            <Swiper
              modules={[Navigation, EffectCards, Autoplay]}
              loop={true}
              effect="cards"
              grabCursor={true}
              autoplay={{ delay: 1500 }}
              navigation={{
                nextEl: ".swiper-about-next",
                prevEl: ".swiper-about-prev",
              }}
              className=" rounded"
              style={{
                padding: "30px",
              }}
            >
              {[
                "interior-image-01.jpg",
                "interior-image-02.jpg",
                "interior-image-03.jpg",
                "interior-image-05.jpg",
                "interior-image-06.jpg",
              ].map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`slide ${index + 1}`}
                    className="w-full h-[550px] object-cover rounded"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Tabs & Content */}
          <div className="lg:w-1/2 w-full px-0 lg:px-10 pt-10">
            {/* Tabs */}
            <div className=" flex gap-6 border-b mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`relative pb-2 text-lg font-medium transition-colors cursor-pointer
                        ${
                          activeTab === tab.key
                            ? " text-black after:h-1 after:absolute after:bottom-0 after:left-0 after:w-full after:bg-black"
                            : "text-gray-400 hover:text-black"
                        }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="space-y-4 text-gray-700">
              {tabContent[activeTab].map((para, idx) => (
                <p key={idx} className="text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About