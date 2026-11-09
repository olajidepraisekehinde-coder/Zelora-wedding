import React from 'react'
import Hero from '../components/hero'
import UseTheme from '../hooks/useTheme'
import wed8 from "../assets/dressed/wed8.jpg"
import products from '../hooks/dresses'
import Craft from '../components/craft'
import Testimonial from '../components/testimonial'
import WhyUs from '../components/whyUs'
import Card from '../components/card'

export default function Home() {
    const { darkMode } = UseTheme()
    return (
        <>
            <Hero />
            <div>
                <section className="bg-black w-full px-4 py-20 lg:px-5">
                    <div className="max-w-7xl m-auto">

                        <div className="text-center mb-14 px-5">
                            <p className="text-sm tracking-[0.35em] text-[#F4B3B3] uppercase mb-4">
                                Zelora Collections
                            </p>

                            <h2 className={`text-3xl md:text-5xl font-serif uppercase font-extrabold italic ${darkMode ? 'text-[#F4B3B3]' : 'text-[#F4B3B3]'}`}>
                                Featured Collections
                            </h2>

                            <p className="mt-5 max-w-2xl mx-auto text-white/60 leading-7">
                                Discover carefully crafted pieces designed for weddings,
                                traditional celebrations and unforgettable moments.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
                            {products.slice(0, 8).map((item) => (

                                <div
                                    key={item.id}
                                    className="group overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#F4B3B3]/60">

                                    <div className="relative overflow-hidden">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                                        <span className="absolute top-4 left-4 rounded-full bg-black/60 px-4 py-2 text-xs uppercase tracking-wider text-[#F4B3B3] backdrop-blur-md">
                                            {item.category}
                                        </span>

                                        <div className="absolute bottom-5 left-0 right-0 flex justify-center translate-y-16 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                            <button className="rounded-full bg-[#F4B3B3] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#820102] hover:bg-white transition">
                                                View Details
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-5 group-hover:bg-white/50 backdrop:blur-5xl">

                                        <h3 className="font-serif text-xl text-white">
                                            {item.name}
                                        </h3>

                                        <div className="mt-3 flex items-center justify-between">

                                            <p className="text-sm text-[#F4B3B3]">
                                                {item.price}
                                            </p>

                                            <button className="text-xs uppercase tracking-wider text-white/50 hover:text-[#F4B3B3] transition">
                                                Shop Now →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-14 text-center">
                            <button className="border border-[#F4B3B3] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#F4B3B3] transition duration-300 hover:bg-[#F4B3B3] hover:text-[#820102]">
                                View All Collections
                            </button>
                        </div>
                    </div>
                </section>
            </div>


            <div>
                <div className={`py-20 text-center ${darkMode ? 'dark-theme': "light-theme"}`}>
                    <h1 className="text-3xl md:text-5xl font-serif uppercase font-extrabold">ZELORA EXPERIENCE</h1>
                    <p className={`py-5 text-sm md:text-xl italic ${darkMode ? "text-[#F4B3B3]":"text-[#820102]"}`}>More Than Clothing. A Moment Made Yours.</p>
                </div>
            </div>

            <section className=''>
                <div className='bg-black text-white py-10'>
                    <div className="px-6 py-6 space-y-8 pt-5">
                        <h1 className={`text-4xl font-serif uppercase font-extrabold text-center ${darkMode ? 'text-[#F4B3B3]' : 'text-[#F4B3B3]'}`}>Uniquely Yours</h1>
                        <p className='max-w-xl mx-auto text-center px-5'>We believe every stitch tells a story, every silhouette captures a moment, and every garment helps you celebrate life’s most beautiful chapters.</p>
                    </div>

                    <div className="md:flex grid lg:grid-cols-4 grid-cols-2 max-w-7xl m-auto justify-center md:gap-12 gap-5 text-center py-6 px-5">
                        <p className="bg-[#F4B3B3] text-[#820102] text-center px-5 py-4 italic hover:bg-[#520102] hover:text-[#F4B3B3] transition duration-500 rounded-4xl">Premium Fabrics</p>
                        <p className="bg-[#F4B3B3] text-[#820102] text-center px-5 py-4 italic hover:bg-[#520102] hover:text-[#F4B3B3] transition duration-500 rounded-4xl">Custom Fit</p>
                        <p className="bg-[#F4B3B3] text-[#820102] text-center px-5 py-4 italic hover:bg-[#520102] hover:text-[#F4B3B3] transition duration-500 rounded-4xl">Expert Craft</p>
                        <p className="bg-[#F4B3B3] text-[#820102] text-center px-5 py-4 italic hover:bg-[#520102] hover:text-[#F4B3B3] transition duration-500 rounded-4xl">Cultural Elegance</p>
                    </div>

                </div>
            </section>

            <section className='py-16'>
                <h1 className='text-3xl md:text-5xl font-serif uppercase font-extrabold text-center'>Bespoke</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl m-auto gap-8 px-8 py-8 items-center'>
                    <img
                        src={wed8}
                        alt="Bespoke"
                        className="w-full object-cover h-full rounded-2xl shadow-2xl hover:scale-105 transition duration-500 cursor-pointer"
                    />
                    <div className='text-center space-y-4'>
                        <h1 className='text-3xl md:text-6xl italic font-bold'>Create your dream look</h1>
                        <p className='max-w-md m-auto text-sm'>Tell us what you want and we will bring it to life</p>

                        <div className="text-black">
                            <div className='flex gap-2 text-center justify-center py-2 text-sm italic font-bold'>
                                <p className=''>Your Vision.</p>
                                <p>Our Craft.</p>
                            </div>

                            <p className='py-3'>Have a particular design in mind?</p>
                            <p className='max-w-md m-auto'>Whether you have a reference image, a sketch
                                or simply an idea, Zelora can bring your vision
                                to life.</p>
                        </div>

                        <div className='py-5'>
                            <button className="border-[#F4B3B3] px-8 py-4 text-sm uppercase tracking-[0.2em] bg-[#820102] rounded-full text-[#F4B3B3] transition duration-300 hover:bg-[#F4B3B3] hover:border-[#820102] border hover:text-[#820102]">Contact Us</button>
                        </div>
                    </div>
                </div>
                <Craft />
                <Testimonial/>
                <WhyUs/>
                <Card />
            </section>
        </>
    )
}
