import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import UseTheme from "../hooks/useTheme";
import { FiUser, FiMail, FiPhone, FiClock, FiMapPin, FiCheck, FiArrowUpRight } from "react-icons/fi";
import { BsWhatsapp, BsShieldCheck } from "react-icons/bs";
import wed16 from "../assets/dressed/wed16.jpg";

export default function Contact() {
    const { darkMode } = UseTheme();
    const location = useLocation();

    const initialService =
        location.state?.selectedService || "Bespoke Bridal Couture";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: initialService,
        eventDate: "",
        consultationType: "In-Person (Lagos Atelier)",
        notes: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);

    useEffect(() => {
        if (location.state?.selectedService) {
            setFormData((prev) => ({
                ...prev,
                service: location.state.selectedService,
            }));
        }
    }, [location.state]);

    const triggerToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => {
            setToastMessage(null);
        }, 4500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        triggerToast(
            `Thank you, ${formData.name || "valued client"}! Your consultation request for "${formData.service}" has been received. Our lead stylist will reach out within 24 hours.`
        );
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "Bespoke Bridal Couture",
            eventDate: "",
            consultationType: "In-Person (Lagos Atelier)",
            notes: "",
        });
    };

    const servicesOptions = [
        "Bespoke Bridal Couture",
        "Traditional Wedding & Aso Ebi Luxe",
        "Civil Ceremony & Court Registry Edit",
        "Groom's Bespoke Tailoring & Agbada",
        "Bridal Party & Entourage Wardrobe",
        "Private Atelier VIP Consultation",
        "General Commission & Styling Inquiry",
    ];

    const contactDetails = [
        {
            icon: <FiMapPin className="text-xl text-[#820102]" />,
            title: "Lagos Flagship Zelora",
            desc: "Plot 12, Victoria Island, Lagos, Nigeria",
            note: "By Private Appointment Only",
        },
        {
            icon: <BsWhatsapp className="text-xl text-[#820102]" />,
            title: "WhatsApp & Hotline",
            desc: "+234 800 935 6721",
            note: "Direct Bridal Concierge Line",
        },
        {
            icon: <FiMail className="text-xl text-[#820102]" />,
            title: "Zelora Email",
            desc: "concierge@zelora.com",
            note: "Response within 24 business hours",
        },
        {
            icon: <FiClock className="text-xl text-[#820102]" />,
            title: "Consultation Hours",
            desc: "Tuesday-Saturday: 10AM-6PM",
            note: "Sunday VIP Private Sessions by Request",
        },
    ];

    return (
        <div
            className={`relative min-h-screen transition-colors duration-500 pt-24 pb-20 ${darkMode ? "bg-[#0d0204] text-[#F4B3B3]" : "bg-[#F4B3B3] text-[#520102]"
                }`} >

            <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-[#820102]/20 rounded-full blur-[140px]" />
            <div className="pointer-events-none absolute bottom-1/4 right-0 w-125 h-125 bg-[#F4B3B3]/10 rounded-full blur-[160px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 pt-16">
                    <h1
                        className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${darkMode ? "text-white" : "text-[#520102]"
                            }`}>
                        Connect with the{" "}
                        <span className="italic font-normal text-[#820102]">Zelora</span>
                    </h1>

                    <p
                        className={`text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"
                            }`}>
                        Begin your bespoke couture journey. Reserve a dedicated consultation
                        in our private Lagos showroom, or book a worldwide high-definition
                        virtual fitting session.
                    </p>

                    <div className="pt-2 flex items-center justify-center gap-3">
                        <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#820102]/50" />
                        <span className="text-xs font-serif italic opacity-80">
                            Personalized Appointments • White-Glove Attention
                        </span>
                        <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#820102]/50" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                    {contactDetails.map((item, idx) => (
                        <div
                            key={idx}
                            className={`p-6 rounded-3xl border transition-all duration-300 ${darkMode
                                ? "bg-white/[0.03] border-white/10 hover:border-[#F4B3B3]/40"
                                : "bg-white border-[#820102]/15 hover:border-[#820102]/40 shadow-md"
                                }`} >
                            <div
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${darkMode
                                    ? "bg-[#820102]/40 border border-[#F4B3B3]/20"
                                    : "bg-[#F4E3E7] border border-[#820102]/20"
                                    }`} >
                                {item.icon}
                            </div>
                            <h3
                                className={`font-serif text-base font-bold tracking-wide ${darkMode ? "text-white" : "text-[#520102]"
                                    }`}>
                                {item.title}
                            </h3>
                            <p
                                className={`text-xs mt-1.5 font-medium ${darkMode ? "text-gray-300" : "text-gray-700"
                                    }`}>
                                {item.desc}
                            </p>
                            <p
                                className={`text-[10px] uppercase tracking-wider mt-2 font-semibold ${darkMode ? "text-[#F4B3B3]/70" : "text-[#820102]"
                                    }`} >
                                {item.note}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div
                        className={`lg:col-span-7 rounded-3xl border p-7 sm:p-10 transition-colors duration-500 ${darkMode
                            ? "bg-gradient-to-b from-white/[0.05] to-white/[0.01] border-white/10 shadow-2xl backdrop-blur-md"
                            : "bg-white border-[#820102]/15 shadow-xl"
                            }`} >
                        {isSubmitted ? (
                            <div className="text-center py-16 space-y-5">
                                <div className="w-16 h-16 rounded-full bg-[#820102] text-[#F4B3B3] flex items-center justify-center mx-auto text-2xl shadow-xl">
                                    <FiCheck />
                                </div>
                                <h3
                                    className={`font-serif text-3xl font-bold ${darkMode ? "text-white" : "text-[#520102]"
                                        }`} >
                                    Consultation Request Received
                                </h3>
                                <p
                                    className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"
                                        }`} >
                                    Thank you for reaching out to Zelora. Our Lead Stylist
                                    will review your vision and contact you via WhatsApp or Email
                                    within 24 hours to schedule your private fitting.
                                </p>
                                <div className="pt-4 flex items-center justify-center gap-4">
                                    <button
                                        onClick={handleReset}
                                        className="rounded-full bg-[#820102] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F4B3B3] hover:bg-[#520102] transition shadow-md" >
                                        Submit Another Request
                                    </button>
                                    <Link
                                        to="/dresses"
                                        className={`rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-wider transition ${darkMode
                                            ? "border-white/20 text-white hover:bg-white/10"
                                            : "border-[#820102]/30 text-[#820102] hover:bg-[#F4B3B3]/40"
                                            }`} >
                                        View Collections
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="mb-8 space-y-2">

                                    <div className="pb-2">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#820102]">
                                            Bespoke Request Form
                                        </span>
                                    </div>

                                    <h2
                                        className={`font-serif text-2xl sm:text-3xl font-bold ${darkMode ? "text-white" : "text-[#520102]"
                                            }`} >
                                        Request Zelora Appointment
                                    </h2>
                                    <p
                                        className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"
                                            }`} >
                                        Fill out the consultation details below so our master
                                        couturiers can prepare tailored sketches and swatches for your
                                        fitting.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                className={`text-[11px] uppercase tracking-wider block mb-1\.5 font-medium ${darkMode ? "text-gray-300 " : "text-gray-700"
                                                    }`} >
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="e.g. Amara Okoye"
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                    className={`w-full rounded-2xl py-3 pl-10 pr-4 text-xs focus:outline-none transition-all ${darkMode
                                                        ? "bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:border-[#F4B3B3]"
                                                        : "bg-[#fbf4f5] border border-gray-300 text-[#520102] placeholder-gray-400 focus:border-[#820102]"
                                                        }`}
                                                />
                                                <FiUser className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-md font-extrabold ${darkMode ? "text-[#F4B3B3]" : "text-[#820102]"}`} />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                className={`text-[11px] uppercase tracking-wider block mb-1.5 font-medium ${darkMode ? "text-gray-300" : "text-gray-700"
                                                    }`} >
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="amara@example.com"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    className={`w-full rounded-2xl py-3 pl-10 pr-4 text-xs focus:outline-none transition-all ${darkMode
                                                        ? "bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:border-[#F4B3B3]"
                                                        : "bg-[#fbf4f5] border border-gray-300 text-[#520102] placeholder-gray-400 focus:border-[#820102]"
                                                        }`}
                                                />
                                                <FiMail className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-md font-extrabold ${darkMode ? "text-[#F4B3B3]" : "text-[#820102]"}`} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                className={`text-[11px] uppercase tracking-wider block mb-1.5 font-medium ${darkMode ? "text-gray-300" : "text-gray-700"
                                                    }`}>
                                                WhatsApp Phone Number
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="+234 800 000 0000"
                                                    value={formData.phone}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, phone: e.target.value })
                                                    }
                                                    className={`w-full rounded-2xl py-3 pl-10 pr-4 text-xs focus:outline-none transition-all ${darkMode
                                                        ? "bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:border-[#F4B3B3]"
                                                        : "bg-[#fbf4f5] border border-gray-300 text-[#520102] placeholder-gray-400 focus:border-[#820102]"
                                                        }`}
                                                />
                                                <FiPhone className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-md font-extrabold ${darkMode ? "text-[#F4B3B3]" : "text-[#820102]"}`} />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                className={`text-[11px] uppercase tracking-wider block mb-1.5 font-medium ${darkMode ? "text-gray-300" : "text-gray-700"
                                                    }`} >
                                                Bespoke Service Desired
                                            </label>
                                            <select
                                                value={formData.service}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, service: e.target.value })
                                                }
                                                className={`w-full rounded-2xl py-3 px-4 text-xs focus:outline-none transition-all ${darkMode
                                                    ? "bg-[#160407] border border-white/20 text-white focus:border-[#F4B3B3]"
                                                    : "bg-[#fbf4f5] border border-gray-300 text-[#520102] focus:border-[#820102]"
                                                    }`} >
                                                {servicesOptions.map((srv, i) => (
                                                    <option
                                                        key={i}
                                                        value={srv}
                                                        className={darkMode ? "bg-[#140407]" : "bg-white"}>
                                                        {srv}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                className={`text-[11px] uppercase tracking-wider block mb-1.5 font-medium ${darkMode ? "text-gray-300" : "text-gray-700"
                                                    }`} >
                                                Target Wedding / Event Date
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    value={formData.eventDate}
                                                    onChange={(e) => setFormData({
                                                        ...formData, eventDate: e.target.value,
                                                    })
                                                    }
                                                    className={`w-full rounded-2xl py-3 px-4 text-xs focus:outline-none transition-all ${darkMode
                                                        ? "bg-black/50 border border-white/20 text-white focus:border-[#F4B3B3]"
                                                        : "bg-[#fbf4f5] border border-gray-300 text-[#520102] focus:border-[#820102]"
                                                        }`}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                className={`text-[11px] uppercase tracking-wider block mb-1.5 font-medium ${darkMode ? "text-gray-300" : "text-gray-700"
                                                    }`} >
                                                Consultation Format
                                            </label>
                                            <select
                                                value={formData.consultationType}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        consultationType: e.target.value,
                                                    })
                                                }
                                                className={`w-full rounded-2xl py-3 px-4 text-xs focus:outline-none transition-all ${darkMode
                                                    ? "bg-[#160407] border border-white/20 text-white focus:border-[#F4B3B3]"
                                                    : "bg-[#fbf4f5] border border-gray-300 text-[#520102] focus:border-[#820102]"
                                                    }`}>
                                                <option
                                                    value="In-Person (Lagos Atelier)"
                                                    className={darkMode ? "bg-[#140407]" : "bg-white"} >
                                                    In-Person (Lagos Showroom)
                                                </option>
                                                <option
                                                    value="Virtual Consultation (Worldwide)"
                                                    className={darkMode ? "bg-[#140407]" : "bg-white"} >
                                                    Virtual HD Consultation (Worldwide)
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            className={`text-[11px] uppercase tracking-wider block mb-1.5 font-medium ${darkMode ? "text-gray-300" : "text-gray-700"
                                                }`} >
                                            Your Vision & Silhouette Ideas
                                        </label>
                                        <textarea
                                            rows="3"
                                            placeholder="Share details about your dream silhouette, lace preferences, color palette, or venue location..."
                                            value={formData.notes}
                                            onChange={(e) =>
                                                setFormData({ ...formData, notes: e.target.value })
                                            }
                                            className={`w-full rounded-2xl p-4 text-xs focus:outline-none transition-all ${darkMode
                                                ? "bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:border-[#F4B3B3]"
                                                : "bg-[#fbf4f5] border border-gray-300 text-[#520102] placeholder-gray-400 focus:border-[#820102]"
                                                }`}
                                        />
                                    </div>

                                    <div className="pt-3">
                                        <button
                                            type="submit"
                                            className="group w-full rounded-full bg-[#820102] py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#F4B3B3] hover:bg-[#520102] transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer" >
                                            <span>Reserve Consultation</span>
                                            <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                        <div
                            className={`rounded-3xl overflow-hidden border p-6 sm:p-8 space-y-6 ${darkMode
                                ? "bg-gradient-to-b from-white/[0.05] to-white/[0.02] border-white/10"
                                : "bg-white border-[#820102]/15 shadow-xl"
                                }`}>
                            <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl">
                                <img
                                    src={wed16}
                                    alt="Zelora Atelier Fitting Suite"
                                    className="h-full w-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#F4B3B3]">
                                        Victoria Island Studio
                                    </span>
                                    <h4 className="font-serif text-xl font-bold text-white">
                                        The Private Suite Experience
                                    </h4>
                                </div>
                            </div>

                            <div className="space-y-3.5">
                                <h4
                                    className={`font-serif text-base font-bold ${darkMode ? "text-white" : "text-[#520102]"
                                        }`} >
                                    What to Expect at Your Fitting
                                </h4>

                                {[
                                    "Private 90-minute dedicated suite & champagne reception",
                                    "Full silhouette & posture proportion mapping",
                                    "Hand-selection of imported French lace & silk swatches",
                                    "Direct creative direction with lead couture designers",
                                    "Worldwide DHL insured delivery for global clients",
                                ].map((pt, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-start gap-2.5 text-xs ${darkMode ? "text-gray-300" : "text-gray-700"
                                            }`}  >
                                        <FiCheck className="text-[#820102] text-sm shrink-0 mt-0.5" />
                                        <span>{pt}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                                <a
                                    href="https://wa.me/2348086157432"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white py-3.5 px-6 text-xs font-bold uppercase tracking-wider transition shadow-lg" >
                                    <BsWhatsapp className="text-base" />
                                    <span>Instant WhatsApp Concierge</span>
                                </a>
                            </div>
                        </div>

                        <div
                            className={`p-6 rounded-3xl border flex items-center gap-4 ${darkMode
                                ? "bg-white/[0.02] border-white/10"
                                : "bg-white border-[#820102]/15 shadow-md"
                                }`}>
                            <div className="w-12 h-12 rounded-2xl bg-[#820102] text-[#F4B3B3] flex items-center justify-center text-xl shrink-0">
                                <BsShieldCheck />
                            </div>
                            <div>
                                <h5
                                    className={`font-serif text-sm font-bold ${darkMode ? "text-white" : "text-[#520102]"
                                        }`}>
                                    Couture Fit Assurance
                                </h5>
                                <p
                                    className={`text-xs mt-0.5 ${darkMode ? "text-gray-400" : "text-gray-600"
                                        }`}  >
                                    Every piece undergoes a minimum of 2 structural fittings to
                                    guarantee comfort, poise, and perfection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {toastMessage && (
                <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#1c0509] border border-[#F4B3B3]/40 px-6 py-4 shadow-2xl backdrop-blur-lg animate-slideUp max-w-md text-white">
                    <FiCheck className="text-[#F4B3B3] text-base shrink-0" />
                    <span className="text-xs font-medium tracking-wide leading-snug">
                        {toastMessage}
                    </span>
                </div>
            )}
        </div>
    );
}
