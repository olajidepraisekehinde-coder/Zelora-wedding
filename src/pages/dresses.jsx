import hero3 from "../assets/dressed/hero3.jpeg";
import { BsArrowUpRight } from "react-icons/bs";
import { FiSearch, FiX } from "react-icons/fi";
import { useState } from "react";
import products from "../hooks/dresses";
import Civil from "../components/civil_dress";

export default function Dresses() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Bridal", "Aso Ebi", "Traditional", "Groom", "Couples", "Accessories"];

    const filteredProducts = products.filter((item) => {
        const q = searchQuery.trim().toLowerCase();
        const matchesQuery =
            !q ||
            item.name.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q) ||
            item.price.toLowerCase().includes(q);

        const matchesCategory =
            selectedCategory === "All" ||
            item.category.toLowerCase() === selectedCategory.toLowerCase();

        return matchesQuery && matchesCategory;
    });
    return (

        <div>
            <div className='relative'>
                <div className='inset-0 absolute bg-black/30'></div>

                <div>
                    <img
                        src={hero3}
                        alt="hero"
                        className='w-full h-screen object-cover' />

                    <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white/80'>
                        <h1 className='font-serif text-3xl md:text-6xl font-extrabold md:leading-16 capitalize px-4'>The Zelora Collection</h1>
                        <p className='py-4 text-white text-md max-w-xs'>Dresses designed for moments that deserve to be remembered.</p>

                    </div>

                </div>
            </div>

            <section className="py-12 bg-[#F4E3E7]/70">

                <div className="max-w-7xl mx-auto px-6 mb-20">

                    <div className="py-10">
                        <h1 className="text-5xl text-center font-serif italic uppercase font-extrabold">Our collections</h1>
                    </div>

                    <div className="pt-10">
                        <p className="text-xs tracking-[0.3em] uppercase text-gray-800 mb-5">
                            The Collection
                        </p>

                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                            <h1 className="max-w-xl font-serif text-3xl lg:text-4xl font-bold leading-tight text-[#820102]/50">
                                Dresses designed for <i>your moment.</i>
                            </h1>

                            <p className="max-w-sm text-sm leading-7 text-gray-600 italic">
                                Discover pieces created to celebrate elegance, individuality,
                                tradition and unforgettable moments.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6">

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                        {products.map((product, index) => {

                            let layout = "";

                            if (index % 6 === 0) {
                                layout = "md:col-span-6 md:row-span-2";
                            } else if (index % 6 === 1) {
                                layout = "md:col-span-5 lg:col-span-4";
                            } else if (index % 6 === 2) {
                                layout = "md:col-span-5";
                            } else if (index % 6 === 3) {
                                layout = "md:col-span-5 md:col-start-3";
                            } else if (index % 6 === 4) {
                                layout = "md:col-span-6";
                            } else {
                                layout = "md:col-span-5";
                            }

                            return (
                                <article
                                    key={product.id}
                                    className={`group relative overflow-hidden ${layout}`} >

                                    <div className="relative md:h-full min-h-107.5 lg:min-h-125 overflow-hidden rounded-4xl">

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />

                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                                            <div className="flex items-end justify-between text-white">

                                                <div>
                                                    <p className="text-[10px] tracking-[0.3em] uppercase mb-2 opacity-80">
                                                        {product.category}
                                                    </p>

                                                    <h2 className="font-serif text-2xl md:text-3xl">
                                                        {product.name}
                                                    </h2>
                                                </div>

                                                <span className="w-12 h-12 aspect-square border border-white/70 rounded-full flex items-center justify-center text-sm  bg-[#820102] transition-transform duration-500 group-hover:rotate-45">
                                                    <BsArrowUpRight />
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <div className="bg-[#520102] mt-12 shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)]">
                <div className="max-w-4xl mx-auto text-center px-6 py-24 ">

                    <p className="text-xs tracking-[0.35em] uppercase text-gray-500 font-extrabold mb-6">
                        Zelora
                    </p>

                    <h2 className="font-serif text-4xl md:text-6xl leading-tight text-[#F4B3B3]">
                        Every dress tells a story.
                        <br />
                        <i>Make yours unforgettable.</i>
                    </h2>
                </div>
            </div>

            <div className="bg-black/50 py-16">
                <div className="max-w-7xl mx-auto px-5 mb-10">
                    <h1 className="text-center text-4xl md:text-5xl font-serif italic font-extrabold uppercase py-6 text-[#F4B3B3]">
                        Dressing Categories
                    </h1>

                    <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                                        selectedCategory === cat
                                            ? "bg-[#820102] text-[#F4B3B3] border border-[#F4B3B3]/40 shadow-lg shadow-[#820102]/50"
                                            : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10"
                                    }`} >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <div className="relative flex-grow md:w-72">
                                <input
                                    type="text"
                                    id="dresses-search-input"
                                    name="dresses-search"
                                    autoComplete="off"
                                    placeholder="Search dresses, categories, price..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-black/40 border border-white/20 rounded-full py-2.5 pl-10 pr-9 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#F4B3B3] focus:ring-1 focus:ring-[#F4B3B3] transition-all"
                                />
                                <FiSearch className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery("")}
                                        aria-label="Clear search"
                                        className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1 transition">
                                        <FiX className="text-xs" />
                                    </button>
                                )}
                            </div>

                            <span className="text-xs tracking-wider uppercase text-gray-400 whitespace-nowrap">
                                {filteredProducts.length} {filteredProducts.length === 1 ? "Item" : "Items"}
                            </span>
                        </div>
                    </div>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 px-4 rounded-3xl bg-white/[0.02] border border-white/10 max-w-md mx-auto my-8">
                        <p className="font-serif text-2xl text-white">No Dresses Found</p>
                        <p className="text-xs text-gray-400 mt-2">
                            No items matched your search query.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("All");
                            }}
                            className="mt-6 px-6 py-2.5 rounded-full bg-[#820102] text-[#F4B3B3] text-xs uppercase tracking-wider hover:bg-[#a10103] transition"
                        >
                            Reset Search
                        </button>
                    </div>
                ) : (
                    <div className="max-w-7xl m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
                        {filteredProducts.map((item) => (
                            <div
                                key={item.id}
                                className="group overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#F4B3B3]/60"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                                    <span className="absolute top-4 left-4 rounded-full bg-black/60 px-4 py-2 text-xs uppercase tracking-wider text-[#F4B3B3] backdrop-blur-md">
                                        {item.category}
                                    </span>

                                    <div className="absolute bottom-5 left-0 right-0 flex justify-center translate-y-16 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                        <button className="rounded-full bg-[#F4B3B3] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#820102] hover:bg-white transition">
                                            View Details
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4 group-hover:bg-white/30 backdrop:blur-5xl">
                                    <h3 className="font-serif text-xl text-white">
                                        {item.name}
                                    </h3>

                                    <div className="mt-3 flex items-center justify-between">
                                        <p className="text-sm text-[#F4B3B3] font-bold">
                                            {item.price}
                                        </p>

                                        <button className="text-xs uppercase tracking-wider text-white/50 hover:text-[#F4B3B3] transition">
                                            Shop Now →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="">
                <div className="bg-[#F4B3B3] shadow-2xl py-20 text-center space-y-10">
                    <p className="text-4xl md:md:text-5xl text-center font-serif italic text-white">Your Moment Deserves something Beautiful</p>
                    <button className="px-10 py-4 bg-[#820102] rounded-2xl text-black">Custom Order</button>
                </div>
            </div>

            <Civil/>
        </div>
    );
}


