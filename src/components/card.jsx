import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function Card() {
    return (
        <section className="relative overflow-hidden bg-[#F4B3B3]/50 py-24 md:py-32">

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="whitespace-nowrap font-serif text-[100px] font-bold uppercase tracking-tight text-[#820102]/5 md:text-[180px] lg:text-[240px]">
                    ZELORA
                </span>
            </div>

            <div className="relative mx-auto max-w-5xl px-6 text-center">

                <p className="mb-6 text-xs font-medium uppercase tracking-[0.5em] text-[#820102]">
                    Your moment. Your story.
                </p>

                <h2 className="mx-auto max-w-md font-serif text-5xl font-bold leading-[1.05] text-[#820102] md:text-4xl">
                    Your moment deserves Zelora.
                </h2>

                <div className="mx-auto my-10 h-px w-20 bg-[#820102]/40" />

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <Link
                        to="/collections"
                        className="group flex items-center rounded-4xl gap-3 bg-[#820102] px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#F4B3B3] transition duration-300 hover:bg-black">
                        Shop Collection

                        <FiArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"  />
                    </Link>

                    <Link
                        to="/custom-order"
                        className="group flex items-center rounded-4xl  gap-3 border border-[#820102] px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#820102] transition duration-300 hover:bg-[#820102] hover:text-[#F4B3B3]" >
                        Custom Order

                        <FiArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>

                </div>

                <div className="mt-16 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.35em] text-[#820102]/50">
                    <span className="h-px w-10 bg-[#820102]/30" />
                    Crafted for unforgettable moments
                    <span className="h-px w-10 bg-[#820102]/30" />
                </div>

            </div>
        </section>
    );
}