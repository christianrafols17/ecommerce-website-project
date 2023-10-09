import React, { useContext } from 'react'
import { Products } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import Home from '../../components/Home'
import { motion } from 'framer-motion'

const Shop = () => {
  const { addToCart, cartItems } = useContext(ShopContext)

  const pageMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={ pageMotion } className='Shop'>
      <Home />
      <div id='product-section' className=' bg-gradient-to-b from-white via-white to-purple-900 h-full'>
        <h1 className='text-3xl md:text-4xl font-semibold text-center mb-8 py-4 bg-yellow-400 rounded-full mx-10 '>Products</h1>
        <div className=' grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 w-full md:w-full lg:w-2/3 m-auto h-auto px-4 md:px-12 justify-between items-center'>
          {Products.map(({id, productName, productPrice, productImage }) => {
            const cartItemsAmount = cartItems[id]

            return (
            <div key={ id } className=' justify-center items-center mx-auto shadow-lg shadow-purple-600 mb-8 bg-white rounded-lg'>
                <img src={ productImage } alt="product-image" className=' w-[240px] h-[120px] md:h-[240px] rounded-md hover:scale-105 duration-300'/>
                <div className=' text-center py-1 text-sm md:text-base'>
                  <p> { productName } </p>
                  <p className=' text-sm md:text-base'> Price: { productPrice } Pesos </p>
                </div>
                <div className=' flex justify-center pb-2'>
                  <button className='rounded-lg w-36 md:w-40 h-10 hover:scale-105 duration-150 text-white bg-gradient-to-r from-purple-800 to-orange-400' onClick={() => addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>} </button>
                </div>
            </div>
        )})}
        </div>
      </div>
    </motion.div>
  )
}

export default Shop