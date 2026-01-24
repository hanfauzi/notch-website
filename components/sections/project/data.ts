import astro from "@/public/images/home/portofolio/astro.png";
import ihh from "@/public/images/home/portofolio/ihh.png";
import konidinCarousel from "@/public/images/projects/konidin/nobrndsXkonidin.webp";
// import konidinHero from "@/public/images/projects/konidin/shoes-nobrndsxkonidin-landscape.webp";
import unicef from "@/public/images/home/portofolio/unicef.png";
import wow from "@/public/images/home/portofolio/wow-spageti.png";
import { StaticImageData } from "next/image";

export interface ProjectInterface {
    id: string;
    SrcImageCarousel: StaticImageData;
    baseService: string;
    SrcImageHero: StaticImageData;
    title: string;
    carouselDescription: string;
    campaignName: string;
    detailDescription: Array<string>;
    detailImages: Array<string>;
    challenge: string;
    solution: string;
    theResult: string;
}

export const allProjects: ProjectInterface[] = [
    {
        id: "as-cac-342",
        SrcImageCarousel: konidinCarousel,
        SrcImageHero: konidinCarousel,
        baseService: "Brand Collaboration",
        title: "NOBRNDS x Konidin",
        carouselDescription: "Revitalizing a classic brand for a new generation.",
        campaignName: `<div className="w-full text-center flex flex-col justify-start items-center pt-8 md:pt-20">
                            <div>
                                <h2 className="w-full text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold -rotate-3 mb-3">Unstopable Step!</h2>
                                <h3 className="w-ful text-end -mt-1 px-3 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl my-1 text-xs sm:text-xl md:text-2xl">
                                    Keep Movin&apos; Past All The Limits
                                </h3>
                            </div>
                        </div>`,
        detailDescription: ["Life is full of challenges, from childhood to adulthood, and we always find our own ways to overcome them. <b>we keep moving forward</b/>, and those experiences become lasting memories. Kondin x Nobrnds captures all these stories and memories in every pair of shoes, <b>symbolizing resilience and the journey through life.</b>"],
        detailImages: [
            "/images/projects/konidin/konidin1.webp",
            "/images/projects/konidin/konidin2.webp",
            "/images/projects/konidin/nobrndsXkonidin.webp",
            "/images/projects/konidin/konidin4.webp"
        ],
        challenge: "Bridging two distinct categories, pharmaceutical (Konidin) and lifestyle fashion (NoBrands), while keeping the collaboration relevant, relatable, and sales-driven without diluting each brand&apos;s identity. The challenge was to merge functional and emotional values into one authentic campaign.",
        solution: "Through the theme <b>&quot;Unstoppable Step! Keep Movin&apos; Past All the Limits,&quot;</b> the collaboration positioned both brands as symbols of <b>resilience and progress.</b> The message was amplified through <b>digital content, third-party collaborations, and interactive activities</b> designed to <b>spark curiosity, encourage participation, and drive engagement</b> across diverse audience segments.",
        theResult: `<div className="w-full py-2 sm:py-4 md:py-6 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12">
                        <div className="flex flex-col lg:flex-row items-stretch max-w-7xl mx-auto">

                        <div className="md:hidden w-full h-px bg-white my-2"></div>

                        <div className="flex-1 py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8">
                            <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-15 text-center">
                            High Awareness & Reach
                            </h3>
                            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-left">
                            <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                                <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                                469
                                </div>
                                <div className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-normal md:font-light leading-tight">
                                Total <span className="md:hidden">mentions</span>
                                <p className="hidden md:block">mentions</p>
                                </div>
                            </div>

                            <div className="flex lg:flex-col xl:flex-row items-end lg:items-start xl:items-end gap-2">
                                <div className="text-white flex flex-col -mb-2">
                                <span className="text-[10px] sm:text-xs md:text-lg font-light">Reach of</span>
                                <span className="font-semibold text-xl sm:text-3xl md:text-5xl lg:text-6xl">3.5M+</span>
                                </div>
                                <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-normal md:font-light">
                                driven mostly by social media (3.2M)
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="hidden md:block w-1 bg-white mx-2 lg:mx-4"></div>
                        <div className="md:hidden w-full h-px bg-white my-4"></div>

                        <div className="flex-1 py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8">
                            <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-center">
                            Positive Sentiment & Engagement
                            </h3>

                            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-left">
                            <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                                <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                                196
                                </div>
                                <div className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-normal md:font-light leading-tight">
                                Positive <span className="md:hidden">mentions</span>
                                <p className="hidden md:block">mentions</p>
                                </div>
                            </div>

                            <div className="">
                                <div className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-normal md:font-light">
                                and <b>strong social media</b> reactions
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="hidden md:block w-1 bg-white mx-2 lg:mx-4"></div>
                        <div className="md:hidden w-full h-px bg-white my-4"></div>

                        <div className="flex-1 py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8">
                            <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-15 text-center">
                            Exceeded Campaign Targets
                            </h3>

                            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-left">
                            <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                                <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                                103%
                                </div>
                                <div className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-normal md:font-light leading-tight">
                                Total <span className="md:hidden">mentions</span>
                                <p className="hidden md:block">mentions</p>
                                </div>
                            </div>

                            <div className="flex items-end gap-3 sm:gap-4 md:gap-5">
                                <div className="text-white text-4xl -mb-4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                                127
                                </div>
                                <div className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-normal md:font-light leading-tight">
                                New followers
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>`
    },
    {
        id: "as-cac-143",
        SrcImageCarousel: ihh,
        SrcImageHero: konidinCarousel,
        baseService: "Digital Development",
        title: "IHH Healthcare",
        carouselDescription: "Digital transformation for enhanced patient services.",
        campaignName: ``,
        detailDescription: ["Handled SEO driven content for IHH Healthcare, one of the world's largest private healthcare groups to strengthen hospital visibility and drive localized promotion. Strategy centered on competitor keyword targeting, customized by brand, branch, and geographic location."],
        detailImages: [
            "/images/projects/IHH/ihh1.webp",
            "/images/projects/IHH/ihh2.webp",
            "/images/projects/IHH/ihh3.webp",
            "/images/projects/IHH/ihh4.webp"
        ],
        challenge: "Building awareness and driving high-quality traffic from the Indonesian market for an international healthcare brand.",
        solution: "Executed a performance-driven digital strategy combining META Ads, Google Ads, and Programmatic Popup Ads, supported by ongoing SEO maintenance to strengthen organic visibility, traffic growth, and keyword performance.",
        theResult: `<div className="w-full py-2 sm:py-4 md:py-6 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12">
                        <div className="flex flex-col lg:flex-row items-stretch max-w-5xl mx-auto">

                            <div className="lg:hidden w-full h-px bg-white my-4"></div>

                            <div className="flex-1 py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8">
                                <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-center">
                                Organic Traffic
                                </h3>

                                <div className="space-y-4 sm:space-y-6 md:space-y-8 text-left">
                                    <div className="flex items-center lg:justify-center gap-3 sm:gap-4 md:gap-5">
                                        <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                                        192%
                                        </div>
                                        <div className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal md:font-light leading-tight">
                                        from the <span className="md:hidden">target</span>
                                        <p className="hidden md:block">target</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block w-1 bg-white mx-2 lg:mx-4"></div>
                            <div className="lg:hidden w-full h-px bg-white my-4"></div>

                            <div className="flex-1 py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8">
                                <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-center">
                                Keywords Ranking
                                </h3>

                                <div className="space-y-4 sm:space-y-6 md:space-y-8 text-left">
                                    <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                                        <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                                        33%
                                        </div>
                                        <div className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal md:font-light leading-tight">
                                        from the <span className="md:hidden">target</span>
                                        <p className="hidden md:block">target</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1 md:gap-2">
                                    <p className="text-white tracking-wide text-base md:text-lg lg:text-xl xl:text-lg font-normal md:font-light">
                                        <span className="font-extrabold">(5 Keywords from total 15 keywords)</span> which target
                                    </p>
                                    <p className="text-white tracking-wide text-base md:text-lg lg:text-xl xl:text-lg font-normal md:font-light">
                                        <span className="font-extrabold">Top 10 (for total 3 keywords)</span> already achieved
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
    },
    {
        id: "as-cac-684",
        SrcImageCarousel: astro,
        SrcImageHero: konidinCarousel,
        baseService: "Social Media Maintenance",
        title: "Astro E-Commerce",
        carouselDescription: "Creating a seamless shopping experience for modern consumers.",
        campaignName: ``,
        detailDescription: ["Astro Goods is a whitelabel brand created by Astro Quick Commerce that offers a <b>wide range of product categories</b> to meet various consumer needs. <b>From everyday food items to baby products and even a poo-tion spray, Astro Goods has something for everyone.</b>","We create a comprehensive content and visual service to engage audience and potential users and encourage them to make purchases through the Astro apps or e-commerce account."],
        detailImages: [
            "/images/projects/AstroGoods/astro1.webp",
            "/images/projects/AstroGoods/astro2.webp",
            "/images/projects/AstroGoods/astro3.webp",
            "/images/projects/AstroGoods/astro4.webp"
        ],
        challenge: "Astro Goods needs to increase their attractiveness and creativity in digital to be the consumer's 'Top of Mind' when they need quality yet affordable prices product.",
        solution: "Astro Goods focuses on making “Always Good” more relatable through functional storytelling, community-driven content, and engaging product launch experiences, supported by credible third parties to build stronger awareness and top-of-mind presence in digital.",
        theResult: ``
    },
    {
        id: "as-cac-198",
        SrcImageCarousel: wow,
        SrcImageHero: konidinCarousel,
        baseService: "Activation",
        title: "WOW Spageti",
        carouselDescription: "Creating a culinary experience like no other.",
        campaignName: ``,
        detailDescription: ["On March 2024, WOW Spageti is launching an exciting new innovation <b>WOW Spageti Aglio e Olio.</b> This new variant <b>brings restaurant quality deliciousness to your table,</b> a savory and spicy kick with authentic Italian garlic, all ready <b>in just 3 minutes.</b> It's a true WOW experience for spaghetti lovers. The launch of the new Aglio e Olio flavor includes a full-scale execution, from product development to <b>KOL and buzzer activation.</b>"],
        detailImages: [
            "/images/projects/wowSpageti/wow1.webp",
            "/images/projects/wowSpageti/wow2.webp",
            "/images/projects/wowSpageti/wow3.webp",
            "/images/projects/wowSpageti/wow4.webp"
        ],
        challenge: "<b>Introduce WOW Spageti&apos;s new Aglio Olio variant to a young audience,</b> making this Italian-flavored spaghetti feel relevant, appealing, and accessible, without losing the brand&apos;s fun and &quot;WOW moment&quot; character",
        solution: "WOW Spageti partnered with TikTok creators <b>to create a playful, viral debate around &quot;How Do You Pronounce Aglio Olio?&quot; and highlighted the product&apos;s key strengths</b> (authentic Italian flavor, bold taste, and easy 3-minute preparation)",
        theResult: `<div className="w-full py-2 sm:py-6 md:py-8 lg:py-12 px-4 sm:px-8 md:px-12 lg:px-16">
                        <div className="flex flex-col lg:flex-row items-stretch max-w-6xl xl:max-w-7xl mx-auto">

                        <div className="lg:hidden h-1 bg-white my-2"></div>

                        <div className="flex-1 px-4 sm:px-6 md:px-8 py-6 md:py-8">
                            <h3 className="text-white text-lg md:text-2xl font-semibold mb-12 text-center lg:text-end">
                            Massive Reach & Awareness
                            </h3>

                            <div className="flex flex-col gap-6 text-start lg:text-end">
                            <div>
                                <p className="text-white lg:text-end font-bold text-5xl lg:text-6xl xl:text-7xl leading-none">
                                79,134,880
                                </p>
                                <p className="text-white text-base xl:text-[22px] font-normal mt-2">
                                <b>total views </b>from 9 KOL posts on TikTok
                                </p>
                            </div>

                            <div className="flex items-center gap-3 lg:self-end">
                                <span className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl leading-none">
                                680.39%
                                </span>
                                <span className="text-white text-start text-xs sm:text-sm md:text-base xl:text-xl font-normal">
                                above target (KPI 11,630,700)
                                </span>
                            </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex w-1 bg-white mx-4 lg:mx-6"></div>
                        <div className="lg:hidden h-1 bg-white my-6"></div>

                        <div className="flex-1 px-4 sm:px-6 md:px-8 py-6 md:py-8">
                            <h3 className="text-white text-lg md:text-xl xl:text-2xl mb-12 font-semibold text-center lg:text-start">
                            Strong Engagement & Efficiency
                            </h3>

                            <div className="flex flex-col gap-6 text-left">
                            <div className="flex items-center gap-3">
                                <span className="text-white font-bold text-5xl lg:text-6xl xl:text-7xl leading-none">
                                1,431,727
                                </span>
                                <span className="text-white text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide">
                                total engagement
                                </span>
                            </div>

                            <p className="text-white text-base lg:text-xl font-normal leading-relaxed">
                                with an exceptional
                                <span className="font-semibold">Rp11 CPV</span> and
                                <span className="font-semibold">
                                47.70% total 6s view rate.
                                </span>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>`,
    },
    {
        id: "as-cac-625",
        SrcImageCarousel: unicef,
        SrcImageHero: konidinCarousel,
        baseService: "Campaign",
        title: "UNICEF",
        carouselDescription: "Inspiring donations for children in need.",
        campaignName: `<h2 className="w-full text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pt-8 md:pt-20">
                            Waktu Indonesia Donasi (WID)
                        </h2>`,
        detailDescription: ["Launched the <b>Waktu Indonesia Donasi</b> campaign to <b>inspire potential donors to support children in need. The campaign leverages  the popularity of <b>Waktu Indonesia Belanja</b>, an e-commerce platform campaign. Both initiatives are designed to capture audience interest through compelling messages and visuals, encouraging them to donate and contribute to a meaningful cause."],
        detailImages: [
            "/images/projects/unicef/unicef1.webp",
            "/images/projects/unicef/unicef2.webp",
            "/images/projects/unicef/unicef3.webp",
            "/images/projects/unicef/unicef4.webp"
        ],
        challenge: "Donation initiatives often struggle to attract attention, especially when audiences are more focused on commercial e-commerce events",
        solution: "Launch Waktu Indonesia Donasi by tapping into the popularity of Waktu Indonesia Belanja, instantly gaining relevance and visibility.",
        theResult: `<div className="py-2 md:py-0 w-full flex flex-col text-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 px-4 sm:px-6 md:px-8 lg:px-12">
                        <p className="w-full font-semibold sm:font-bold text-white text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">Waktu Indonesia Donasi campaign reached</p>
                        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                            <span className="font-bold text-2xl md:text-4xl lg:text-6xl xl:text-7xl">Rp43,805,000</span> donations
                        </p>
                        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                            out of <span className="font-bold text-2xl md:text-4xl lg:text-6xl xl:text-7xl">Rp3,000,000</span>
                        </p>
                    </div>`
    },
];


export const otherProjects = [
    {
        title: "Amidis",
        images : [
            { src: "/images/projects/amidis/amidis1.webp" },
            { src: "/images/projects/amidis/amidis2.webp" },
            { src: "/images/projects/amidis/amidis3.webp" },
            { src: "/images/projects/amidis/amidis4.webp" },
        ]
    },
    {
        title: "FresCo",
        images : [
            { src: "/images/projects/fresCo/fresCo1.webp" },
            { src: "/images/projects/fresCo/fresCo2.webp" },
            { src: "/images/projects/fresCo/fresCo3.webp" },
            { src: "/images/projects/fresCo/fresCo4.webp" },
        ]
    },
    {
        title: "Paramex",
        images : [
            { src: "/images/projects/paramex/paramex1.webp" },
            { src: "/images/projects/paramex/paramex2.webp" },
            { src: "/images/projects/paramex/paramex3.webp" },
            { src: "/images/projects/paramex/paramex4.webp" },
        ]
    },
    {
        title: "Hada Angin",
        images : [
            { src: "/images/projects/hadaAngin/hadaAngin1.webp" },
            { src: "/images/projects/hadaAngin/hadaAngin2.webp" },
            { src: "/images/projects/hadaAngin/hadaAngin3.webp" },
            { src: "/images/projects/hadaAngin/hadaAngin4.webp" },
        ]
    }
];