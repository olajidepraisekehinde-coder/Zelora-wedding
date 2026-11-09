
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../assets/dressed/img1.jpg"


export default function Hero() {
    return (
        <>
            <div className=' '>

                <div className='relative'>
                    <div className="absolute inset-0 bg-black/50" />
                    <img src={img1}
                        alt="hero"
                        className='w-full object-cover h-screen' />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5 md:px-16 pt-30 text-white">
                        <p className="mb-2 text-[10px] font-medium tracking-[0.25em] text-[#F4B3B3]">
                            ABOUT ZELORA
                        </p>
                        <h1 className="max-w-2xl font-serif italic text-3xl font-bold leading-tight text-white md:text-5xl lg:text-5xl">
                            Where timeless elegance meets modern craft.
                        </h1>

                        <div>
                            <p className='max-w-xl m-auto py-5 text-sm italic text-white/60 leading-7'>Zelora creates refined wedding and traditional pieces designed for unforgettable moments.
                                Every piece is thoughtfully crafted to celebrate individuality,
                            </p>
                        </div>
                        <div className="text-[#F4B3B3]">
                            <ul className="flex gap-4 list-disc list-inside">
                                <li>Premium Craft</li>
                                <li>Custom Fit</li>
                                <li>Timeless Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


//   <div className="flex items-center px-5 py-12 lg:px-10">

//                     <div className="max-w-xl">

//                         <p className="mb-5 text-sm font-medium tracking-[0.35em] text-[#F4B3B3]">
//                             ABOUT ZELORA
//                         </p>

//                         <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
//                             Where timeless elegance meets modern craft.
//                         </h2>

//                         <p className="text-lg italic leading-8 text-white/70">
//                             Zelora creates refined wedding and traditional pieces
//                             designed for unforgettable moments. Every piece is
//                             thoughtfully crafted to celebrate individuality,
//                             culture and timeless elegance.
//                         </p>

//                         <p className="mt-5 text-sm leading-7 text-white/50">
//                             From carefully selected fabrics to the final detail,
//                             we believe exceptional clothing should not simply be
//                             worn it should be experienced.
//                         </p>

//                         <button className="mt-8 border border-[#F4B3B3] px-7 py-3 text-sm uppercase tracking-wider text-[#F4B3B3] transition duration-300 hover:bg-[#F4B3B3] hover:text-[#820102]">
//                             Discover Our Story
//                         </button>
//                     </div>
//                 </div>