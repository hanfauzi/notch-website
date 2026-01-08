import Image from "next/image"
import CareerBg from '@/public/images/career/BgCareerHeroCrop.webp';
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Career at Notch — Join Our Creative Orbit",
  description: "Explore career opportunities at Notch. Join a creative crew of explorers shaping ideas, crafting stories, and navigating brands through digital galaxies. Full-time, freelance, and internship positions available.",
  url: "/careers"
})

const CareerPage = () => {
  return (
    <div className="bg-[#640000]">
      <section className="w-full">
        <Image
          src={CareerBg}
          alt="Career Background Image"
          priority
          sizes="100vw"
          className="w-full h-auto object-contain"
        />
      </section>

      <section className="w-full xl:max-w-[95%] -mt-3 sm:-mt-7 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 px-4 sm:px-7 md:px-14 lg:px-16">
        <p className="font-light text-sm sm:text-xl md:text-2xl lg:text-3xl">
          Join Notch and be part of an innovative team that is shaping the future
        </p>
        <p className="font-light text-sm sm:text-xl md:text-2xl lg:text-3xl">
          At Notch, we value creativity, collaboration, and growth. Explore exciting career opportunities and take your professional journey to the next level with us.
        </p>
      </section>

      {/* Coming Soon */}
      <section className="w-full min-h-[40vh] md:min-h-[70vh] px-4 sm:px-7 md:px-14 lg:px-16 flex justify-center items-center">
        <div className="w-full text-center text-white py-10">
          <p className="font-semibold sm:font-bold text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">Mission loading. New roles coming soon..</p>
        </div>
      </section>

    </div>
  )
}

export default CareerPage