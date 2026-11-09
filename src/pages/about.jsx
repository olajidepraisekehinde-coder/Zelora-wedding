import React from 'react'
import weddingdress from "../assets/dressed/weddingdress.jpg"
import wed16 from "../assets/dressed/wed16.jpg"
import WhyUs from '../components/whyUs'
import img4 from "../assets/dressed/img4.jpg"
import products from '../hooks/dresses'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
export default function About() {
    return (
        <div>
            <div className='relative'>
                <div className="absolute inset-0 bg-black/50" />
                <img
                    src={weddingdress}
                    alt="wed"
                    className='h-screen w-full object-cover' />

                <div className="absolute inset-0 flex flex-col justify-center md:items-start md:text-start text-center px-5 md:px-8 lg:px-10 pt-30 text-white">
                    <p className="mb-2 text-[10px] font-medium tracking-[0.25em] text-[#F4B3B3]">
                        ABOUT ZELORA
                    </p>
                    <h1 className="max-w-md lg:max-w-2xl font-serif italic text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                        Where Elegance Meets Tradition
                    </h1>

                    <div>
                        <p className='max-w-xl m-auto py-5 text-sm italic text-white/60 leading-7'>
                            Wedding and luxury fashion created for moments that deserve to be remembered.
                        </p>
                    </div>
                </div>
            </div>

            <div className='py-10'>
                <h1 className='text-5xl font-serif italic font-bold  text-center'>OUR STORY</h1>
            </div>

            <div className='max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16 py-12 md:py-16 px-6'>

                <img
                    src={wed16}
                    alt=""
                    className='object-cover object-top w-full h-full lg:h-[700px] rounded-4xl' />

                <div>
                    <div className='text-center space-y-2'>

                        <h1 className='text-5xl font-serif italic font-bold  text-center'>Zelora Story</h1>
                        <p className="text-sm text-center text-gray-500">Zelora was born from a love for beautiful moments.</p>
                    </div>

                    <div className='max-w-2xl m-auto text-gray-800 space-y-4 text-lg py-8'>


                        <p className="">Zelora was created from a simple belief: what you wear should feel as meaningful as the moment itself.</p>

                        <p className="leading-10">From the elegance of a wedding gown to the richness of traditional attire, we believe fashion is more than clothing. It is expression, identity, culture, and memory woven into every detail.</p>

                        <p className="leading-10">We curate and create pieces that celebrate the woman and man wearing them blending timeless elegance with modern sensibility while honoring the traditions that make every celebration unique.</p>

                        <p className="leading-10">At Zelora, every detail is intentional. Every silhouette, texture, and finish is chosen to make you feel confident, beautiful, and unforgettable.</p>

                        <p className="leading-10">Because some moments only happen once. And they deserve to be remembered beautifully.</p>
                    </div>
                </div>
            </div>
            <WhyUs />

            <div className='relative'>
                <div className='absolute inset-0 bg-black/30' />
                <img
                    src={img4}
                    alt="img"
                    className='object-cover w-full h-full lg:h-280 object-top' />

                <div className='absolute flex flex-col inset-0 items-center justify-center text-center px-5'>
                    <h1 className='text-5xl md:text-7xl font-serif italic font-bold text-[#F4B3B3]'>More than a Dress</h1>
                    <p className='py-4 text-white text-sm'>Every occassion deserves a moment worth remembering</p>

                    <div className='group'>
                        <button className='border-2 px-16 py-3 text-lg border-[#F4B3B3] bg-[#820102] text-white group-hover:bg-[#F4B3B3] hover:border-[#820102] rounded-full'>Contact Us</button>
                    </div>
                </div>
            </div>

            <div className='px-5 md:px-10 flex gap-4 overflow-x-auto pb-2 py-12'>
                {products.map((item) => (
                    <div key={item.id}
                        className=" group shrink-0 overflow-hidden rounded-2xl">
                        <img src={item.image}
                            alt={item.name}
                            className='object-cover w-64 h-64 border rounded-4xl transition-all duration-500 group-hover:scale-110' />
                    </div>
                ))}
            </div>

            <div className='relative bg-black px-4 py-18 text-center py-32'>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="whitespace-nowrap font-serif text-[100px] font-bold uppercase tracking-tight text-white/8 md:text-[180px] lg:text-[240px]">
                        ZELORA
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white">
                    Your moment deserves Zelora
                </h1>

                 <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <Link
                        to="/collections"
                        className="group flex items-center rounded-4xl gap-3 bg-[#820102] px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#F4B3B3] hover:text-[#820102]">
                        Shop Collection

                        <FiArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"  />
                    </Link>

                    <Link
                        to="/custom-order"
                        className="group flex items-center rounded-4xl  gap-3 border border-[#820102] px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#820102] bg-[#F4B3B3] transition duration-300 hover:bg-[#820102] hover:text-[#F4B3B3]" >
                        Custom Order

                        <FiArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>

                </div>
            </div>
        </div>
    )
}
