import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiFillShop } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className=' w-full h-16 bg-purple-900 text-white fixed top-0 z-10'>
            <div className='w-full h-full flex flex-row justify-between items-center px-12'>
                <h1 className=' text-3xl font-bold text-yellow-500'>
                    Donut Factory
                </h1>
                <div className='flex flex-row justify-between items-center w-1/2 sm:w-1/6 '>
                    <Link to='/ecommerce-website-project/' smooth duration={500} className='w-1/2 mx-2 flex flex-row justify-end items-center text-xl hover:animate-pulse cursor-pointer'> <AiFillShop size={24} className=' w-12' /> Shop  </Link>
                    <Link to='/ecommerce-website-project/cart' className='w-1/2 flex flex-row justify-end items-center text-xl hover:animate-pulse cursor-pointer'> <AiOutlineShoppingCart size={24} className=' w-12' /> Cart  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

