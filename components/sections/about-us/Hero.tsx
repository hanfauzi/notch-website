"use client";
import Image from "next/image";
import BackgroundImage from '@/public/images/about-us/about-us.png';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center">
      <Image
        src={BackgroundImage}
        alt="Home Bg Image"
        fill
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
        placeholder="blur"
        className="object-top"
      />
    </section>
  )
}

export default Hero