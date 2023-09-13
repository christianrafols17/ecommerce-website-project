import React, { useContext } from 'react'
import { Products } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div>
      <h1>
        Cart Items
      </h1>
      <div>
        <div className=' flex flex-col w-full h-screen items-center'>
          {Products.map(({ id, productName, productImage, productPrice}) => {
            
            if (cartItems[id] !== 0) {
              return (
                <div key={ id } className='w-1/3 border-solid border-2 border-gray-700 rounded-lg my-2'>
                  <div className=' flex flex-row m-2'>
                    <img src={ productImage } alt="product-image" className='w-[150px] h-[150px]'/>
                    <div className=' h-full px-4 my-auto'>
                      <p> { productName } </p>
                      <p> Price: { productPrice } Pesos </p>
                      <div className=''>
                        <button className=' border-solid border-2 border-gray-600 rounded-s-md w-8 h-8' onClick={() => removeFromCart(id)}> - </button>
                        <input className=' border-solid border-2 border-gray-600 w-10 h-8 text-center' value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)} />
                        <button className=' border-solid border-2 border-gray-600 rounded-e-md w-8 h-8' onClick={() => addToCart(id)}> + </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          })}
          {totalAmount > 0 ? 
          <div>
            <p className=' py-4'>Subtotal: {totalAmount} Pesos</p>
            <div>
              <button className=' bg-orange-400 rounded-md w-40 h-12' onClick={() => navigate('/')}> Continue Shopping </button>
              <button className=' bg-orange-400 rounded-md w-40 h-12 ms-4'> Checkout </button>
            </div>
          </div>
          : <h1> Empty </h1>}
        </div>
      </div>
    </div>
  )
}

export default Cart