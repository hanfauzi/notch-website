import BrandTrusted from "@/components/sections/home/BrandTrusted";
import Hero from "@/components/sections/home/Hero";
import Portfolio from "@/components/sections/home/Portfolio";
import ServiceStation from "@/components/sections/home/ServiceStation";
import Testimoni from "@/components/sections/home/Testimoni";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#8d161e] text-white">
      <Hero />
      <BrandTrusted />
      <ServiceStation />
      <Portfolio />
      <Testimoni />
    </main>
  );
}
