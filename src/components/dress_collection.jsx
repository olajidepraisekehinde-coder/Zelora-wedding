import React from "react";
import { Carousel } from "flowbite-react";
import products from "../hooks/dresses";
import { BsArrowUpRight } from "react-icons/bs";

export default function Component() {
    return (
        <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
            {products.map((item) => (
                <Carousel key={item.id}>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            ))}
            {products.map((product) => (
                <div
                    key={product.id}
                    className="group relative h-full w-full overflow-hidden rounded-2xl md:rounded-3xl bg-black/40 border border-white/10 shadow-lg transition-all duration-500 hover:border-[#F4B3B3]/60 hover:shadow-2xl" >
                    <Carousel indicators={false} slide={false}>
                        <div className="relative h-full w-full">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                            <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-wider text-[#F4B3B3] backdrop-blur-md border border-white/10">
                                {product.category}
                            </span>
                            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                                <div>
                                    <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold line-clamp-1 group-hover:text-[#F4B3B3] transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#F4B3B3] font-bold mt-0.5">
                                        {product.price}
                                    </p>
                                </div>
                                <span className="w-8 h-8 rounded-full bg-[#820102] text-[#F4B3B3] flex items-center justify-center text-xs transition-transform duration-300 group-hover:rotate-45 shrink-0">
                                    <BsArrowUpRight />
                                </span>
                            </div>
                        </div>
                    </Carousel>
                </div>
            ))}
        </div>
    );
}