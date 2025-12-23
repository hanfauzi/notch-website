"use client";
import { useState } from "react";
import Image from "next/image";
import { otherProjects } from "./data";
import ImageModal from "@/components/elements/modal/ImageModal";

type typeSelectedImage = {
  title: string;
  index: number;
  images: { src: string };
}

const OtherProjects = () => {
  const [selectedImage, setSelectedImage] = useState<typeSelectedImage | null>(null);

  const openModal = (data: typeSelectedImage) => {
    setSelectedImage(data);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="w-full text-start">
      <h1 className="px-4 sm:px-7 md:px-14 font-semibold pt-5 sm:pt-8 md:pt-15 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
        Other Brands We&apos;ve Collaborated With
      </h1>

      {otherProjects.map(({ title, images }, idx) => (
        <div key={idx}>
          <h3 className="px-4 sm:px-7 md:px-14 pt-4 sm:pt-7 md:pt-14 sm:text-2xl md:text-4xl font-medium">
            {title}
          </h3>
          <div className="flex items-center px-2 md:px-0 overflow-x-scroll hide-scrollbar py-3 md:py-4 lg:py-5">
            {images.map(({ src }, index) => (
              <Image
                  key={index}
                  src={src}
                  alt={`${title} ${index + 1}`}
                  width={100}
                  height={100}
                  sizes="100"
                  className="relative w-1/2 sm:w-1/4 h-auto shrink-0 cursor-pointer active:scale-95 hover:scale-105 hover:rounded-2xl hover:shadow-3xl duration-300 overflow-hidden hover:z-10"
                  onClick={() => openModal({ title, index, images: { src } })}
              />
            ))}
          </div>
        </div>
      ))}

      {/* modal */}
      <ImageModal
        selectedImage={selectedImage}
        closeModal={closeModal}
      />
    </section>
  );
};

export default OtherProjects;
