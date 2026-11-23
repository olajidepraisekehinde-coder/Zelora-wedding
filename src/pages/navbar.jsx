
import { Link } from "react-router-dom"
import UseTheme from "../hooks/useTheme"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Navbar({setIsOpen}) {
    const { darkMode, toggleTheme } = UseTheme()
    return (
        <div>

            <div className={`fixed w-full flex justify-between items-center px-5 py-5 md:px-8 shadow-3xl z-55 ${darkMode ? "bg-[#F4B3B3] text-[#820102]" : "text-[#F4B3B3] bg-[#520102] border shadow-2xl"}`}>
               
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-4xl text-center" >

                    <GiHamburgerMenu
                    />
                </button>

                <Link to="/"
                    className="text-3xl font-bold italic">ZELORA</Link>

                <div className="hidden md:block">

                    <nav className="flex gap-7 items-center text-lg">
                        <Link to="/about">About</Link>
                        <Link to="/dresses">Dresses</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>

                <div className="flex gap-4 items-center">
                    <button
                        onClick={toggleTheme}
                        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 border ${darkMode ? "bg-[#F4B3B3]" : "bg-[#520102]"}`}>

                        <div
                            className={`w-4 h-4 rounded-full transition-transform duration-300 ${darkMode ? "translate-x-6 bg-[#520102]" : "translate-x-0 bg-[#F4B3B3]"}`}></div>
                    </button>

                    <div className="hidden md:block">
                        <button className={`px-6 py-3 rounded-b-4xl rounded-tl-4xl ${darkMode ? "bg-[#820102] text-[#F4B3B3]" :  "bg-[#F4B3B3] text-[#520102]"}`}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
