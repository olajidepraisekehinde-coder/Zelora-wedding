import React, { useState } from "react";
import { Link } from "react-router-dom";
import civilDresses from "../hooks/civil";
import {
    FiHeart,
    FiEye,
    FiArrowUpRight,
    FiX,
    FiCheck,
    FiFilter,
    FiShoppingBag,
    FiSearch,
} from "react-icons/fi";
import { BsHeartFill, BsStars } from "react-icons/bs";

const COLOR_MAP = {
    Wine: "#722F37",
    "Emerald Green": "#097969",
    "Royal Blue": "#4169E1",
    Champagne: "#E8D8C3",
    Burgundy: "#800020",
    Gold: "#D4AF37",
    Black: "#1F1F1F",
    "Dusty Rose": "#DCAE96",
    Purple: "#6A1B9A",
    Coral: "#FF6F61",
};

export default function Civil() {
    const [selectedMaterial, setSelectedMaterial] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [quickViewDress, setQuickViewDress] = useState(null);
    const [toastMessage, setToastMessage] = useState(null);

    const triggerToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => {
            setToastMessage(null);
        }, 3000);
    };

    const toggleFavorite = (e, dressId, dressName) => {
        e.stopPropagation();
        setFavorites((prev) => {
            const isFav = prev.includes(dressId);
            if (isFav) {
                triggerToast(`Removed "${dressName}" from wishlist`);
                return prev.filter((id) => id !== dressId);
            } else {
                triggerToast(`Added "${dressName}" to your wishlist ✨`);
                return [...prev, dressId];
            }
        });
    };

    const materialFilters = [
        { label: "All Silhouettes", value: "All" },
        { label: "Lace & Sequins", value: "Lace" },
        { label: "Satin Luxury", value: "Satin" },
        { label: "Crepe & Chiffon", value: "Flow" },
    ];

    const filteredDresses = civilDresses.filter((dress) => {
        const q = searchQuery.trim().toLowerCase();

        if (q) {
            const matchName = dress.name?.toLowerCase().includes(q);
            const matchColor = dress.color?.toLowerCase().includes(q);
            const matchMaterial = dress.material?.toLowerCase().includes(q);
            const matchDesc = dress.description?.toLowerCase().includes(q);
            const matchCategory = dress.category?.toLowerCase().includes(q);
            const matchPrice = dress.price?.toString().includes(q.replace(/[^0-9]/g, ""));
            const matchSizes = Array.isArray(dress.sizes) && dress.sizes.some((s) => s.toLowerCase() === q);
            const matchAvail = dress.availability?.toLowerCase().includes(q);

            const matchesSearch =
                matchName ||
                matchColor ||
                matchMaterial ||
                matchDesc ||
                matchCategory ||
                matchPrice ||
                matchSizes ||
                matchAvail;

            if (!matchesSearch) return false;
        }

        // Material category filter
        if (selectedMaterial === "All") return true;
        if (selectedMaterial === "Lace") {
            return dress.material?.toLowerCase().includes("lace");
        }
        if (selectedMaterial === "Satin") {
            return dress.material?.toLowerCase().includes("satin");
        }
        if (selectedMaterial === "Flow") {
            return (
                dress.material?.toLowerCase().includes("chiffon") ||
                dress.material?.toLowerCase().includes("crepe")
            );
        }
        return true;
    });

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#140306] via-[#0d0204] to-[#160408] text-[#F4B3B3] py-32 px-4 sm:px-6 lg:px-8">

            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#820102]/25 rounded-full blur-[140px]" />
            <div className="pointer-events-none absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#F4B3B3]/10 rounded-full blur-[160px]" />

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white capitalize">
                        Civil Ceremony{" "}
                        <span className="italic font-normal text-[#F4B3B3]">
                            Collection
                        </span>
                    </h1>

                    <p className="text-sm sm:text-base text-gray-300/85 leading-relaxed max-w-2xl mx-auto font-light">
                        Exquisitely structured gowns and tailored silhouettes designed for
                        intimate court vows, registry celebrations, and modern brides who
                        command timeless elegance.
                    </p>

                    <div className="pt-2 flex items-center justify-center gap-3">
                        <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#F4B3B3]/50" />
                        <span className="text-xs font-serif italic text-[#F4B3B3]/80">
                            Handcrafted in Lagos • Bespoke Tailoring
                        </span>
                        <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#F4B3B3]/50" />
                    </div>
                </div>

                {/* Brand Perks Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 border-b border-white/10 mb-12">
                    {[
                        { title: "Bespoke Made-to-Measure", desc: "Customized to your exact fit" },
                        { title: "French Lace & Satins", desc: "Hand-selected luxury textiles" },
                        { title: "Intimate Registry Ready", desc: "Crafted for courthouse vows" },
                        { title: "Nationwide Delivery", desc: "Express delivery across Nigeria" },
                    ].map((perk, i) => (
                        <div
                            key={i}
                            className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm text-center sm:text-left"
                        >
                            <p className="text-xs font-serif font-bold text-white tracking-wide">
                                {perk.title}
                            </p>
                            <p className="text-[11px] text-gray-400 mt-1">{perk.desc}</p>
                        </div>
                    ))}
                </div>

               
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {materialFilters.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setSelectedMaterial(tab.value)}
                                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${selectedMaterial === tab.value
                                        ? "bg-[#820102] text-[#F4B3B3] shadow-lg shadow-[#820102]/50 border border-[#F4B3B3]/40"
                                        : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5"
                                    }`} >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative flex-grow md:w-72">
                            <input
                                type="text"
                                id="civil-dress-search-input"
                                name="civil-search"
                                autoComplete="off"
                                placeholder="Search gown name, color, fabric, price..."
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
                                    className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1 transition" >
                                    <FiX className="text-xs" />
                                </button>
                            )}
                        </div>

                        <span className="text-xs tracking-wider uppercase text-gray-400 whitespace-nowrap">
                            {filteredDresses.length}{" "}
                            {filteredDresses.length === 1 ? "Gown" : "Gowns"}
                        </span>
                    </div>
                </div>

                {filteredDresses.length === 0 ? (
                    <div className="text-center py-24 rounded-3xl bg-white/[0.02] border border-white/10 max-w-lg mx-auto">
                        <p className="font-serif text-2xl text-white">No Gowns Found</p>
                        <p className="text-xs text-gray-400 mt-2">
                            Try adjusting your filter or search terms.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedMaterial("All");
                                setSearchQuery("");
                            }}
                            className="mt-6 px-6 py-2.5 rounded-full bg-[#820102] text-[#F4B3B3] text-xs uppercase tracking-wider hover:bg-[#a10103] transition" >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
                        {filteredDresses.map((dress) => {
                            const isFavorite = favorites.includes(dress.id);
                            const colorHex = COLOR_MAP[dress.color] || "#D4AF37";

                            return (
                                <article
                                    key={dress.id}
                                    className="group relative flex flex-col rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#F4B3B3]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(130,1,2,0.45)]"  >
                                     
                                    <div className="relative h-[420px] sm:h-[400px] lg:h-[430px] w-full overflow-hidden bg-black/40">
                                        <img
                                            src={dress.image}
                                            alt={dress.name}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0204] via-black/20 to-black/30 pointer-events-none" />

                                        
                                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                                            
                                            <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#F4B3B3] border border-white/10">
                                                {dress.material}
                                            </span>                                          
                                            <button
                                                onClick={(e) => toggleFavorite(e, dress.id, dress.name)}
                                                aria-label="Save to Wishlist"
                                                className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${isFavorite
                                                        ? "bg-[#820102] text-[#F4B3B3] border-[#F4B3B3]/50 scale-110"
                                                        : "bg-black/50 text-white/80 hover:text-white border-white/15 hover:bg-black/80"
                                                    }`} >
                                                {isFavorite ? (
                                                    <BsHeartFill className="text-sm" />
                                                ) : (
                                                    <FiHeart className="text-sm" />
                                                )}
                                            </button>
                                        </div>
                        
                                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                                           
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] text-gray-200 border border-white/10">
                                                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                                {dress.availability || "In Stock"}
                                            </span>

                                            <button
                                                onClick={() => setQuickViewDress(dress)}
                                                className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 rounded-full bg-[#F4B3B3] px-3.5 py-1.5 text-[11px] font-semibold text-[#820102] hover:bg-white transition-all duration-300 shadow-md" >
                                                <FiEye className="text-xs" />
                                                Quick View
                                            </button>
                                        </div>
                                    </div>

                                   
                                    <div className="p-6 flex flex-col justify-between flex-grow bg-black/70 backdrop-blur-md space-y-4">
                                        <div>
                                            
                                            <div className="flex items-center justify-between text-[11px] tracking-wider uppercase text-gray-400 mb-2">
                                                <span className="inline-flex items-center gap-1.5">
                                                    <span
                                                        className="h-2.5 w-2.5 rounded-full border border-white/30"
                                                        style={{ backgroundColor: colorHex }}
                                                    />
                                                    {dress.color}
                                                </span>
                                                <span>Civil Registry</span>
                                            </div>
                                           
                                            <h2
                                                onClick={() => setQuickViewDress(dress)}
                                                className="font-serif text-xl font-bold text-white hover:text-[#F4B3B3] transition-colors cursor-pointer line-clamp-1" >
                                                {dress.name}
                                            </h2>

                                           
                                            <p className="mt-1.5 text-xs text-gray-400 line-clamp-2 leading-relaxed">
                                                {dress.description}
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-center gap-1.5 pt-1">
                                            <span className="text-[10px] uppercase tracking-wider text-gray-400 mr-1">
                                                Sizes:
                                            </span>
                                            {dress.sizes &&
                                                dress.sizes.map((sz) => (
                                                    <span
                                                        key={sz}
                                                        className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 text-gray-300 bg-white/5"
                                                    >
                                                        {sz}
                                                    </span>
                                                ))}
                                        </div>

                                   
                                        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                                            <div>
                                                <span className="text-[10px] uppercase tracking-widest text-gray-400 block">
                                                    Price
                                                </span>
                                                <p className="font-serif text-xl font-bold text-[#F4B3B3]">
                                                    ₦{dress.price ? dress.price.toLocaleString() : "Contact"}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => setQuickViewDress(dress)}
                                                className="group/btn inline-flex items-center gap-2 rounded-full bg-[#820102] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F4B3B3] hover:bg-[#F4B3B3] hover:text-[#820102] transition-all duration-300 shadow-md hover:shadow-[#F4B3B3]/20" >
                                                <span>Details</span>
                                                <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}

               
                <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#820102]/60 via-[#520102]/80 to-[#140306] border border-[#F4B3B3]/30 p-8 sm:p-12 text-center md:text-left backdrop-blur-xl">
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2 bg-radial from-[#F4B3B3]/10 to-transparent blur-3xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl space-y-3">
                            <span className="text-xs uppercase tracking-[0.3em] text-[#F4B3B3] font-semibold">
                                Bespoke Service
                            </span>
                            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
                                Desire a bespoke civil gown tailored to your exact measurements?
                            </h3>
                            <p className="text-sm text-gray-300 font-light leading-relaxed">
                                Consult directly with our master couturiers for personalized
                                fabric selections, custom necklines, and made-to-measure bridal
                                perfection.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F4B3B3] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#820102] hover:bg-white transition duration-300 shadow-xl">
                                <span>Book Fitting</span>
                                <FiArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            
            {quickViewDress && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
                    onClick={() => setQuickViewDress(null)}>
                    <div
                        className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-[#140407] border border-[#F4B3B3]/40 shadow-2xl text-[#F4B3B3] animate-scaleUp"
                        onClick={(e) => e.stopPropagation()} >
                       
                        <button
                            onClick={() => setQuickViewDress(null)}
                            aria-label="Close dialog"
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#F4B3B3] hover:bg-black flex items-center justify-center transition" >
                            <FiX size={18} />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="relative h-72 md:h-[500px] w-full bg-black">
                                <img
                                    src={quickViewDress.image}
                                    alt={quickViewDress.name}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-transparent to-transparent md:hidden" />
                            </div>

                            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5 overflow-y-auto max-h-[500px]">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="rounded-full bg-[#820102]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#F4B3B3] border border-[#F4B3B3]/30">
                                            {quickViewDress.category || "Civil Collection"}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            • {quickViewDress.availability}
                                        </span>
                                    </div>

                                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                                        {quickViewDress.name}
                                    </h2>

                                    <p className="font-serif text-2xl font-bold text-[#F4B3B3] mt-2">
                                        ₦{quickViewDress.price?.toLocaleString()}
                                    </p>

                                    <div className="my-4 h-px w-full bg-white/10" />

                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                                        {quickViewDress.description}
                                    </p>

                                    {/* Specifications */}
                                    <div className="grid grid-cols-2 gap-3 mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs">
                                        <div>
                                            <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                                                Fabric & Material
                                            </span>
                                            <span className="text-white font-medium">
                                                {quickViewDress.material}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                                                Color Shade
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 text-white font-medium">
                                                <span
                                                    className="h-2 w-2 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            COLOR_MAP[quickViewDress.color] || "#D4AF37",
                                                    }}
                                                />
                                                {quickViewDress.color}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <span className="text-[11px] uppercase tracking-wider text-gray-400 block mb-2 font-medium">
                                            Available Ready-to-Wear Sizes:
                                        </span>
                                        <div className="flex items-center gap-2">
                                            {quickViewDress.sizes?.map((sz) => (
                                                <span
                                                    key={sz}
                                                    className="px-3 py-1 rounded-lg border border-white/20 bg-white/5 text-xs font-semibold text-white"
                                                >
                                                    {sz}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                                    <Link
                                        to="/contact"
                                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#820102] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F4B3B3] hover:bg-[#F4B3B3] hover:text-[#820102] transition-all duration-300 text-center"
                                        onClick={() => setQuickViewDress(null)} >
                                        <FiShoppingBag className="text-sm" />
                                        <span>Inquire / Book Fitting</span>
                                    </Link>

                                    <button
                                        onClick={(e) => {
                                            toggleFavorite(
                                                e,
                                                quickViewDress.id,
                                                quickViewDress.name
                                            );
                                        }}
                                        className={`px-4 py-3.5 rounded-full border text-xs flex items-center justify-center transition ${favorites.includes(quickViewDress.id)
                                                ? "bg-[#820102] text-[#F4B3B3] border-[#F4B3B3]/50"
                                                : "border-white/20 text-white hover:bg-white/10"
                                            }`} >
                                        {favorites.includes(quickViewDress.id) ? (
                                            <BsHeartFill className="text-sm text-[#F4B3B3]" />
                                        ) : (
                                            <FiHeart className="text-sm" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {toastMessage && (
                <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#180407] border border-[#F4B3B3]/40 px-5 py-3 shadow-2xl shadow-black/80 backdrop-blur-lg animate-slideUp">
                    <FiCheck className="text-[#F4B3B3] text-sm" />
                    <span className="text-xs font-medium text-white tracking-wide">
                        {toastMessage}
                    </span>
                </div>
            )}
        </section>
    );
}
