"use client";
import { motion as m } from "motion/react";
import Image from "next/image";
import Hero from "./Hero";
import BrandTrusted from "./BrandTrusted";
import ServiceStation from "./ServiceStation";
import LpBackgroundImage from '@/public/images/home/BGBaseImg.webp';

const LandingPage = () => {
  return (
    <>
    <section className="relative w-full min-h-screen overflow-hidden">
      <Image
        src={LpBackgroundImage}
        alt="Home Bg Image"
        fill
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
        placeholder="blur"
        className="object-cover object-top"
      />
       <div className="absolute bottom-0 left-0 right-0 h-80 bg-linear-to-t from-[#660b11] via-red-notch/40 to-transparent"></div>

      {/* Content */}
      <div className="relative w-full flex flex-col">
        <Hero />
        <BrandTrusted />
        <ServiceStation />
      </div>
    </section>
    <section
        className="bg-[#660b11] py-5 sm:py-8 md:py-10 lg:py-14 text-center flex flex-col justify-start items-center sm:gap-2 md:gap-3 lg:gap-4">
        <m.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">Our Successful Landings</m.h1>
        <m.h3 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm md:text-lg lg:text-[25px] w-[90%] md:w-[80%] lg:w-[73%]">This portfolio showshow we&apos;ve helped brands land by understanding their orbit, mapping the emotional terrain, and crafting ideas that connect with clarity and purpose</m.h3>
    </section>
    </>
  );
};

export default LandingPage;
