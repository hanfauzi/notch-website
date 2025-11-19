"use client";

import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    brand: "IHH Healthcare",
    description: "Maintained SEO-optimized articles for a brand in the healthcare space, supporting hospital awareness and promotion",
    img: "/images/home/portofolio/ihh.png",
  },
  {
    id: 2,
    brand: "UNICEF",
    description: "Launched campaign to inspire donations for children in need leveraging the momentum of the Waktu Indonesia Belanja e-commerce trend",
    img: "/images/home/portofolio/unicef.png",
  },
  {
    id: 3,
    brand: "WOW Spageti",
    description: "Launched the new “Aglio e Olio” flavor with full-scale execution, from product development to KOL and buzzer activation",
    img: "/images/home/portofolio/wow-spageti.png",
  },
  {
    id: 4,
    brand: "Konidin X Nobrands",
    description: "We crafted the campaign as a statement of fearless energy, built for those who move with intention and confidence",
    img: "/images/home/portofolio/konidin.jpg",
  },
  {
    id: 5,
    brand: "Astro Goods",
    description: "We create content and visuals that engage audiences and drive purchases on Astro and e-commerce platforms",
    img: "/images/home/portofolio/astro.png",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-[#5a0000] text-white pt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Successful Landings
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
            This portfolio shows how we’ve helped brands land by understanding
            their orbit, mapping the emotional terrain, and crafting ideas that
            connect with clarity and purpose.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
          {projects.slice(0, 3).map((item, i) =>
            <ProjectCard key={item.id} item={item} i={i} aspect="aspect-square" />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
          {projects.slice(3).map((item, i) =>
            <ProjectCard
              key={item.id}
              item={item}
              i={i + 3}
              aspect="aspect-video"
            />
          )}
        </div>
    </section>
  )
}

export default Portfolio