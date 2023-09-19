import React, { useContext } from 'react'
import { Products } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import EmptyCart from '../../assets/empty-cart.png'

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div className=' pt-24'>
      <div>
        <div className=' flex flex-col w-full h-screen items-center'>
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
              <button className=' bg-orange-400 rounded-md w-40 h-12' onClick={() => navigate('/ecommerce-website-project')}> Continue Shopping </button>
              <button className=' bg-orange-400 rounded-md w-40 h-12 ms-4'> Checkout </button>
            </div>
          </div>
          : <>
              <div className=' flex flex-col justify-center items-center w-full h-screen '>
                <img src={ EmptyCart } alt='Empty Cart' className=' w-24 h-auto' />
                <h1> Your Cart is Empty </h1>
              </div>
            </>}
        </div>
      </div>
    </div>
  )
}

export default Cart