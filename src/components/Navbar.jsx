import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiFillShop } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className=' w-full h-16 bg-gradient-to-r from-black to-blue-950 text-white'>
            <div className='w-full h-full flex flex-row justify-between items-center px-12'>
                <h1 className=' text-2xl'>
                    Shopping Spree
                </h1>
                <div className='flex flex-row justify-between items-center w-1/2 sm:w-1/6 '>
                    <Link to='/' className='w-1/2 mx-2 flex flex-row justify-end items-center text-xl hover:animate-pulse'> <AiFillShop size={24} className=' w-12' /> Shop  </Link>
                    <Link to='/cart' className='w-1/2 flex flex-row justify-end items-center text-xl hover:animate-pulse'> <AiOutlineShoppingCart size={24} className=' w-12' /> Cart  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

