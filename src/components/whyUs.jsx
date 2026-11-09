import React from 'react'
import { BsAlexa } from 'react-icons/bs'
import { DiNancy } from 'react-icons/di'
import { MdOutlineQuestionMark } from 'react-icons/md'
import { SiCssdesignawards } from 'react-icons/si'
import UseTheme from '../hooks/useTheme'

export default function WhyUs() {
    const { darkMode } = UseTheme()
    return (
        <div className=' bg-[#171116] text-black/50 py-10  shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)]'>
            <h1 className={`${darkMode ? " text-[#820102]" : "text-[#F4B3B3]"} uppercase text-5xl italic font-extrabold text-center `}>Why Zelora</h1>
            <div className='max-w-7xl mx-auto text-center py-6 px-8'>
                <p className='max-w-md m-auto text-gray-500'>Zelora creates refined wedding and traditional pieces designed for unforgettable moments. Every piece is thoughtfully crafted to celebrate individuality, culture and timeless elegance.</p>
            </div>

            <section>

                <div className='text-white/70 max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center text-center py-6 space-y-5 '>
                    <div className='space-y-3'>
                        <div className='flex justify-center items-center'>
                            <BsAlexa
                                className={`text-3xl md:text-4xl font-extrabold ${darkMode ? " text-[#820102]" : "text-[#F4B3B3]"}`} />
                        </div>
                        <h1 className='text-xl font-extrabold italic'> Exceptional Quality</h1>
                        <p className="text-md">Premium fabrics and carefully finished pieces.</p>
                    </div>

                    <div className='space-y-3'>
                        <div className='flex justify-center items-center'>
                            <SiCssdesignawards
                                className={`text-3xl md:text-4xl font-extrabold ${darkMode ? " text-[#820102]" : "text-[#F4B3B3]"}`} />
                        </div>
                        <h1 className='text-xl font-extrabold italic'>Made For You</h1>
                        <p className="text-md">Every design celebrates your individuality.</p>
                    </div>

                    <div className='space-y-3'>
                        <div className='flex justify-center items-center'>
                            <DiNancy
                                className={`text-3xl md:text-4xl font-extrabold ${darkMode ? "text-[#820102]" : "text-[#F4B3B3]"}`} />
                        </div>
                        <h1 className='text-xl font-extrabold italic'>Cultural Elegance</h1>
                        <p className="text-md max-w-xs m-auto">African heritage interpreted through modern fashion.</p>
                    </div>

                    <div className='space-y-3'>
                        <div className='flex justify-center items-center'>
                            <MdOutlineQuestionMark
                                className={`text-3xl md:text-4xl font-extrabold ${darkMode ? "text-[#820102]" : "text-[#F4B3B3]"}`} />
                        </div>
                        <h1 className='text-xl font-extrabold italic'>Attention To Detail</h1>
                        <p className="text-md">From the first consultation to the final stitch.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
