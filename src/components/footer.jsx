import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedin, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
    return (
        <footer className="shadow-2xl relative bg-linear-25 bg-[#520102] text-white">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="whitespace-nowrap font-serif text-[100px] font-bold uppercase tracking-tight text-[#820102]/10 md:text-[180px] lg:text-[240px]">
                    ZELORA
                </span>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">

                <div className="grid gap-14 grid-cols-2 md:grid-cols-4 justify-center px-5">
                    <div className="col-span-2 lg:col-span-1">
                        <h2 className="text-4xl font-extrabold tracking-[0.25em]">
                            ZELORA
                        </h2>

                        <p className="mt-3 text-sm tracking-wide text-white/50">
                            Wedding & Luxury Fashion
                        </p>

                        <p className="mt-7 max-w-md text-sm leading-7 text-white/60">
                            Timeless fashion for unforgettable moments.
                            Discover elegant pieces crafted for your
                            most beautiful occasions.
                        </p>
                    </div>

                    <div className="">
                        <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white">
                            Collections
                        </h3>

                        <div className="flex flex-col space-y-4 text-sm text-white/60">
                            <HashLink
                                smooth
                                to="/dresses"
                                className="transition hover:text-white">
                                Bridal
                            </HashLink>

                            <HashLink
                                smooth
                                to="/dresses"
                                className="transition hover:text-white">
                                Groom
                            </HashLink>

                            <HashLink
                                smooth
                                to="/dresses"
                                className="transition hover:text-white">
                                Aso Ebi
                            </HashLink>

                            <HashLink smooth
                                to="/dresses"
                                className="transition hover:text-white">
                                Traditional
                            </HashLink>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white">
                            Company
                        </h3>

                        <div className="flex flex-col space-y-4 text-sm text-white/60">
                            <Link
                                to="/about"
                                className="transition hover:text-white">
                                About
                            </Link>

                            <Link
                                to="/service"
                                className="transition hover:text-white">
                                services
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white">
                            Customer Care
                        </h3>

                        <div className="flex flex-col space-y-4 text-sm text-white/60">
                            <Link
                                to="/contact"
                                className="transition hover:text-white">
                                Contact
                            </Link>

                            <Link
                                to="/contact"
                                className="transition hover:text-white">
                                Custom Order
                            </Link>

                            <HashLink
                                smooth
                                to="/faq"
                                className="transition hover:text-white">
                                FAQs
                            </HashLink>
                        </div>
                    </div>

                </div>

                <div className="mt-16 flex flex-col md:items-start items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">

                    <div className="flex items-center gap-5">

                        <a
                            href="https://www.instagram.com/herawavecodes"
                            target="_blank"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition duration-300 hover:border-white hover:text-white">
                            <FaInstagram size={15} />
                        </a>

                        <a
                            href="https://wa.me/2348086157432?text=Hi%20Zelora!%20I'm%20interested%20in%20in%20your%20wedding%20dresses."
                            target="_blank"
                            aria-label="whatsapp"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition duration-300 hover:border-white hover:text-white">
                            <BsWhatsapp size={14} />
                        </a>

                        <a
                            href="https://www.tiktok.com/@HeraWaveCodes"
                            target="_blank"
                            aria-label="TikTok"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition duration-300 hover:border-white hover:text-white" >
                            <FaTiktok size={14} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/olajide-praise-kehinde-610565411"
                            target="_blank"
                            aria-label="linkedin"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition duration-300 hover:border-white hover:text-white" >
                            <FaLinkedin size={14} />
                        </a>

                    </div>

                    <p className="text-xs tracking-wide text-white/40">
                        © 2026 Zelora. All Rights Reserved.
                    </p>
                </div>
            </div>

            <div className="border-t border-white/5 py-5 text-center">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/25">
                    Elegance • Tradition • Modernity
                </p>
            </div>

        </footer>
    );
}