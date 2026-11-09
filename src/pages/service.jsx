import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseTheme from "../hooks/useTheme";
import { FiClock, FiScissors, FiGlobe, FiChevronDown, FiChevronUp, FiArrowUpRight, FiCheck, } from "react-icons/fi";
import { BsStars, BsGem, BsShieldCheck } from "react-icons/bs";

// Images from assets
import Weddingdress from "../assets/dressed/Weddingdress.jpg";
import wed10 from "../assets/dressed/wed10.jpg";
import wed15 from "../assets/dressed/wed15.jpg";
import suite1 from "../assets/suite/suite1.jpg";
import civil1 from "../assets/Civil/civil1.jpg";
import coupleImg6 from "../assets/couple/img6.jpg";
import Faq from "../components/faq";
import ZeloraSteps from "../hooks/processStep";

export default function Service() {
    const { darkMode } = UseTheme();

    const [selectedFilter, setSelectedFilter] = useState("All");

    const servicesList = [
        {
            id: "bridal-couture",
            category: "Bridal",
            title: "Bespoke Bridal Couture",
            subtitle: "From Initial Sketch to Aisle Perfection",
            image: Weddingdress,
            leadTime: "8 – 16 Weeks",
            priceGuide: "Starting from ₦350,000",
            description:
                "An intimate couture journey crafted exclusively around you. Our master designers sculpt your wedding gown using authentic French chantilly lace, duchess satin, and intricate hand-embroidery.",
            highlights: [
                "1-on-1 Creative Direction & Custom Sketching",
                "Fabric Sourcing: French Lace, Mikado & Organza",
                "Custom Toile (Muslin Mock-up) Fitting",
                "Personalized Veil & Hairpiece Designing",
                "Bridal Day Dressing Protocol & Steaming",
            ],
        },
        {
            id: "traditional-asoebi",
            category: "Traditional",
            title: "Traditional Wedding & Aso Ebi Luxe",
            subtitle: "Rich Cultural Heritage Refined for Royalty",
            image: suite1,
            leadTime: "4 – 8 Weeks",
            priceGuide: "Starting from ₦180,000",
            description:
                "Celebrate Nigerian cultural magnificence with bespoke ensembles. We combine George fabrics, hand-beaded lace, royal velvets, and luxury Aso Oke tailored to honor heritage with modern flair.",
            highlights: [
                "Couples Traditional Palette Harmonization",
                "Hand-Beaded Coral & Crystal Embellishments",
                "Custom Gele & Headpiece Coordination",
                "Regal Blouse, Wrapper & Gown Styling",
                "Family Entourage Fabric Curation",
            ],
        },
        {
            id: "civil-registry",
            category: "Civil",
            title: "Civil Ceremony & Court Registry Edit",
            subtitle: "Modern Architectural Silhouettes",
            image: civil1,
            leadTime: "2-4 Weeks",
            priceGuide: "Starting from ₦85,000",
            description:
                "Sophisticated elegance designed for courthouse vows, intimate registries, and modern after-parties. Crisp crepes, structured corsets, and tailored pantsuits for contemporary brides.",
            highlights: [
                "Tailored Pant Suits & Sculptural Crepe Gowns",
                "Tea-Length & Midi Registry Silhouettes",
                "Express 14-Day Delivery Available",
                "Minimalist Veils & Statement Pearl Accessories",
                "Post-Ceremony Dinner Outfit Transitions",
            ],
        },
        {
            id: "groom-suits",
            category: "Groom",
            title: "Groom's Bespoke Tailoring & Agbada",
            subtitle: "Sharp Cut Tuxedos & Royal Traditional Attire",
            image: wed10,
            leadTime: "3-6 Weeks",
            priceGuide: "Starting from ₦180,000",
            description:
                "Commanding style for the modern groom. Precision-tailored wool tuxedos, double-breasted suits, and majestic 3-piece embroidered Agbada sets crafted for an unforgettable presence.",
            highlights: [
                "Imported Italian Wool & Cashmere Tuxedos",
                "Multi-Layer Embroidered Regal Agbada Sets",
                "Custom Hand-Stitched Monogramming",
                "Groom & Best Man Coordinated Tailoring",
                "Groom's Pocket Square & Fila Styling",
            ],
        },
        {
            id: "bridal-entourage",
            category: "Bridal",
            title: "Bridal Party & Entourage Wardrobe",
            subtitle: "Unified Aesthetic for Your Tribe",
            image: wed15,
            leadTime: "6-10 Weeks",
            priceGuide: "Custom Group Packages",
            description:
                "Create an aesthetically breathtaking wedding party. We design cohesive, flattering silhouettes for bridesmaids, mothers of the couple, and groomsmen with seamless color harmony.",
            highlights: [
                "Custom Palette Formulation & Swatch Bundles",
                "Flattering Necklines for Diverse Body Profiles",
                "Volume Fabric Sourcing & Uniform Quality Control",
                "Coordinated Fittings & Group Progress Tracking",
                "Mother-of-the-Bride Bespoke Couture",
            ],
        },
        {
            id: "Zelora-vip",
            category: "VIP Styling",
            title: "Private Zelora VIP Consultation",
            subtitle: "Exclusive 1-on-1 Haute Couture Experience",
            image: coupleImg6,
            leadTime: "Flexible Booking",
            priceGuide: "Complimentary with Custom Order",
            description:
                "Enjoy a private suite session with our Creative Director. Sip champagne, explore physical fabric swatches, inspect artisanal beading, and receive custom body proportion mapping.",
            highlights: [
                "Private 90-Minute Studio Appointment in Lagos",
                "Worldwide High-Definition Virtual Consultation",
                "Digital Moodboarding & 3D Fabric Swatches",
                "Complete Body Measurement Profiling",
                "Direct Line to Your Personal Bridal Stylist",
            ],
        },
    ];

    const filterCategories = [
        "All",
        "Bridal",
        "Traditional",
        "Civil",
        "Groom",
        "VIP Styling",
    ];

    const filteredServices = servicesList.filter((srv) => {
        if (selectedFilter === "All") return true;
        return srv.category === selectedFilter;
    });

    return (
        <div
            className={`relative min-h-screen transition-colors duration-500 ${darkMode ? "text-[#F4B3B3]" : "bg-[#F4B3B3] text-[#520102]"
                }`}>

            <section className="relative h-[85vh] min-h-[580px] w-full overflow-hidden flex items-center">
               
                <div className="absolute inset-0">
                    <img
                        src={wed10}
                        alt="Zelora Bespoke Zelora Services"
                        className="h-full w-full object-cover object-top filter brightness-65"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40" />
                    <div
                        className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${darkMode ? "from-[#0d0204]" : "from-[#fbf4f5]"
                            }`}
                    />
                </div>

                {/* Ambient Glow */}
                <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-[#820102]/30 rounded-full blur-[140px]" />

                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 w-full">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 backdrop-blur-md">
                            <BsStars className="text-[#F4B3B3] animate-pulse text-xs" />
                            <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#F4B3B3]">
                                Bespoke Services
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                            Crafted for Your{" "}
                            <span className="italic font-normal text-[#F4B3B3]">
                                Most Significant
                            </span>{" "}
                            Moments.
                        </h1>

                        <p className="italic text-sm text-gray-200/90 leading-relaxed font-light max-w-2xl">
                            From private hand-drawn sketches to millimeter-perfect fittings,
                            experience the mastery of Zelora Haute Couture. We turn personal
                            love stories and cultural heritage into unforgettable fashion.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <Link
                                to="/contact"
                                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#820102] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#F4B3B3] hover:bg-[#F4B3B3] hover:text-[#820102] transition-all duration-300 shadow-xl shadow-[#820102]/40" >
                                <span>Book a Consultation</span>
                                <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>

                            <Link
                                to="/dresses"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/15 hover:border-[#F4B3B3]/50 transition-all duration-300 text-center" >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-3xl border shadow-2xl backdrop-blur-xl transition-colors duration-500 ${darkMode
                        ? "bg-gradient-to-r from-[#180407] via-[#22060c] to-[#180407] border-[#F4B3B3]/20"
                        : "bg-white/95 border-[#820102]/15 shadow-[#820102]/10"
                        }`} >
                    {[
                        {
                            icon: <BsGem className="text-xl text-[#F4B3B3]" />,
                            title: "Haute Couture Craft",
                            desc: "French lace & hand-beading",
                        },
                        {
                            icon: <FiScissors className="text-xl text-[#F4B3B3]" />,
                            title: "Precision Fit Guarantee",
                            desc: "Custom toile mock-up fittings",
                        },
                        {
                            icon: <FiGlobe className="text-xl text-[#F4B3B3]" />,
                            title: "Global VIP Dispatch",
                            desc: "White-glove worldwide delivery",
                        },
                        {
                            icon: <BsShieldCheck className="text-xl text-[#F4B3B3]" />,
                            title: "Personal Stylist",
                            desc: "Dedicated bridal concierge",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex items-center gap-3.5 p-3 rounded-2xl ${darkMode ? "bg-white/[0.02]" : "bg-[#520102]/50"
                                }`}>
                            <div className="w-11 h-11 rounded-2xl bg-[#820102] border border-[#F4B3B3]/30 flex items-center justify-center shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h4
                                    className={`text-xs sm:text-sm font-serif font-bold tracking-wide ${darkMode ? "text-white" : "text-black"
                                        }`}>
                                    {item.title}
                                </h4>
                                <p
                                    className={`text-[11px] mt-0.5 ${darkMode ? "text-gray-400" : "text-gray-600"
                                        }`} >
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section
                id="services-showcase"
                className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white">
                        What We Do
                    </p>
                    <h2
                        className={`font-serif text-3xl sm:text-5xl font-bold ${darkMode ? "text-white" : "text-[#520102]"
                            }`} >
                        Comprehensive Zelora Services
                    </h2>
                    <p
                        className={`text-sm sm:text-base leading-relaxed font-light ${darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                    >
                        Every garment from our Lagos Zelora is sculpted with couture
                        integrity, honoring your timeline, heritage, and unique celebration.
                    </p>
                    <div className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-[#820102]/40 to-transparent pt-2" />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
                    {filterCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedFilter(cat)}
                            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${selectedFilter === cat
                                ? "bg-[#820102] text-[#F4B3B3] border border-[#F4B3B3]/50 shadow-lg shadow-[#820102]/40"
                                : darkMode
                                    ? "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10"
                                    : "bg-white text-[#520102] hover:bg-[#F4B3B3]/40 border border-[#820102]/20 shadow-sm"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map((service) => (
                        <article
                            key={service.id}
                            className={`group relative flex flex-col rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${darkMode
                                ? "bg-gradient-to-b from-white/[0.07] to-white/[0.02] border-white/10 hover:border-[#F4B3B3]/50 hover:shadow-[0_25px_50px_-12px_rgba(130,1,2,0.4)]"
                                : "bg-white border-[#820102]/15 hover:border-[#820102]/50 hover:shadow-[0_20px_40px_-12px_rgba(130,1,2,0.25)]"
                                }`} >

                            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black/40">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-[#F4B3B3] border border-white/15">
                                    <FiClock className="text-xs" />
                                    <span>{service.leadTime}</span>
                                </div>

                                <div className="absolute top-4 right-4 rounded-full bg-[#820102] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-[#F4B3B3]/30">
                                    {service.category}
                                </div>

                                <div className="absolute bottom-4 left-6 right-6">
                                    <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#F4B3B3] mb-1">
                                        {service.subtitle}
                                    </p>
                                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#F4B3B3] transition-colors">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            <div
                                className={`p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-6 ${darkMode ? "bg-black/60 backdrop-blur-md" : "bg-white"
                                    }`} >
                                <p
                                    className={`text-xs sm:text-sm leading-relaxed font-light ${darkMode ? "text-gray-300" : "text-gray-600"
                                        }`}  >
                                    {service.description}
                                </p>

                                <div
                                    className={`space-y-2.5 pt-3 border-t ${darkMode ? "border-white/10" : "border-gray-200"
                                        }`} >
                                    <p
                                        className={`text-[10px] uppercase tracking-widest font-semibold ${darkMode ? "text-gray-400" : "text-gray-500"
                                            }`} >
                                        What&apos;s Included:
                                    </p>
                                    {service.highlights.map((point, pIdx) => (
                                        <div
                                            key={pIdx}
                                            className={`flex items-start gap-2.5 text-xs ${darkMode ? "text-gray-300" : "text-gray-700"
                                                }`} >
                                            <FiCheck className="text-[#820102] text-sm shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className={`pt-4 border-t flex items-center justify-between ${darkMode ? "border-white/10" : "border-gray-200"
                                        }`} >
                                    <div>
                                        <span
                                            className={`text-[10px] uppercase tracking-wider block ${darkMode ? "text-gray-400" : "text-gray-500"
                                                }`} >
                                            Price Guide
                                        </span>
                                        <span className="font-serif text-sm sm:text-base font-bold text-[#820102]">
                                            {service.priceGuide}
                                        </span>
                                    </div>

                                    <Link
                                        to="/contact"
                                        state={{ selectedService: service.title }}
                                        className="inline-flex items-center gap-2 rounded-full bg-[#820102] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F4B3B3] hover:bg-[#520102] transition-all duration-300 shadow-md"  >
                                        <span>Inquire</span>
                                        <FiArrowUpRight className="text-sm" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section
                className={`relative py-24 border-y transition-colors duration-500 ${darkMode
                    ? "bg-gradient-to-b from-[#140306] via-[#1c0509] to-[#0d0204] border-white/10"
                    : "bg-gradient-to-b from-[#F4E3E7]/50 via-white to-[#F4E3E7]/40 border-[#820102]/20"
                    }`}>
                           <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <span className="text-xs font-semibold tracking-[0.35em] uppercase text-[#820102]">
                            The Zelora Experience
                        </span>
                        <h2
                            className={`font-serif text-3xl sm:text-5xl font-bold ${darkMode ? "text-white" : "text-[#520102]"
                                }`}>
                            The 5-Stage Couture Journey
                        </h2>
                        <p
                            className={`text-sm sm:text-base leading-relaxed font-light ${darkMode ? "text-gray-300" : "text-gray-600"
                                }`} >
                            From our first sketch to the unforgettable walk down the aisle,
                            every step is executed with precision, patience, and passion.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {ZeloraSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 group ${darkMode
                                    ? "bg-white/[0.03] border-white/10 hover:border-[#F4B3B3]/40"
                                    : "bg-white border-[#820102]/15 hover:border-[#820102]/50 shadow-md"
                                    }`}>
                                <div>
                                    <span className="font-serif text-4xl font-bold text-[#820102] group-hover:text-[#520102] transition-colors">
                                        {step.step}
                                    </span>
                                    <h3
                                        className={`font-serif text-lg font-bold mt-4 mb-2 ${darkMode ? "text-white" : "text-[#520102]"
                                            }`} >
                                        {step.title}
                                    </h3>
                                    <p
                                        className={`text-xs leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"
                                            }`} >
                                        {step.desc}
                                    </p>
                                </div>

                                <div
                                    className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${darkMode
                                        ? "border-white/5 text-[#F4B3B3]/70"
                                        : "border-gray-200 text-[#820102]/70"
                                        }`}>
                                    <span>Phase {index + 1}</span>
                                    <span className="w-2 h-2 rounded-full bg-[#820102] transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Faq />
            <section className="relative overflow-hidden bg-gradient-to-r from-[#820102] via-[#520102] to-[#120306] py-20 px-6 sm:px-12 text-center border-t border-[#F4B3B3]/30 text-white">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="whitespace-nowrap font-serif text-[100px] md:text-[180px] lg:text-[220px] font-bold uppercase tracking-tight text-white/5">
                        ZELORA
                    </span>
                </div>

                <div className="relative max-w-4xl mx-auto space-y-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#F4B3B3]">
                        Start Your Commission
                    </span>

                    <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Ready to bring your dream silhouette to life?
                    </h2>

                    <p className="text-sm sm:text-base text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                        Reserve your private consultation in our Lagos studio or connect
                        virtually with our master designers worldwide.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 rounded-full bg-[#F4B3B3] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#820102] hover:bg-white transition duration-300 shadow-2xl">
                            <span>Schedule Zelora Fitting</span>
                            <FiArrowUpRight size={16} />
                        </Link>

                        <Link
                            to="/dresses"
                            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition">
                            Browse Ready Collections
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
