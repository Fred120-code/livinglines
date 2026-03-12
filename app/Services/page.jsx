import Marquee2 from "../Component/Marquee2/Marquee2";
import Service from "../Component/Service/Service";
import Service2 from "../Component/Service2/Service2";

const Page = () => {
  return (
    <div>
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
          Services
        </h1>
      </div>
      {/* Services */}
      <Service />
      {/* Marquee 2 */}
      <Marquee2 />
      {/* Services 2 */}
      <Service2 />
    </div>
  );
};

export default Page;
