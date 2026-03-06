import { testimonialData } from "../../JsonData/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="px-[8%] lg:px-[12%] py-20 bg-white">
      <div
        className="flex flex-col-reverse lg:flex-row justify-between items-center mb-12
         gap-8"
      >
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-bricolage font-bold">
            Client <br />
            Testiomonials
          </h1>
        </div>
        <div className="lg:w-2/3">
          <h3 className="text-xl font-semibold mb-2">Testimonials</h3>
          <p>
            Discover how our thoughtful design solutions have transformed spaces
            and delighted clients. Hear directly from those who have experienced
            the Living Lines difference, and see how we bring visions to life
            with creativity and precision.
          </p>
        </div>
      </div>

        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            className="w-full"
        >
            {testimonialData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                        <img 
                            src="/qoute.svg" 
                            alt="" 
                            className="w-10 h-10 object-contain mb-4
                             opacity-25"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  );
};

export default Testimonial;
