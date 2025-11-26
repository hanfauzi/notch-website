"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';


import CrewCard from "./CrewCard";

const crews = [
  {
    id: 1,
    name: "Ress Westhi Constantia",
    title: "Managing Director",
    description:
      "From early missions in BTL to charting ATL campaigns, the path led to a full digital orbit in 2013. Over 11 years, built strong client partnerships that fuel growth, including a 30% boost in annual renewals. Strategy and trust remain the core of every landing.",
    image: "/images/home/portofolio/ihh.png",
  },
  {
    id: 2,
    name: "Astuti Puji Mayangsasati",
    title: "Senior Account Manager",
    description:
      "Launched into digital marketing in 2012, managing campaigns across banking, telco, FMCG, and more. Known for precise execution and steady leadership, guiding both clients and crew toward new brand horizons.",
    image: "/images/home/portofolio/ihh.png",
  },
  {
    id: 3,
    name: "Antonio Sompotan",
    title: "Creative Group Head",
    description:
      "Sparked by creative curiosity, launched with passion, and now expanding through every bold idea. Since 2010, his path has evolved from graphic design into commanding creative leadership. With a portfolio orbiting brands like Telkomsel, XL, and Nabati, each brief is a new launchpad, fueling craft and keeping the creative engine lit across galaxies of possibility.",
    image: "/images/home/portofolio/ihh.png",
  },
  {
    id: 4,
    name: "Budi Prasetyo",
    title: "Head of Content",
    description:
      "From crafting truthful stories as a journalist to shaping digital narratives, Tyo has spent a decade turning insight into impact. With experience across newsrooms, agencies, and brands, he’s led strategies, managed production, and built content teams that deliver with harmony and purpose. Now at Notch Digital, he guides ideas in steady orbit, connecting every effort into one clear constellation.",
    image: "/images/home/portofolio/ihh.png",
  },
  {
    id: 5,
    name: "Hilda Safitri Thaib",
    title: "Senior Community & Production",
    description:
      "From starting brand side to thriving in the agency orbit, every phase became a launchpad for growth. With nearly 5 years in digital, leading KOLs, vendors, and production, she brings warmth, purpose, and precision to every campaign. A steady hand in the crew, building connections that truly land.",
    image: "/images/home/portofolio/ihh.png",
  },
  {
    id: 6,
    name: "Harry Maulana Azhari",
    title: "Head of Digital Media",
    description:
      "Every click, every campaign built with intention and insight. With 4+ years navigating digital media, from SEO to paid ads, he’s all about strategies that perform and content that connects. Always aiming higher, always making your brand shine where it matters most.",
    image: "/images/home/portofolio/ihh.png",
  },
];

const Crews = () => {
  return (
    <section className="w-full bg-[#67070f] px-6 pb-20 flex flex-col items-center">
      <div className="max-w-[1107px] pt-22 text-white/90 leading-relaxed mb-16">
        <p className="mb-6 text-lg md:text-2xl leading-6 md:leading-9 font-light">
          <span className="font-bold">Navigating</span> the digital universe with
          purpose and clarity, <span className="font-bold">observing</span> human
          constellations to find sparks that ignite new ideas.{" "}
          <span className="font-bold">Telling</span> stories that resonate and{" "}
          <span className="font-bold">connect</span> brands with their audiences
          like aligned orbits in harmony.
        </p>

        <p className="text-lg md:text-2xl leading-6 md:leading-9">
          Every beat becomes a pulse of high{" "}
          <span className="font-bold">energy</span>, daring to spin beyond gravity
          and creating new galaxies of creativity that shine with bold
          imagination.
        </p>
      </div>

      <div className="text-center max-w-3xl mb-12">
        <h2 className="text-white text-4xl md:text-7xl font-bold">
          Crew Behind{" "}
          <span className="font-light text-4xl md:text-6xl">the Mission</span>
        </h2>

        <p className="text-white/80 text-lg mt-4">
          Each crew member plays a part in{" "}
          <span className="font-bold">
            keeping the orbit steady and the ideas in motion
          </span>
          .
        </p>
      </div>

      <div className="w-full max-w-5xl md:max-w-xl lg:max-w-4xl xl:max-w-384 relative">
        <Swiper
          modules={[Pagination, Navigation]}
          navigation
          pagination={{ clickable: true }}
          loop
          centeredSlides
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
              pagination: { enabled: true, clickable: true },
            },
            640: {
              slidesPerView: 1,
              pagination: { enabled: false },
            },
            1024: {
              slidesPerView: 2,
              centeredSlides: false,
              pagination: { enabled: false },
            },
            1440: {
              slidesPerView: 3,
              centeredSlides: false,
              pagination: { enabled: false },
            },
          }}
        >
          {crews.map((crew) => (
            <SwiperSlide key={crew.id}>
              <div className="flex justify-center h-[670px]">
                <CrewCard
                  image={crew.image}
                  name={crew.name}
                  title={crew.title}
                  description={crew.description}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Crews;
