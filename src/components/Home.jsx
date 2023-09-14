import React from 'react'
import HeroImage from '../assets/hero-donut.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { BsArrowRightCircleFill } from 'react-icons/bs'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-gradient-to-b from-purple-900 via-white to-white px-12 mt-16'>    
        <div className=' flex flex-row justify-between items-center px-24 w-full h-full'>
            <div className=' w-1/2'> 
                <h1 className=' text-4xl pb-4 '> Welcome to Donut Factory </h1>
                <p className=' text-justify mr-6 mb-6'>Donut Factory is your one-stop online destination for delectable, freshly baked donuts. Explore an array of mouthwatering flavors and indulge in a world of sweet delights. Order with ease, and have our artisanal donuts delivered right to your doorstep. Treat yourself or share the joy with friends and family – Donut Factory makes every moment a delightful celebration of the beloved donut.</p>
                <ScrollLink to="product-section" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-800 to-orange-400 cursor-pointer'>
                    Shop Now
                    <span className='group-hover:rotate-90 duration-300 ml-2'>
                        <BsArrowRightCircleFill />
                    </span>
                </ScrollLink>
            </div>
            <div className=' w-1/2'>
                <img src={ HeroImage } alt='Donut'/>
            </div>
        </div>
    </div>
  )
}

export default Home