"use client";

import Image from "next/image";

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
    <section className="relative w-full flex justify-center py-24 bg-[#f0f0f0]">
      <div className="
        max-w-6xl w-full 
        flex flex-col-reverse md:flex-row
        justify-center items-start
        gap-10 px-6 relative
      ">
        <div className="flex flex-col relative pl-[77px] md:pl-32 w-full md:w-auto">
          <div className="absolute top-5 left-0 w-[120px] h-[92%] z-50 md:hidden">
            <Image
              loading="eager"
              width={180}
              height={180}
              src="/images/home/testimony/astronaut.png"
              className="h-full w-full opacity-90"
              alt=""
            />
          </div>

          <div className="absolute top-5 left-0 w-50 h-[95%] hidden md:block z-50">
            <Image
              loading="eager"
              width={100}
              height={100}
              src="/images/home/testimony/astronaut.png"
              className="h-full w-full opacity-90"
              alt=""
            />
          </div>

          <div
            className="
              w-[249px] md:w-[539px]
              bg-white rounded-3xl p-8
              shadow-[0_60px_80px_-20px_rgba(0,0,0,0.20)]
              h-[500px] md:h-[687px]
              overflow-y-auto card-scroll
              relative
              pr-5
              z-10
            "
          >
            {cards.map((c, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex flex-col items-center pr-4 mb-4 md:mb-0">
                    <img
                      src={c.profileImg}
                      className="w-45 h-45 md:w-48 md:h-48 rounded-full"
                      alt=""
                    />
                    <div className="text-red-notch text-2xl md:text-3xl mb-2">
                      ★★★★★
                    </div>
                  </div>

                  <div className="flex-1 md:pl-4">
                    <img
                      src={c.brandImg}
                      className="w-16 md:w-20 opacity-90 ml-auto"
                      alt=""
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
        
        <div className="flex flex-col justify-center my-auto text-center md:text-left w-full md:w-auto">
          <h2 className="text-5xl md:text-8xl font-extrabold text-red-notch leading-tight">
            COSMIC
          </h2>
          <h2 className="text-4xl md:text-7xl font-extrabold text-red-notch leading-tight">
            Bonds
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Testimoni