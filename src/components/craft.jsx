import React from 'react'

export default function Craft() {
    return (
        <div className='text-center pt-10 bg-[#171116]'>
            <h1 className='text-5xl font-serif uppercase font-extrabold my-4 text-[#F4B3B3]'>Our Process</h1>
            <p className='text-sm italic text-white/50'>FROM IDEA TO MASTERPIECE</p>

            <div className='max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center text-white/50 py-16 space-y-5'>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-lg font-extrabold italic uppercase tracking-[0.35rem]'>Consultation</h1>
                    <p>Tell us what you envision.</p> 
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-lg font-extrabold italic uppercase tracking-[0.35rem]'>Design</h1>
                    <p>We refine the details</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-lg font-extrabold italic uppercase tracking-[0.35rem]'>Creation</h1>
                    <p>Our artisans bring it to life.</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-lg font-extrabold italic uppercase tracking-[0.35rem]'>Final Fit</h1>
                    <p>Every detail perfected for you.</p>
                </div>
            </div>
        </div>
    )
}
