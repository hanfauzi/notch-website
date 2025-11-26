"use client";
import { useInViewAnimation } from "@/animations/HookAnimation";
import { motion as m } from "motion/react";

const Hero = () => {
  const [inView, isInView] = useInViewAnimation()

  return (
    <div className="w-full mt-20 md:mt-69 md:mb-36 flex flex-col justify-start items-center gap-4 sm:gap-32 md:gap-36 lg:gap-42 text-white">
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0 }}
        viewport={{ once: true }}
        className="w-full px-4 sm:px-7 md:px-14"
      >
        <h2 className="font-medium text-xl sm:text-4xl md:text-6xl lg:text-[61px]">
          Fuel the Orbit
        </h2>
        <h1 className="font-bold text-5xl sm:text-7xl md:text-9xl lg:text-[200px] md:mt-2 leading-none">
          <span className="md:-ml-2">Drive</span> <br />
          the
        </h1>
      </m.div>
      <m.div
        ref={inView}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.4, delay: 0.2 }}
        className="w-full px-4 sm:px-7 md:px-14 text-end"
      >
        <h1 className="font-bold text-4xl sm:text-7xl md:text-8xl lg:text-[180px] tracking md:-mr-1 lg:-mr-4">
          GROWTH
        </h1>
        <h2 className="text-base md:text-2xl lg:text-[33px] sm:font-light sm:-mt-1 lg:-mt-2">
          Scale new heights. With us, Up a <b className="font-bold">NOTCH</b>
        </h2>
      </m.div>
    </div>
  );
};
export default Hero;
