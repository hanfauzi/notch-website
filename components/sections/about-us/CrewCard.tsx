"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

interface CrewCardCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
}

const CrewCard: React.FC<CrewCardCardProps> = ({
  image,
  name,
  title,
  description,
}) => {
  return (
    <motion.div
      className={`relative w-80 pt-36`}
      initial="initial"
      whileHover="hover"
    >
      <div className="w-[50%] absolute left-1/2 -translate-x-1/2 top-0 h-72 overflow-hidden transform">
        <Image
          src={image}
          width={400}
          height={200}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        initial={{ height: 322 }}
        whileHover={{ height: 460 }}
        whileTap={{ height: 460 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ originY: 0 }}
        className="select-none [webkit-touch-callout:none] bg-white h-[322px] pt-40 rounded-xl overflow-hidden shadow-xl p-6 "
      >
        <h2 className="text-red-900 text-center font-bold text-xl">{name}</h2>
        <p className="text-red-800 text-center text-lg mb-7">{title}</p>
        <p className="text-red-800 text-sm">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default CrewCard