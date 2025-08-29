import { MdRocketLaunch } from "react-icons/md";
import { FiPhoneOutgoing, FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="hero-section relative w-full text-center overflow-hidden pt-20 pb-10 text-white"
      id="hero_section"
    >
      {/* Background Gradient */}
      <div className="half-circle absolute -bottom-20 left-0 right-0 mx-auto h-[250px] w-[500px] rounded-t-full bg-main/20 blur-3xl z-[-1]"></div>

      {/* Decorative Grid Image */}
      <img
        src="./assets/hero-grid.webp"
        alt="heroGrid"
        loading="lazy"
        className="absolute top-0 right-0 -z-2 hidden h-full w-full object-cover opacity-15 md:block"
      />

      <div data-aos="fade-In" className="container">
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col-reverse items-center justify-between gap-6 py-10 md:flex-row lg:min-h-[550px]">
          <div className="left-content w-full">
            {/* Badge */}
            <div className="border-icon-bg/30 to-main/20 from-card-bg relative mx-auto mb-4 flex w-fit items-center gap-2 overflow-hidden rounded-lg border bg-gradient-to-l px-4 py-2">
              <MdRocketLaunch className="text-main" size={20} />
              <span className="relative text-sm sm:text-base text-light-gray">
                Build Smart. Launch Fast. Scale Better.
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Ideas Into
              <br />
              <span className="from-blue-400 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                High-Impact Digital Products
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-light-gray my-5 sm:my-7 md:max-w-3xl text-center mx-auto text-base sm:text-lg">
              At <span className="font-semibold text-white">GeekCode</span>, we
              don’t just build websites & apps — we craft
              <span className="text-white"> solutions that attract clients</span>,
              boost conversions, and scale with your business.
              <br className="hidden sm:block" />
              Whether you&apos;re a startup or an established brand, we’ll help
              you stand out in the digital world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 items-center">
              <Link
                to="/contact"
                className="blue-gradient group flex w-fit items-center gap-3 rounded-lg px-5 py-3 text-lg font-medium shadow-lg hover:shadow-blue-500/40 transition"
              >
                <FiPhoneOutgoing
                  size={22}
                  className="transition group-hover:rotate-12"
                />
                Let&apos;s Work Together
              </Link>
              <Link
                to="/services"
                className="from-card-bg to-blue-500/20 text-light-gray flex w-fit border border-blue-400/20 items-center gap-2 rounded-lg bg-gradient-to-l px-5 py-3 text-lg transition duration-150 hover:text-white"
              >
                View Services
                <FiChevronsRight size={22} className="transition" />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="user-avatar mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <img
                className="h-auto w-full max-w-[120px] sm:max-w-[150px]"
                src="./assets/users-avatar.png"
                alt="users-avatar"
                loading="lazy"
              />
              <p className="text-sm sm:text-base text-white">
                Trusted by <span className="font-bold text-blue-400">460+ clients</span> worldwide 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;