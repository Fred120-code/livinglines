import { trackEvent } from "../../lib/gtm";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    trackEvent("form_submit", {
      form_name: "contact",
      page: window.location.pathname,
    });
  };
  return (
    <div>
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
          Contact
        </h1>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Side */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="">Let's Talk</h1>
              <h2>
                Let's start transforming your space-reach out and bring your
                vision to liffe today.
              </h2>

              <div className="space-y-4">
                <h6 className=" uppercase text-lg tracking-widest border-b pb-4">
                  Call Us
                </h6>
                <h3 className="text-3xl font-light">
                  <a href="#" className="text-black no-underline">
                    +237 652 872 441
                  </a>
                </h3>
                <div className="flex gap-4">
                  <a href="#">
                    <i className="bi bi-facebook text-2xl text-black"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-2xl text-black"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:w-2/5">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className=" w-full border-b border-gray-300
                   focus:border-black outline-none py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className=" w-full border-b border-gray-300
                   focus:border-black outline-none py-2"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  required
                  className=" w-full border-b border-gray-300
                   focus:border-black outline-none py-2"
                />
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  name="message"
                  required
                  className=" w-full border-b border-gray-300
                   focus:border-black outline-none py-2"
                />

                <button
                  type="submit"
                  className="bg-black text-white
                  py-2 px-6 rounded-md text-lg cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-black px-8 lg:px-[12%] py-12">
        <div className="overflow-hidden">
          <div
            className="bg-white rounded flex flex-col md:flex-row
             gap-6 p-10 items-center shadow-md"
          >
            {/* Image */}
            <div className="w-full md:w-2/5 h-[400px]">
              <img
                src="/contact-banner.jpg"
                alt="contact-banner"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Info */}
            <div className="w-full md:w-3/5">
              <h1 className="text-4xl md:text-6xl font-bold">
                Your Dream Stats Here
              </h1>
              <p className="text-gray-500 mt-4">
                All queries are replied with 24hrs.
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127385.76314690518!2d11.354398077700026!3d3.851970000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfbe61c08cd3%3A0x355870322ba0a3ce!2sCentre%20r%C3%A9gional%20africain%20d&#39;administration%20du%20travail!5e0!3m2!1sfr!2scm!4v1773331762213!5m2!1sfr!2scm"
              width="100%"
              height="650"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-[10px]"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
