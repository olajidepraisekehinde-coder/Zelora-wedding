import { useState } from "react"
import { Link } from "react-router-dom"
import UseTheme from "../hooks/useTheme"
export default function Navbar() {
    const { darkMode, toggleTheme } = UseTheme()
    return (
        <div>

            <div className={`fixed w-full flex justify-between items-center px-7 py-5 md:px-12 shadow-3xl z-55 ${darkMode ? "light-mode bg-[#F4B3B3] : text-[#820102] border shadow-2xl" : "dark-mode text-[#F4B3B3] : bg-[#520102] border shadow-2xl"}`}>

                <Link to="/"
                    className="text-3xl font-bold italic">ZELORA</Link>

                <nav className="flex  gap-7 items-center text-lg">
                    <Link to="/about">About</Link>
                    <Link to="/dresses">Dresses</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <div className="flex gap-8 items-center">
                    <button
                        onClick={toggleTheme}
                        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 border ${darkMode ? "bg-[#F4B3B3]" : "bg-[#520102]"}`}>

                        <div
                            className={`w-4 h-4 rounded-full transition-transform duration-300 ${darkMode ? "translate-x-6 bg-[#520102]" : "translate-x-0 bg-[#F4B3B3]"}`}></div>
                    </button>

                    <div>
                        <button className={`px-6 py-3 rounded-b-4xl rounded-tl-4xl ${darkMode ?"bg-[#520102] text-[#F4B3B3]": "bg-[#F4B3B3] text-[#520102]"}`}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
