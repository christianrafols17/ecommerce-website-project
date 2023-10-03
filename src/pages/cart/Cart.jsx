import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Products } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import EmptyCart from '../../assets/empty-cart.png'
import Popup from '../../components/Popup'
import { motion } from 'framer-motion'

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotalCartAmount, clearCart } = useContext(ShopContext)
  let totalAmount = getTotalCartAmount()

  const [popup, setPopup] = useState(false)

  const togglePopup = () => {
    setPopup(!popup)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const navigate = useNavigate()
  return (
    <motion.div initial={{  x: "100%" }} animate={{ x: "0%",  }} transition={{ duration: 0.75, ease: "easeOut" }} className=''>
      <div className=' flex flex-col w-full h-screen items-center bg-gradient-to-b from-purple-900 via-white  to-white pt-24'>
        {Products.map(({ id, productName, productImage, productPrice}) => {
          
          if (cartItems[id] !== 0) {
            return (
              <div key={ id } className=' w-[300px] md:w-[320px] border-solid border-2 border-gray-700 rounded-lg my-2'>
                <div className=' flex flex-row m-2'>
                  <img src={ productImage } alt="product-image" className='w-[150px] h-[150px]'/>
                  <div className=' h-full pl-4 my-auto text-sm md:text-base'>
                    <p className='font-bold'> { productName } </p>
                    <p className='pb-2'> Price: { productPrice } Pesos </p>
                    <div className=''>
                      <button className=' border-solid border-2 border-gray-600 rounded-s-md w-6 h-6 md:h-8' onClick={() => removeFromCart(id)}> - </button>
                      <input className=' border-solid border-2 border-gray-600 w-12 h-6 md:h-8 text-center' value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)} />
                      <button className=' border-solid border-2 border-gray-600 rounded-e-md w-6 h-6 md:h-8' onClick={() => addToCart(id)}> + </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
        {totalAmount > 0 ? 
        <div>
          <p className=' py-4 text-center'>Subtotal: {totalAmount} Pesos</p>
          <div>
            <Link to='/ecommerce-website-project/'>
              <button className=' bg-orange-400 rounded-md w-40 h-12'> Continue Shopping </button>
            </Link>
            <button className=' bg-orange-400 rounded-md w-40 h-12 ms-4' onClick={() => { togglePopup(); clearCart(); }}> Checkout </button>
          </div>
        </div>
        : 
        <>
          <div className=' flex flex-col justify-center items-center w-full h-screen '>
            <img src={ EmptyCart } alt='Empty Cart' className=' w-24 h-auto' />
            <h1> Your Cart is Empty </h1>
          </div>
        </>}
        {popup && (
          <Popup togglePopup={togglePopup}/>
        )}
      </div>
    </motion.div>
  )
}

export default Cart