import Image from "next/image"
import CareerBg from '@/public/images/career/BgCareerHero.webp';
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Career at Notch — Join Our Creative Orbit",
  description: "Explore career opportunities at Notch. Join a creative crew of explorers shaping ideas, crafting stories, and navigating brands through digital galaxies. Full-time, freelance, and internship positions available.",
  url: "/careers"
})

const CareerPage = () => {
  return (
    <section className="relative w-full min-h-[200vh] overflow-hidden">
       <Image
          src={CareerBg}
          alt="Career Background Image"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
          placeholder="blur"
          className="object-cover object-top"
        />
    </section>
  )
}

export default CareerPage