"use client";

import { useEffect, useState } from "react";
import { motion as m, AnimatePresence } from "motion/react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(24);
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. Visibility threshold
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 2. Footer collision detection
      const footerEl = document.querySelector("footer");
      let currentBottom = 24; // default bottom-6 in pixels is 24px

      if (footerEl) {
        const footerRect = footerEl.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (footerRect.top < viewportHeight) {
          currentBottom = viewportHeight - footerRect.top + 24;
        }
      }
      setBottomOffset(currentBottom);

      // 3. Adaptive text color based on section intersection
      const testimoniEl = document.getElementById("testimoni-section");
      if (testimoniEl) {
        const testimoniRect = testimoniEl.getBoundingClientRect();
        const buttonY = window.innerHeight - currentBottom;

        // If the top of the testimoni section has scrolled past the button's vertical position,
        // it means the button is now overlapping the testimoni section (white/light gray background).
        if (testimoniRect.top < buttonY) {
          setTextColor("text-red-notch");
        } else {
          setTextColor("text-white");
        }
      } else {
        setTextColor("text-white");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          style={{ bottom: `${bottomOffset}px` }}
          className={`fixed right-6 z-50 leading-none text-center flex flex-col items-center hover:-translate-y-1.5 active:scale-95 cursor-pointer transition-colors duration-200 group ${textColor}`}
          aria-label="Back to top"
        >
          <MdKeyboardDoubleArrowUp className="text-4xl md:text-7xl transition-transform duration-300 group-hover:-translate-y-1" />
          <p className="-my-1 text-xs md:text-lg font-semibold tracking-wider uppercase">
            Back to
          </p>
          <p className="m-0 text-xs md:text-lg font-semibold tracking-wider uppercase">
            top
          </p>
        </m.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
