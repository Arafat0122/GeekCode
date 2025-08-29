import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const ContactPage = () => {
  return (
    <section
      id="contact_section"
      className="relative min-h-[350px] overflow-hidden py-28 md:py-24"
    >
      {/* Background Grid */}
      <img
        src="./assets/hero-grid.webp"
        alt="background grid"
        loading="lazy"
        className="absolute inset-0 -z-10 hidden h-full w-full object-cover opacity-15 md:block"
      />

      <div className="container relative mx-auto px-4 text-white">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="mx-auto w-fit rounded-3xl border border-icon-bg/30 bg-gradient-to-r from-card-bg to-card-bg px-5 py-1.5 text-xs uppercase tracking-wide text-light-gray md:mb-4">
            Contact
          </p>
          <h2 className="bg-gradient-to-l from-light-blue to-main bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
            Let’s Build Something Together
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Content */}
          <div
            data-aos="fade-right"
            className="mx-auto max-w-[600px] lg:mx-0 lg:w-1/2"
          >
            <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
              Get in Touch
            </h3>
            <p className="text-light-gray mb-6 text-lg leading-relaxed md:text-xl">
              Whether you’re curious about our services, want to discuss your
              next project, or just say hi — we’d love to hear from you. Reach
              out anytime!
            </p>

            {/* Contact Info */}
            <ul className="space-y-4 text-light-gray md:text-lg">
              <li className="flex items-start gap-2">
                <FiMail className="mt-1 text-main h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:contact@GeekCode.dev"
                  className="hover:text-white transition"
                >
                  contact@geekcode.dev
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FiPhone className="mt-1 text-main h-5 w-5 flex-shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-1 text-main h-6 w-5 flex-shrink-0" />
                <span>42 Dev Street, CaveTown, CAN 4567</span>
              </li>
            </ul>
          </div>

          {/* Right Content: Contact Form */}
          <div
            data-aos="fade-left"
            className="sm:mx-auto lg:w-1/2"
          >
            <form className="space-y-6 rounded-xl bg-card-bg/20 p-6 shadow-lg backdrop-blur-md sm:w-[450px] md:w-[600px]">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-light-gray"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border border-icon-bg/30 bg-dark-bg px-4 py-3 text-white outline-none transition focus:border-main focus:ring-2 focus:ring-main/40"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-light-gray"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-md border border-icon-bg/30 bg-dark-bg px-4 py-3 text-white outline-none transition focus:border-main focus:ring-2 focus:ring-main/40"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-light-gray"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full rounded-md border border-icon-bg/30 bg-dark-bg px-4 py-3 text-white outline-none transition focus:border-main focus:ring-2 focus:ring-main/40"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-light-blue to-main py-3 font-medium text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;