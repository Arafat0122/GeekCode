import { MdRocketLaunch } from "react-icons/md";


const ServiceHero = () => {
    return (
        <section
            data-aos="fade-in"
            className="hero-section relative overflow-hidden pt-16 text-white"
            id="hero_section"
        >
            {/* Decorative Grid Background */}
            <img
                src="./assets/hero-grid.webp"
                alt="Decorative Grid"
                loading="lazy"
                className="absolute top-0 right-0 -z-10 hidden h-full w-full object-cover opacity-15 md:block"
            />

            {/* Subtle Gradient Divider */}
            <div className="via-icon-bg/30 absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-main/20 to-transparent"></div>

            <div className="relative container flex items-center justify-center py-12 lg:min-h-[600px]">
                <div className="flex flex-col items-center text-center">
                    {/* Animated Badge */}
                    <div className="relative mb-5 flex w-fit items-center gap-2 rounded-full border border-icon-bg/30 bg-gradient-to-r from-card-bg to-main/20 px-5 py-2 shadow-md">
                        <div className="blaze bg-icon-bg/40 absolute -top-10 -left-10 h-32 w-12 rotate-45 blur-xl"></div>
                        <MdRocketLaunch className="text-main relative z-10 text-lg" />
                        <span className="text-sm font-medium text-light-gray relative z-10">
                            Your Vision, Our Design, Digitalized
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="mb-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                        Fusing Creativity With{" "}
                        <span className="from-light-blue to-main bg-gradient-to-r bg-clip-text text-transparent">
                            Marketing & Technology
                        </span>{" "}
                        To Drive Growth
                    </h1>

                    {/* Supporting Text */}
                    <p className="text-light-gray mb-8 max-w-3xl text-base md:text-lg">
                        Unlock your brand&apos;s full potential with expert solutions in{" "}
                        <span className="font-semibold text-white">Web Development</span>,{" "}
                        <span className="font-semibold text-white">App Development</span>, and{" "}
                        <span className="font-semibold text-white">WordPress</span>.
                        Whether you&apos;re launching a fast website, scaling your app, or
                        building your online presence — we craft creative strategies
                        designed for success.
                    </p>

                    {/* CTA Button */}
                    <a
                        href="/contact"
                        className="blue-gradient group flex items-center gap-2 rounded-xl px-6 py-3 text-lg font-medium shadow-lg transition hover:shadow-main/40"
                    >
                        Talk to an Expert
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;