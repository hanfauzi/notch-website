import LandingPage from "@/components/sections/home/LandingPage";
import Portfolio from "@/components/sections/home/Portfolio";
import Testimoni from "@/components/sections/home/Testimoni";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Notch — We Explore Ideas to Lift Your Brand Up a Notch",
  description: "Notch is a digital creative agency exploring ideas that ignite growth. We map the orbit of brands, craft connections with emotional clarity, and build creative strategies that resonate across galaxies of audiences."
})

export default function Home() {
  return (
    <main className="w-full bg-[#2e0102] text-white">
      <LandingPage />
      <Portfolio />
      <Testimoni />
    </main>
  );
}
