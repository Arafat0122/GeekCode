// AboutUs.jsx
import { FiArrowUpRight } from "react-icons/fi";

const AboutUs = () => {
  return (
    <section className="about-us relative overflow-hidden bg-transparent py-14 md:py-24 text-white">
      <div className="container mx-auto flex max-w-7xl flex-col-reverse items-center gap-14 px-6 md:flex-row md:gap-20">
        {/* Left Content */}
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="left-content w-full md:w-1/2"
        >
          {/* Heading */}
          <h2 className="from-light-blue to-main mb-5 bg-gradient-to-l bg-clip-text text-3xl font-extrabold uppercase tracking-wide text-transparent sm:text-4xl md:text-5xl">
            Who We Are
          </h2>

          {/* Paragraphs */}
          <p className="mb-4 text-base leading-relaxed text-light-gray sm:text-lg">
            We are a forward-thinking digital agency dedicated to helping brands
            grow through modern web solutions, innovative marketing strategies,
            and visually stunning design. Our creative team thrives on turning
            ideas into impactful digital experiences.
          </p>
          <p className="mb-8 text-base leading-relaxed text-light-gray sm:text-lg">
            From agile startups to established enterprises, we craft powerful
            online identities backed by measurable results. Our mission is
            simple: make your brand unforgettable in the digital space.
          </p>

          {/* CTA */}
          <a
            href="/contact-us"
            className="blue-gradient shadow-light-blue/30 group flex w-fit items-center gap-2 rounded-lg px-5 py-3 text-lg font-medium shadow-xl transition duration-300 hover:scale-105"
          >
            Let’s Connect
            <span className="transition-transform duration-300 group-hover:rotate-45">
              <FiArrowUpRight size={22} />
            </span>
          </a>
        </div>

        {/* Right Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="right-content relative w-full md:w-1/2"
        >
          {/* Background accent card */}
          <div className="absolute -left-5 top-5 h-full w-full rounded-xl bg-main opacity-80 blur-md"></div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src="./assets/about-us.jpg"
              alt="About Us"
              className="w-full scale-100 transform rounded-xl object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;