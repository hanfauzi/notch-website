
import { motion } from "motion/react";
import Image from "next/image";

interface ProjectCardProps {
  item: {
    id: string | number;
    img: string;
    brand: string;
    description: string;
  };
  i: number;
  aspect: string;
}

const ProjectCard = ({ item, i, aspect }: ProjectCardProps) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: i * 0.1 }}
    viewport={{ once: true }}
    className={`relative group overflow-hidden ${aspect}`}
  >
    <Image
      src={item.img}
      alt={item.brand}
      width={800}
      height={600}
      loading="lazy"
      className="
        absolute inset-0 w-full h-full object-cover 
        block transition-transform duration-500
        group-hover:scale-105 active:scale-105
      "
    />

    <div
      className="
        absolute inset-0
        opacity-0 translate-y-4
        transition-all duration-500
        bg-linear-to-t from-black/70 via-black/40 to-transparent
        flex items-end
        group-hover:opacity-100 group-hover:translate-y-0
        active:opacity-100 active:translate-y-0
      "
    >
      <div className="w-full text-left text-white pb-6 px-4">
        <p className="text-lg font-semibold">{item.brand}</p>
        <p className="text-sm mt-1">{item.description}</p>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard
