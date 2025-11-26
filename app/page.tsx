import LandingPage from "@/components/sections/home/LandingPage";
import Portfolio from "@/components/sections/home/Portfolio";
import Testimoni from "@/components/sections/home/Testimoni";

export default function Home() {
  return (
    <main className="w-full bg-[#2e0102] text-white">
      <LandingPage />
      <Portfolio />
      <Testimoni />
    </main>
  );
}
