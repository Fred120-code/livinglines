"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

const HeroSlides = [
  {
    bgImage: "/Hero-1.webp",
    span: "Space Planning",
    title: "Inspired \nSpaces",
    paragraphs: [
      "At Shree Harl Associates, we design thoughtfully curated spaces that combine functionality and aesthetic excellence. Every project is shaped around our clients’ identity and long-term vision.",
      " Our multidisciplinary team collaborates closely with you to transform ideas into refined architectural and interior experiences.",
    ],
    buttonText: "About Us",
    buttonLink: "/about",
  },
  {
    bgImage: "/Hero-2.webp",
    span: "Architectural Design",
    title: "Timeless \nArchitecture",
    paragraphs: [
      "We create architectural concepts that balance innovation with practicality. Each structure is carefully planned to enhance comfort, efficiency, and visual harmony.",
      " From concept development to execution, we ensure every detail aligns with your objectives and elevates the overall design outcome.",
    ],
    buttonText: "Our Services",
    buttonLink: "/about",
  },
  {
    bgImage: "/Hero-3.webp",
    span: "Interior Innovation",
    title: "Elegant \nInteriors",
    paragraphs: [
      "Our interior solutions are crafted to deliver both sophistication and functionality. We focus on spatial flow, materials, and lighting to create impactful environments.",
      " By understanding your lifestyle and aspirations, we design interiors that feel personal, refined, and purpose-driven.",
    ],
    buttonText: "View Portfolio",
    buttonLink: "/about",
  },
  {
    bgImage: "/Hero-4.webp",
    span: "Urban Development",
    title: "Modern \nLiving",
    paragraphs: [
      "We approach urban and residential projects with a strategic mindset, ensuring optimal space utilization and sustainable design principles.",
      " Our team integrates contemporary trends with structural integrity to deliver developments that stand the test of time.",
    ],
    buttonText: "Discover More",
    buttonLink: "/about",
  },
  {
    bgImage: "/Hero-5.webp",
    span: "Creative Solutions",
    title: "Visionary \nDesigns",
    paragraphs: [
      "Every project begins with a bold idea. We translate complex requirements into clear, creative design solutions that reflect excellence and originality.",
      " Through collaboration, precision, and innovation, we deliver spaces that inspire and add lasting value.",
    ],
    buttonText: "Get Started",
    buttonLink: "/about",
  },
];

const marqueeItems = [
  "Timeless Architecture",
  "Bespoke Interiors",
  "Functional Elegance",
  "Innovative Concepts",
  "Sustainable Spaces",
  "Luxury Living",
  "Design Excellence",
  "Modern Developments",
  "Creative Precision",
  "Vision-Driven Planning",
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <>
      {/* Hero */}
      <div className="w-full h-screen relative">
        <Swiper
          modules={[Navigation, Autoplay, EffectCards]}
          loop={true}
          autoplay={{ delay: 4000 }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="h-full"
        >
          {HeroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full relative flex items-center  justify-center
                                text-white px-6"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className=" absolute inset-0 bg-black/70 z-0"></div>
                {/* Content */}

                <div className=" relative hero-content z-10 max-w-4xl text-start space-y-6">
                  <span className="text-xl font-medium uppercase">
                    {slide.span}
                  </span>
                  <h1 className="text-6xl md:text-8xl font-bold font-bricolage whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <div className=" flex flex-col md:flex-row gap-4 text-lg justify-center">
                    {slide.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="max-w-xl">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <Link href={slide.buttonLink}>
                    <button
                      className="mt-4 cursor-pointer rounded px-6 py-3 border border-white 
                        text-white uppercase font-medium tracking-wide hover:bg-white 
                        hover:text-black transition-all"
                    >
                      {slide.buttonText}{" "}
                      <i className="bi bi-arrow-right ml-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div
            className="swiper-button-next swiper-btn swiper-next left-4 top-[80%]
           absolute z-20"
          >
            <i className="ri-arrow-right-wide-line"></i>
          </div>
          <div
            className="swiper-button-prev swiper-btn swiper-prev left-4 top-[90%]
           absolute z-20"
          >
            <i className="ri-arrow-left-wide-line"></i>
          </div>
        </Swiper>
      </div>

      {/* Marquee */}
      <div className=" overflow-hidden whitespace-nowrap my-10 relative">
        <div className=" animate-marquee flex w-max gap-8">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[250px] h-[100px] border border-gray-300  rounded-full flex items-center 
              justify-center text-black text-2xl font-bold uppercase px-5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
