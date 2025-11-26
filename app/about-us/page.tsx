import { createMetadata } from "@/lib/seo"

export const metada = createMetadata({
  title: "About Notch — Navigating Brands Through Creative Orbits",
  description: "Notch is a digital agency built on exploration, clarity, and creative gravity. We navigate ideas, observe human truths, tell meaningful stories, and connect brands with audiences through strategic orbits that inspire growth.",
  url: "/about-us",
  type: "profile"
})

import Hero from "@/components/sections/about-us/Hero";
import Crews from "@/components/sections/about-us/Crews";

const AboutPage = () => {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Crews />
    </main>
  )
}

export default AboutPage