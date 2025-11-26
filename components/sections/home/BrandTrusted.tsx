"use client";
import { motion as m } from "motion/react";
import Image from "next/image";
import circleBg from "@/public/images/home/BgCircleBrandTrusted.webp";

const BrandTrusted = () => {
  const logos = [
    {
      src: "/images/brands-logo/konidin.webp",
      alt: "Logo Konidin",
      width: 140,
      height: 40,
    },
    {
      src: "/images/brands-logo/ayam2telor.webp",
      alt: "Logo Ayam 2 Telor",
      width: 80,
      height: 80,
    },
    {
      src: "/images/brands-logo/hadaangin.webp",
      alt: "Logo Hada Angin",
      width: 100,
      height: 70,
    },
    {
      src: "/images/brands-logo/tanamjagung.webp",
      alt: "Logo Tanam Jagung",
      width: 90,
      height: 80,
    },
    {
      src: "/images/brands-logo/paramex.webp",
      alt: "Logo Paramex",
      width: 130,
      height: 30,
    },
    {
      src: "/images/brands-logo/superior.webp",
      alt: "Logo Superior",
      width: 90,
      height: 70,
    },
    {
      src: "/images/brands-logo/amidis.webp",
      alt: "Logo Amidis",
      width: 90,
      height: 60,
    },
    {
      src: "/images/brands-logo/unicef.webp",
      alt: "Logo UNICEF",
      width: 150,
      height: 30,
    },
  ];

  const radius = 200;
  const totalLogos = logos.length;
  const startAngle = -90;

  return (
    <div className="w-full flex flex-row-reverse py-7 sm:py-16 md:py-26 items-center justify-center text-white px-4 lg:gap-5 md:px-0 md:pt-26">
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex-1 min-w-[150px] max-w-[670px] px-2">
          <h1 className="font-bold leading-[0.9] text-lg sm:text-5xl md:text-5xl lg:text-7xl">
            Trusted by
          </h1>
          <div className="leading-none mb-0.5 md:my-2 lg:my-5">
            <span className="font-bold block text-5xl sm:text-9xl md:text-10xl lg:text-[13.5rem] tracking-tight">
              30++
            </span>
            <span className="font-semibold block sm:text-3xl md:text-5xl md:-mt-1">
              Brands
            </span>
          </div>
          <p className="text-[10px] sm:text-base md:text-2xl sm:font-light text-white/80 max-w-xl">
            From first launch to lasting impact, we&apos;ve guided 30+ brands to
            spark genuine connections across every channel.
          </p>
      </m.div>

      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex-1 min-w-[150px] max-w-[590px] flex justify-center  lg:justify-start">
        <div className="relative flex items-center justify-center w-[38vw] min-w-[150px] max-w-[220px] sm:max-w-[320px] md:max-w-[520px] lg:max-w-[720px] aspect-square rounded-full shadow-lg shadow-black/30 backdrop-blur-xs overflow-hidden">
          <Image
            src={circleBg}
            alt="Circle Background"
            fill
            sizes="100"
            priority
            className="object-cover -z-10"
            placeholder="blur"
          />
          <div className="text-center text-white z-10">
            <h2 className="text-[8px] sm:text-xs md:text-base lg:text-xl font-light tracking-wider">
              <span className="font-semibold">Our</span> Flight
            </h2>
            <h2 className="text-[8px] sm:text-xs md:text-base lg:text-xl font-semibold tracking-wider">
              Companions
            </h2>
          </div>

          {logos.map((logo, index) => {
            const angleDeg = startAngle + index * (360 / totalLogos);
            const angleRad = angleDeg * (Math.PI / 180);
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;
            return (
              <div
                key={logo.alt}
                className="absolute top-1/2 left-1/2 z-10 flex items-center justify-center"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  width: `${logo.width}px`,
                  height: `${logo.height}px`,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="100"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </m.div>

    </div>
  );
};

export default BrandTrusted;
