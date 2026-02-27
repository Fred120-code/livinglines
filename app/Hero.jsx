"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

//Hero
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

//Marquee Texts
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

//About Tabs
const tabs = [
  { label: "History", key: "his" },
  { label: "Mission", key: "mis" },
  { label: "Vision", key: "vis" },
];

const tabContent = {
  his: [
    "At Shree Harl Associates, we design thoughtfully curated spaces that combine functionality and aesthetic excellence. Every project is shaped around our clients’ identity and long-term vision.",
    " Our multidisciplinary team collaborates closely with you to transform ideas into refined architectural and interior experiences.",
    "We create architectural concepts that balance innovation with practicality. Each structure is carefully planned to enhance comfort, efficiency, and visual harmony.",
  ],
  mis: [
    "Every project begins with a bold idea. We translate complex requirements into clear, creative design solutions that reflect excellence and originality.",
    " Through collaboration, precision, and innovation, we deliver spaces that inspire and add lasting value.",
    "We approach urban and residential projects with a strategic mindset, ensuring optimal space utilization and sustainable design principles.",
  ],
  vis: [
    "Our interior solutions are crafted to deliver both sophistication and functionality. We focus on spatial flow, materials, and lighting to create impactful environments.",
    " By understanding your lifestyle and aspirations, we design interiors that feel personal, refined, and purpose-driven.",
    " From concept development to execution, we ensure every detail aligns with your objectives and elevates the overall design outcome.",
  ],
};

//Desing Process
const ProcessSteps = [
  {
    id: 1,
    imgSrc: "/process-icon-1.svg",
    title: "Initial Consultation",
    description:
      "We begin with a detailed discussion to understand your objectives, spatial requirements, budget parameters, and project timeline.",
  },
  {
    id: 2,
    imgSrc: "/process-icon-2.svg",
    title: "Concept Development",
    description:
      "Our team translates your vision into preliminary concepts, including layout strategies, design direction, and functional planning.",
  },
  {
    id: 3,
    imgSrc: "/process-icon-3.svg",
    title: "Design & Planning",
    description:
      "We refine the approved concept into technical drawings, material selections, and comprehensive architectural plans ready for execution.",
  },
  {
    id: 4,
    imgSrc: "/process-icon-4.svg",
    title: "Execution & Delivery",
    description:
      "From project coordination to final handover, we oversee implementation to ensure quality, precision, and alignment with the original vision.",
  },
];


const Hero = () => {
  const [activeTab, setActiveTab] = useState("his");
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

      {/* About */}
      <section className="px-[8%] lg:px-[12%] py-12">
        {/* Top Section */}
        <div className=" flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="lg:w-2/3">
            <h2
              className="text-[4rem] leading-[4rem] lg:text-[6rem] lg:leading-[6rem]
              tracking-[0.2rem] font-[bricolage] font-bold"
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

      {/* Desing Process */}
      <div>
        
      </div>
    </>
  );
};

export default Hero;
