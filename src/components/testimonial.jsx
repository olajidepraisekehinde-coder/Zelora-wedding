import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import wed8 from "../assets/dressed/wed8.jpg";
import img7 from "../assets/dressed/img7.jpg";
import img4 from "../assets/dressed/img4.jpg";
import { ArrowLeftIcon, ArrowRightIcon } from "flowbite-react";


const testimonials = [
    {
        id: 1,
        name: "Amara Okafor",
        role: "Bride",
        location: "Lagos, Nigeria",
        image: wed8,
        quote:
            "Zelora didn't just make my wedding dress. They understood the woman I wanted to become on my wedding day and brought that vision to life.",
    },

    {
        id: 2,
        name: "Daniel Adeyemi",
        role: "Groom",
        location: "Abuja, Nigeria",
        image: img7,
        quote:
            "From the first consultation to the final fitting, everything felt intentional. My outfit looked exactly how I imagined it, only better.",
    },

    {
        id: 3,
        name: "Chioma Eze",
        role: "Aso Ebi Client",
        location: "Port Harcourt, Nigeria",
        image: img4,
        quote:
            "What stood out to me was the attention to detail. Everyone kept asking where I got my outfit. Zelora made me feel incredibly special.",
    },
];


export default function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-[#F4E3E7]/70 py-24 lg:p-16">
            <h1 className="text-5xl uppercase font-extrabold font-serif text-center pb-16 text-[#820102] px-5 italic">Testimonial</h1>

            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-[#820102]">
                    Client Stories
                </p>
                <div className="mb-14 grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-6 px-3">
                    <div>

                        <h2 className="max-w-xl font-serif text-3xl lg:text-4xl font-bold leading-tight text-[#820102]/50">
                            Worn with confidence. Remembered forever.
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-7 text-black/50">
                        Every Zelora piece becomes part of someone's story.
                        Here's what our clients have to say about their
                        experience with us.
                    </p>

                </div>

                <Swiper
                    modules={[Autoplay, Navigation, EffectFade]}
                    effect="fade"
                    fadeEffect={{
                        crossFade: true,
                    }}
                    navigation={{
                        nextEl: ".testimonial-next",
                        prevEl: ".testimonial-prev",
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="testimonialSwiper">

                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>

                            <div className="max-w-6xl m-auto grid min-h-[520px] overflow-hidden rounded-[2rem] bg-[#820102] shadow-2xl md:grid-cols-2">

                                <div className="relative flex flex-col justify-between p-8 md:p-10 lg:p-16">

                                    <div className="relative z-10">

                                        <blockquote className="max-w-2xl font-serif text-2xl leading-relaxed text-white lg:text-3xl italic">
                                            {item.quote}
                                        </blockquote>

                                    </div>

                                    <div className="relative z-10 mt-12">

                                        <div className="mb-5 h-px w-16 bg-[#F4B3B3]" />

                                        <h3 className="font-serif text-xl text-white">
                                            {item.name}
                                        </h3>

                                        <div className="mt-2 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-[#F4B3B3]/80">
                                            <span>{item.role}</span>
                                            <span>{item.location}</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="relative min-h-[420px] lg:min-h-full">
                                    <div className="absolute inset-0 bg-black/50"></div>
                                    <img
                                        src={item.image}
                                        alt={`${item.name} wearing Zelora`}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-r from-[#820102] via-transparent to-transparent lg:from-[#820102]/80 lg:via-transparent" />

                                    <div className="absolute bottom-8 right-8 hidden rotate-180 [writing-mode:vertical-rl] lg:block">
                                        <span className="text-xs uppercase tracking-[0.4em] text-white/70">
                                            ZELORA CLIENT STORY
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>
                <div className="mt-8 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <button
                            className="testimonial-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#820102] text-[#820102] transition duration-300 hover:bg-[#820102] hover:text-[#F4B3B3]" aria-label="Previous testimonial">
                            <ArrowLeftIcon />
                        </button>

                        <button className="testimonial-next flex h-12 w-12 items-center justify-center rounded-full border border-[#820102] text-[#820102] transition duration-300 hover:bg-[#820102] hover:text-[#F4B3B3]" aria-label="Next testimonial">
                            <ArrowRightIcon />
                        </button>

                    </div>
                    <div className="hidden text-xs uppercase tracking-[0.3em] text-[#820102]/50 md:block">
                        Real Stories Real Moments
                    </div>

                </div>

            </div>

        </section>
    );
}