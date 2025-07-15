import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md: mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='mt-4 text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo perspiciatis, eum numquam facere quia sequi repellendus nobis consectetur.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a className='hover:text-white' href="#Header">Home</a>
                    <a className='hover:text-white' href="#About">About Us</a>
                    <a className='hover:text-white' href="#Projects">Projects</a>
                    <a className='hover:text-white' href="#Contact">Contact Us</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Check Our Newsletter</h3>  
                <p className='mb-4 text-gray-400 max-w-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo perspiciatis, eum numquam facere quia sequi.</p>
                <div className='flex gap-2'>
                    <input type="email" placeholder='your.example@gmail.com' className='p-2 mb-3 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'/>
                    <button className='py-2 mb-3 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-400'>
            Copyright 2025 © Riwaz Acharya. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer