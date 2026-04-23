"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import CrewCard from "../../elements/card/CrewCard";
import { crews } from "./data";

const Crews = () => {
    const crewCount = crews.length;
    const isFewCrew = crewCount < 3;

  return (
    <section className="w-full bg-red-notch2 px-6 pb-20 flex flex-col items-center">
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
          navigation={crewCount > 1}
          pagination={{ clickable: true }}
          loop={crewCount > 3}
          centeredSlides={isFewCrew}
          spaceBetween={30}
          slidesPerView={Math.min(crewCount, 3)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
              pagination: { enabled: true, clickable: true },
            },
            640: {
              slidesPerView: Math.min(crewCount, 2),
              centeredSlides: crewCount < 2,
              pagination: { enabled: false },
            },
            1024: {
              slidesPerView: Math.min(crewCount, 2),
              centeredSlides: crewCount < 3,
              pagination: { enabled: false },
            },
            1440: {
              slidesPerView: Math.min(crewCount, 3),
              centeredSlides: false,
              pagination: { enabled: false },
            },
          }}
        >
          {crews.map((crew, index) => (
            <SwiperSlide key={crew.id}>
              <div className="flex justify-center h-[670px]">
                <div className={`relative w-90 pt-36`}>
                  <CrewCard
                    image={crew.image}
                    name={crew.name}
                    index={index}
                    title={crew.title}
                    description={crew.description}
                  />
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Crews;
