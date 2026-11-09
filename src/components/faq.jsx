import React, { useState } from 'react'
import UseTheme from '../hooks/useTheme';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function Faq() {
    const [openFaq, setOpenFaq] = useState(0);
    const { darkMode } = UseTheme()
    const faqs = [
        {
            q: "How far in advance should I book my bespoke bridal gown?",
            a: "We recommend initiating your bespoke bridal consultation 4 to 6 months prior to your wedding date. This accommodates fabric sourcing, custom toile mock-ups, hand-beading, and 2 to 3 personalized fittings. For urgent timelines, express Zelora turnaround (under 6 weeks) is available on special inquiry.",
        },
        {
            q: "Do you cater to international brides and clients outside Lagos?",
            a: "Yes! Over 40% of our couture brides are based in the UK, US, Canada, and across Africa. We host high-definition virtual consultations, send fabric swatches, and guide you through precise virtual measuring. Your finished gown is shipped insured via DHL Express with global tracking.",
        },
        {
            q: "Can I bring my own fabric or does Zelora supply all materials?",
            a: "Both options are welcomed! For traditional ceremonies, many clients bring family heirloom lace or specific Aso Ebi fabric, which we transform into contemporary couture. Alternatively, you can select from our curated library of imported French Chantilly lace, Duchess satin, and organza.",
        },
        {
            q: "How many fittings are required for a custom bespoke piece?",
            a: "A bespoke gown typically requires 2 to 3 fittings: First, the Toile fitting (muslin draft) to perfect the neckline and waistline; Second, the real fabric fitting to refine beading and drape; Third, the final hemline fitting with your actual wedding shoes.",
        },
        {
            q: "Do you offer complete couple styling (Bride & Groom)?",
            a: "Absolutely. Our 'Royal Couple Ensemble' service coordinates the bride's gown with the groom's bespoke tuxedo or traditional Agbada to ensure harmonized tones, embroidery motifs, and photo-ready elegance.",
        },
    ];

    return (

        <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-3">
                <span className="text-xs uppercase tracking-[0.3em] text-[#820102] font-semibold">
                    Common Inquiries
                </span>
                <h2
                    className={`font-serif text-3xl sm:text-4xl font-bold ${darkMode ? "text-white" : "text-[#520102]"
                        }`} >
                    Frequently Asked Questions
                </h2>
                <p
                    className={`text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`} >
                    Everything you need to know about commissioning a bespoke Zelora
                    creation.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, fIdx) => {
                    const isOpen = openFaq === fIdx;
                    return (
                        <div
                            key={fIdx}
                            className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${darkMode
                                ? "border-white/10 bg-white/[0.02] hover:border-[#F4B3B3]/30"
                                : "border-[#820102]/20 bg-white hover:border-[#820102]/40 shadow-sm"
                                }`}  >
                            <button
                                onClick={() => setOpenFaq(isOpen ? -1 : fIdx)}
                                className="w-full p-6 text-left flex items-center justify-between gap-4 transition cursor-pointer" >
                                <span
                                    className={`font-serif text-base sm:text-lg font-bold ${darkMode ? "text-white" : "text-[#520102]"
                                        }`}>

                                    {faq.q}
                                </span>
                                <span
                                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${darkMode
                                        ? "bg-white/5 text-[#F4B3B3]"
                                        : "bg-[#F4B3B3]/40 text-[#820102]"
                                        }`}>

                                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                                </span>
                            </button>

                            {isOpen && (
                                <div
                                    className={`px-6 pb-6 text-xs sm:text-sm leading-relaxed border-t pt-4 ${darkMode
                                        ? "text-gray-300 border-white/5"
                                        : "text-gray-700 border-gray-100"
                                        }`}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
