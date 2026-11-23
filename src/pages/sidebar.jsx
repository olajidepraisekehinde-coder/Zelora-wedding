import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import UseTheme from '../hooks/useTheme'

export default function Sidebar({ isOpen, setIsOpen }) {
    const {darkMode} = UseTheme()
    return (
        <div>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
                />
            )}

            <aside
                className={`lg:hidden group fixed top-0 left-0 h-full z-[60] shadow-2xl flex flex-col transition-all duration-300 ease-in-out w-64 bg-[#520102] text-[#F4B3B3] ${isOpen ? "translate-x-0" : "-translate-x-full"}`} >

                <div className="h-20 flex items-center justify-center mt-1 mb-5">

                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-3xl bg-[#2C1F33]/50 text-white w-12 h-12 rounded-full flex items-center justify-center">
                        <LiaTimesSolid />
                    </button>

                </div>

                <div className="md:hidden ">

                    <nav className="flex flex-col gap-7 items-center text-lg">
                        <Link to="/about">About</Link>
                        <Link to="/dresses">Dresses</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>

                <div className="flex gap-4 items-center justify-center py-6">
                    <div className="md:hidden">
                        <button className={`px-8 py-4 rounded-b-4xl rounded-tl-4xl ${darkMode ? "bg-[#520102] text-[#F4B3B3]" : "bg-[#F4B3B3] text-[#520102]"}`}>Contact Us</button>
                    </div>
                </div>




            </aside>

        </div>
    )
}
