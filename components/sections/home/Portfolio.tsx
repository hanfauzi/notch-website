import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "as-cac-143",
    brand: "IHH Healthcare",
    description:
      "Maintained SEO-optimized articles for a brand in the healthcare space, supporting hospital awareness and promotion",
    img: "/images/home/portofolio/ihh.png",
  },
  {
    id: "as-cac-625",
    brand: "UNICEF",
    description:
      "Launched campaign to inspire donations for children in need leveraging the momentum of the Waktu Indonesia Belanja e-commerce trend",
    img: "/images/home/portofolio/unicef.png",
  },
  {
    id: "as-cac-198",
    brand: "WOW Spageti",
    description:
      "Launched the new “Aglio e Olio” flavor with full-scale execution, from product development to KOL and buzzer activation",
    img: "/images/home/portofolio/wow-1.png",
  },
  {
    id: "as-cac-342",
    brand: "Konidin X Nobrands",
    description:
      "We crafted the campaign as a statement of fearless energy, built for those who move with intention and confidence",
    img: "/images/home/portofolio/konidin.jpg",
  },
  {
    id: "as-cac-684",
    brand: "Astro Goods",
    description:
      "We create content and visuals that engage audiences and drive purchases on Astro and e-commerce platforms",
    img: "/images/home/portofolio/astro-1.png",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-red-notch2 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-0 w-full">
        {projects.map((item, i) => (
          <div
            key={item.id}
            className={`
          md:col-span-2
          ${i === 3 ? "md:col-start-2" : ""}
        `}
          >
            <ProjectCard item={item} i={i} aspect="aspect-square" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
