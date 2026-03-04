import Image from "next/image";
import { service2 } from "../../JsonData/service2";

const Service2 = () => {
  return (
    <section className="px-[8%] lg:px-[12%] py-12 bg-gray-100">
      <div className=" flex flex-col lg:flex-row justify-between items-start mb-12">
        <div className="lg:w-2/3 ">
          <h1 className="text-8xl font-bricolage font-bold">
            Architecture <br />
            Desing Solution
          </h1>
        </div>
        <div className="w-1/2">
          <h3 className=" text-2xl font-jost font-semibold mb-3">
            Our Services
          </h3>
          <p className="mb-4 text-gray-700">
            whether you're dreaming of a cozy home retreat or a bold modern
            workspace, our expert designers bring your vision to life.
          </p>
          <a href="/Services">
            <button
              className="flex items-center
                text-black font-semibold hover:underline text-lg py-3 px-0"
            >
              <span> All Services</span>
              <i className="bi bi-arrow-up-right ml-2 text-xs"></i>
            </button>
          </a>
        </div>
      </div>

      {/* {
        service2.map((service, idx) => (
          <div key={idx} className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl font-bricolage font-bold mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <a href="/Services">
                <button
                  className="flex items-center
                    text-black font-semibold hover:underline text-lg py-3 px-0"
                >
                  <span> Learn More</span>
                  <i className="bi bi-arrow-up-right ml-2 text-xs"></i>
                </button>
              </a>
            </div>
          </div>
        ))
      } */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {service2.map((service, idx) => (
          <div
            key={idx}
            className="border border-black rounded-xl p-6
             transition-all duration-300 hover:border-transparent shadow 
             hover:shadow-lg hover:-transalate-y-1 cursor-pointer group"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={60}
              height={60}
              className="mb-4 transition-transform duration-700 
                    group-hover:rotate-[360deg]"
            />

            <h2
              className="text-3xl font-bricolage relative inline-block mt-2 mb-2
                after:block after:content-[''] after:absolute after:bottom-0
                after:left-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full
                after:transition-all after:duration-300"
            >
              {service.title}
            </h2>
            <p className="text-gray-700 font-normal w-4/5">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service2;
