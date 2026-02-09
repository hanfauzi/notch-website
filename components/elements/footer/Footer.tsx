import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import ContactUsFooter from "../form/ContactUsFooter";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white w-full py-8 md:py-12 px-5 md:px-8 lg:px-16 min-h-[60vh] flex flex-col bg-[#2D2D2D]">
      <div className="w-full mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Form Section - Shows first on mobile */}
        <section className="w-full md:w-1/2 order-1 md:order-2">
          <ContactUsFooter />
        </section>

        {/* Contact Information Section - Shows second on mobile */}
        <section className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-sans mb-6 md:mb-8">
              Let&apos;s align <br className="hidden md:block" />
              <span className="inline-block md:mt-1.5 font-bold md:font-extrabold">
                our orbits
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
              <div className="shrink-0">
                <Image
                  src="/images/footer/qr-map.jpeg"
                  alt="QR Map"
                  width={150}
                  height={150}
                  className="rounded-lg bg-white p-1"
                />
              </div>

              <div className="space-y-4 md:space-y-6 text-sm md:text-lg lg:text-xl text-gray-300">
                <div>
                  <p className="font-semibold text-white mb-2">Workshop:</p>
                  <p className="leading-relaxed">
                    Jl. Ir H. Juanda ex Komplek BPKP No.22, RT.2/RW.06, Rempoa,
                    Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-2">
                    Email Address:
                  </p>
                  <a
                    href="mailto:hello@notch.id"
                    className="hover:text-white transition-colors"
                  >
                    hello@notch.id
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-white mb-2">Phone:</p>
                  <a
                    href="tel:+622127842088"
                    className="hover:text-white transition-colors"
                  >
                    021 27842088
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-8 md:mt-0">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#8d161e] flex items-center justify-center hover:bg-[#a01a23] transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white text-xl md:text-2xl" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#8d161e] flex items-center justify-center hover:bg-[#a01a23] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white text-xl md:text-2xl" />
            </a>
            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#8d161e] flex items-center justify-center hover:bg-[#a01a23] transition-colors duration-200"
              aria-label="TikTok"
            >
              <FaTiktok className="text-white text-xl md:text-2xl" />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
