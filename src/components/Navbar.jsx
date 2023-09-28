import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiFillShop } from 'react-icons/ai'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const { getItemQuantity } = useContext(ShopContext)
    const itemQuantity = getItemQuantity()


  return (
    <nav className='Navbar'>
        <div className=' w-full h-16 bg-purple-900 text-white fixed top-0 z-10 flex flex-row justify-between items-center px-4 md:px-12'>
            <h1 className=' text-lg md:text-4xl font-bold text-yellow-500'>
                Donut Factory
            </h1>
            <div className='flex items-center justify-end '>
                <Link to='/ecommerce-website-project/' smooth duration={500} className=' flex items-center text-xl hover:animate-pulse cursor-pointer'> <AiFillShop size={24} className=' w-12' />
                    <span className='hidden md:flex'>Shop</span>  
                </Link>
                <Link to='/ecommerce-website-project/cart' className=' flex items-center text-xl hover:animate-pulse cursor-pointer'> <AiOutlineShoppingCart size={24} className=' w-12' /> 
                    <span className='hidden md:flex'>Cart</span>
                    <span className='bg-red-600 text-sm md:ms-2 px-2 rounded-full'>{ itemQuantity > 0 && <>{ itemQuantity }</> }</span> 
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

