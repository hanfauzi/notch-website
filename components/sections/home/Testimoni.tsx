"use client";

import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const cards = [
  {
    name: "Iman Suryadi",
    role: "Senior Community & Production Seller",
    profileImg: "/images/home/testimony/iman.jpeg",
    brandImg: "/images/home/testimony/iseller-logo.png",
    message: `“Result yang didapat sangat luar biasa. Didukung dengan team yang solid serta komunikasi yang baik membuat kerjasama ini menjadi maksimal. Recommended!”`
  },
  {
    name: "Wikan",
    role: "Digital Fundraising Team",
    profileImg: "/images/home/testimony/wikan.jpeg",
    brandImg: "/images/home/testimony/unicef-logo.png",
    message: `“Bekerja sama dengan Notch merupakan pengalaman yang sangat positif. Mereka bukan hanya digital agency yang profesional, tetapi juga mitra kolaboratif yang benar-benar peduli dengan kepuasan dan kesuksesan klien.
    `,
    message2: `Tim Notch selalu terbuka terhadap perkembangan teknologi digital terbaru dan cepat beradaptasi untuk memberikan solusi yang relevan dan efektif. Dengan dukungan sumber daya yang andal, berpengalaman, dan ahli di bidangnya, Notch membantu kami mencapai target dengan strategi yang tepat dan eksekusi yang solid.”`
  },
  {
    name: "Clavinda Rafetta",
    role: "Brand Manager",
    profileImg: "/images/home/testimony/clavinda.jpeg",
    brandImg: "/images/home/testimony/wow-spageti-logo.png",
    message: `“Pengalaman bekerja dengan Notch sungguh menyenangkan! Karena orang-orang yang
sangat helpful dan responsif sehingga sangat membantu Brand dalam eksekusi campaign.`,
    message2: `Selain itu mereka juga bisa diajak berdiskusi, memberikan ide-ide, bertukar pikiran, serta memberikan evaluasi setiap campaign yang dijalankan untuk mendapatkan hasil yang maksimal.”`
  }
];

const Testimoni = () => {
  return (
    <section className="relative w-full flex justify-center pt-7 pb-24 lg:py-24 bg-[#f0f0f0]">
      <div className="
        max-w-6xl w-full 
        flex flex-col-reverse lg:flex-row
        justify-center items-center
        gap-10 px-6 relative
      ">
        <div className="flex justify-center items-end relative w-auto">
          <div className="top-5 left-0 h-full z-40 md:w-40 lg:w-60 lg:-mr-3.5 pb-4 w-40">
            <Image
              loading="lazy"
              width={180}
              height={180}
              src="/images/home/testimony/astronaut.png"
              className="h-full w-full opacity-90"
              alt="Astronaut"
            />
          </div>

          <div
            className="
              w-[249px] md:w-[539px]
              bg-white rounded-3xl p-8
              shadow-[0_60px_80px_-20px_rgba(0,0,0,0.20)]
              h-[500px] md:h-[687px]
              overflow-y-auto card-scroll
              pr-5
              -ml-14  md:-ml-14 lg:-ml-18
              z-10
            "
          >
            {cards.map((c, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex flex-col items-center pr-4 mb-4 md:mb-0">
                    <Image
                      src={c.profileImg}
                      className="w-45 h-45 md:w-48 md:h-48 rounded-full"
                      alt={c.name}
                      loading="lazy"
                      width={192}
                      height={192}
                    />
                    <div className="text-red-notch text-2xl md:text-3xl mb-2">
                      ★★★★★
                    </div>
                  </div>

                  <div className="flex-1 md:pl-4">
                    <Image
                      src={c.brandImg}
                      loading="lazy"
                      width={80}
                      height={40}
                      className="w-16 md:w-20 opacity-90 ml-auto"
                      alt={c.brandImg}
                    />
                    <p className="font-semibold text-lg md:text-xl text-red-notch">
                      {c.name}
                    </p>
                    <p className="text-xs md:text-sm text-red-notch mb-2">
                      ({c.role})
                    </p>
                    <p className="text-red-notch text-xs md:text-sm whitespace-pre-line">
                      {c.message}
                    </p>
                  </div>
                </div>

                <p className="text-red-notch text-xs md:text-sm whitespace-pre-line mb-4">
                  {c.message2}
                </p>

                {i < cards.length - 1 && (
                  <div className="w-full h-[1.5px] bg-red-notch my-6" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col justify-center my-auto text-center lg:text-left w-full md:w-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold text-red-notch leading-tight">
            COSMIC
          </h2>
          <h2 className="text-4xl md:text-7xl font-extrabold text-red-notch leading-tight">
            Bonds
          </h2>
        </div>
      </div>
      <Link href="#top" className="absolute bottom-5 right-5 leading-none text-center flex flex-col items-center hover:-translate-y-2 duration-150">
        <MdKeyboardDoubleArrowUp className="text-4xl md:text-7xl text-red-notch" />
        <p className="text-red-notch -my-1 text-xs md:text-lg">Back to</p>
        <p className="text-red-notch m-0 text-xs md:text-lg">top</p>
      </Link>
    </section>
  );
}

export default Testimoni