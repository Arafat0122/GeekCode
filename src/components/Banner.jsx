import { FiArrowUpRight } from "react-icons/fi";

const AboutUs = () => {
  return (
    <section className="about-us relative overflow-hidden py-12 md:py-20 text-white">
      <div className="container mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 md:flex-row">
        {/* Left Content */}
        <div
          data-aos="fade-right"
          className="left-content w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="bg-gradient-to-l from-blue-400 to-main bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
            Who We Are
          </h2>

          <p className="mt-4 text-base leading-relaxed text-light-gray sm:text-lg lg:text-xl">
            We’re a <span className="text-white font-semibold">forward-thinking digital agency</span> driven by creativity and innovation.
            Our team blends strategy, design, and technology to help brands grow, engage, and stand out in a competitive digital world.
          </p>

          <p className="mt-4 text-base leading-relaxed text-light-gray sm:text-lg lg:text-xl">
            From <span className="font-semibold text-white">startups</span> to{" "}
            <span className="font-semibold text-white">established enterprises</span>, we create tailored solutions—modern websites, digital marketing, and impactful designs—that deliver measurable results.
          </p>

          <a
            href="/contact-us"
            className="blue-gradient shadow-light-blue/30 group mt-6 inline-flex w-fit items-center gap-2 rounded-lg px-5 py-3 text-lg font-medium shadow-xl transition hover:shadow-blue-500/40"
          >
            Let’s Connect
            <span className="transition-transform duration-200 group-hover:rotate-12">
              <FiArrowUpRight size={22} />
            </span>
          </a>
        </div>

        {/* Right Content */}
        <div
          data-aos="fade-left"
          className="right-content relative w-full md:w-1/2"
        >
          {/* Background card */}
          <div className="absolute -left-5 top-5 h-full w-full rounded-xl bg-main shadow-lg"></div>
          <img
            src="./assets/about-us.jpg"
            alt="About Us"
            className="relative w-full rounded-xl object-cover shadow-lg grayscale hover:grayscale-0 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;