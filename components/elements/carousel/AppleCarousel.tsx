"use client";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import Link from "next/link";
import { childAppleCarousel, parentAppleCarousel } from "@/animations/Carousel";

interface DataInterface {
    id: string;
    SrcImageCarousel: StaticImageData;
    title: string;
    carouselDescription: string;
}

interface AppleCarouselProps {
    data: DataInterface[];
}

const AppleCarousel: React.FC<AppleCarouselProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLElement | null)[]>([]);

    // desktop view
    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateViewportMatch = () => {
            setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
        };

        updateViewportMatch();
        window.addEventListener("resize", updateViewportMatch);

        return () => {
            window.removeEventListener("resize", updateViewportMatch);
        };
    }, []);

    // (Mobile/Non-Desktop) view
    useEffect(() => {
        if (isDesktop) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(
                            entry.target.getAttribute("data-index") || "0",
                            10
                        );
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: carouselRef.current,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        itemRefs.current.forEach((item) => {
            if (item) {
                observer.observe(item);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [isDesktop]);

    const handleDesktopActivate = useCallback(
        (index: number) => {
            if (isDesktop) {
                setActiveIndex(index);
            }
        },
        [isDesktop]
    );

    return (
        <AnimatePresence>
            <div
                key={"applecarousel"}
                ref={carouselRef}
                className="w-full overflow-x-scroll snap-x snap-mandatory hide-scrollbar"
                role="list"
            >
                {/* CAROUSEL WRAPPER */}
                <m.div
                    initial="hidden"
                    animate="show"
                    variants={parentAppleCarousel}
                    className="flex items-end h-[450px] sm:h-[550px] overflow-y-hidden hide-scrollbar lg:h-[650px]"
                >
                    {data.map((item, index) => {
                        const isActive = index === activeIndex;
                        const titleId = `project-slide-${index}-title`;
                        const descriptionId = `project-slide-${index}-description`;

                        return (
                            <m.article
                                id="carousel"
                                key={index}
                                ref={(el) => {
                                    itemRefs.current[index] = el;
                                }}
                                data-index={index}
                                onClick={() => handleDesktopActivate(index)}
                                onMouseEnter={() => handleDesktopActivate(index)}
                                onFocus={() => handleDesktopActivate(index)}
                                variants={childAppleCarousel}
                                tabIndex={0}
                                role="listitem"
                                aria-current={isActive ? "true" : undefined}
                                aria-labelledby={`${titleId} ${descriptionId}`}
                                className={`
                                    shrink-0
                                    relative group snap-start
                                    mx-1 w-[80%] sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[25%] 
                                    ${
                                        isActive
                                            ? "xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-[60%] h-[450px] sm:h-[550px] lg:h-[650px]"
                                            : ""
                                    }
                                    xl:hover:w-[30%] lg:hover:w-[40%] md:hover:w-[50%] sm:hover:w-[60%]
                                    h-[400px] sm:h-[500px] lg:h-[600px]
                                    hover:h-[450px] sm:hover:h-[550px] lg:hover:h-[650px]
                                    duration-300
                                `}
                            >
                                <Image
                                    src={item.SrcImageCarousel}
                                    alt={item.title}
                                    priority={index === 0}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    fill
                                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 30vw"
                                    className={`
                                        object-cover
                                        duration-300
                                        rounded-xl
                                        ${
                                            isActive
                                                ? "grayscale-0 brightness-100"
                                                : "grayscale brightness-60"
                                        }
                                        group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-100
                                    `}
                                />

                                {/* Overlay */}
                                <div
                                    className={`
                                        absolute inset-0 bg-linear-to-t from-black/80 to-transparent p-6
                                        flex flex-col justify-end
                                        transition-opacity duration-300
                                        ${
                                            isActive
                                                ? "opacity-100"
                                                : "opacity-0 group-hover:opacity-100"
                                        }
                                        text-white rounded-xl
                                    `}
                                    aria-live={isActive ? "polite" : "off"}
                                >
                                    <h3 id={titleId} className="text-xl font-bold mb-2">
                                        {item.title}
                                    </h3>
                                    <p id={descriptionId} className="text-sm mb-4">
                                        {item.carouselDescription}
                                    </p>
                                    <Link
                                        href={`/projects/${item.id}`}
                                        aria-label={`View ${item.title} project details`}
                                        aria-describedby={`${titleId} ${descriptionId}`}
                                        className="text-white text-sm font-semibold border-b border-white w-fit pb-1 hover:border-red-500 hover:text-red-notch transition-colors"
                                    >
                                        VIEW PROJECT →
                                    </Link>
                                </div>
                            </m.article>
                        );
                    })}
                </m.div>
            </div>
        </AnimatePresence>
    );
};

export default AppleCarousel;