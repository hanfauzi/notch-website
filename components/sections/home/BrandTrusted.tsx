"use client";
import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "motion/react"; 
import Image from "next/image";
import circleBg from "@/public/images/home/BgCircleBrandTrusted.webp"; 
import { useInViewAnimation } from "@/animations/HookAnimation";
import { LOGO_ICON_CIRCLE, LOGO_ICON_CIRCLE_POSITIONS } from "./data";

const BrandTrusted = () => {
  const baseViewport = { once: true, amount: 0.1 };
  const [inView, isInView] = useInViewAnimation(baseViewport);
  const N = LOGO_ICON_CIRCLE.length;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => {
        return (prevIndex - 1 + N) % N; 
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isInView, N]);

  const rotatingLogos = LOGO_ICON_CIRCLE_POSITIONS.map((position, index) => {
    const logoIndex = (startIndex + index) % N; 
    const delay = index * 0.3;
    const logo = LOGO_ICON_CIRCLE[logoIndex];

    return {
      src: logo.src,
      alt: logo.alt,
      className: `${position.className} ${logo.className}`, 
      key: `${index}-${startIndex}`,
      delay,
    };
  });

  const wrapperCircleAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: isInView 
      ? { 
          opacity: 1, 
          scale: 1, 
          y: [0, -10, 0],
          transition: {
            duration: 0.4,
            delay: 0.3,
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }
          } 
        } 
      : { opacity: 0, scale: 0.9, y: 0 },
  };

  return (
    <div className="w-full flex flex-col md:flex-row-reverse py-16 md:py-26 items-center justify-center text-white px-4 lg:gap-5 md:px-0 md:pt-26">
      <m.div
        ref={inView}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex-1 min-w-[150px] max-w-[670px] px-2 self-start md:self-center"
      >
        <h1 className="font-bold leading-[0.9] text-3xl sm:text-5xl md:text-5xl lg:text-7xl">
          Trusted by
        </h1>
        <div className="leading-none  md:my-2 lg:my-5">
          <span className="font-bold block text-7xl sm:text-9xl md:text-10xl lg:text-[12.3rem] xl:text-[14rem] tracking-tight">
            30++
          </span>
          <span className="font-semibold block text-3xl md:text-5xl -mt-1">
            Brands
          </span>
        </div>
        <p className="text-base md:text-2xl xl:text-3xl sm:font-light text-white/80 max-w-xl">
          From first launch to lasting impact, we&apos;ve guided 30+ brands to
          spark genuine connections across every channel.
        </p>
      </m.div>

      <div className="pt-14 md:pt-0 flex flex-col items-center gap-6 px-4">
        {/* <!-- Wrapper Circle --> */}
        <m.div
          ref={inView}
          {...wrapperCircleAnimation} 
          className="relative rounded-full shadow-2xl w-70 h-70 md:w-100 md:h-100 lg:w-130 lg:h-130 xl:w-140 xl:h-140 flex items-center justify-center"
        >
          {/* <!-- Circle bg --> */}
          <div
            className="relative rounded-full w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${circleBg.src})` }}
          >
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center text-white z-20"
            >
              <h2 className="text-xs md:text-base lg:text-xl font-light tracking-wider">
                <span className="font-semibold">Our</span> Flight
              </h2>
              <h2 className="text-xs md:text-base lg:text-xl font-semibold tracking-wider">
                Companions
              </h2>
            </m.div>

            <div className="absolute inset-0">
              <AnimatePresence mode="popLayout">
                {rotatingLogos.map(({ src, alt, className, key, delay }) => (
                  <m.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { duration: 0.3, delay: delay } 
                    }}
                    
                    exit={{ 
                        opacity: 0, 
                        scale: 0.5,
                        transition: { duration: 0.3, delay: delay } 
                    }}
                    className="absolute inset-0" 
                  >
                    <Image
                      width={100}
                      height={100}
                      className={className} 
                      src={src} 
                      alt={alt} 
                    />
                  </m.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default BrandTrusted;