import Image from "next/image";
import React from "react";

interface CrewCardCardProps {
  image: string;
  name: string;
  index: number;
  title: string;
  description: string;
}

const CrewCard: React.FC<CrewCardCardProps> = ({
  image,
  name,
  index,
  title,
  description,
}) => {

  function expandingCard() {
      const card = document.getElementById(`crew-card${index}`);
      if (card) {
          const isExpanded = card.classList.contains("max-h-screen");
          if (isExpanded) {
              card.classList.remove("max-h-screen");
          } else {
              card.classList.add("max-h-screen");
          }
      }
  }

  return (
    <>
      <div className="w-60 h-60 rounded-full absolute left-1/2 -translate-x-1/2 top-0 overflow-hidden transform">
        <Image
          src={image}
          width={400}
          height={200}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div
          id={`crew-card${index}`}
          onClick={() => expandingCard()}
          className="select-none [webkit-touch-callout:none] hover:max-h-screen max-h-[322px] duration-350 transition-all ease-in-out bg-white h-auto pt-40 rounded-xl overflow-hidden shadow-xl p-6"
      >
          <h2 className="text-red-900 text-center font-bold text-xl xl:text-3xl">{name}</h2>
          <p className="text-red-800 text-center text-lg xl:text-2xl mb-7">{title}</p>
          <p className="text-red-800 text-center text-sm xl:text-base">{description}</p>
      </div>
    </>
  );
};

export default CrewCard