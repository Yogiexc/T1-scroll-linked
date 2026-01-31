"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const awards = [
    { title: "WORLDS 2013", img: "https://placehold.co/600x800/101010/EA0A2A?text=2013" },
    { title: "WORLDS 2015", img: "https://placehold.co/600x800/101010/EA0A2A?text=2015" },
    { title: "WORLDS 2016", img: "https://placehold.co/600x800/101010/EA0A2A?text=2016" },
    { title: "WORLDS 2023", img: "https://placehold.co/600x800/101010/EA0A2A?text=2023" },
    { title: "LCK 2022", img: "https://placehold.co/600x800/101010/EA0A2A?text=LCK+2022" },
    { title: "MSI 2017", img: "https://placehold.co/600x800/101010/EA0A2A?text=MSI+2017" },
];

export const AwardsSection = () => {
    return (
        <section className="py-40 bg-black text-white relative overflow-hidden">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-8xl font-bebas">TROPHY CASE</h2>
                <p className="font-manrope opacity-60">A legacy written in gold</p>
            </div>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="w-full py-10"
            >
                {awards.map((award, i) => (
                    <SwiperSlide key={i} className="!w-[300px] md:!w-[400px] !h-[500px] bg-neutral-900 border border-white/10 rounded-lg overflow-hidden relative group">
                        <img src={award.img} alt={award.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                            <h3 className="text-4xl font-bebas">{award.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
