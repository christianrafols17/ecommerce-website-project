import React, { useContext } from 'react'
import { Products } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import Home from '../../components/Home'

const Shop = () => {
  const { addToCart, cartItems } = useContext(ShopContext)
  
  return (
    <div className='Shop'>
      <Home />
      <div id='product-section' className=' bg-gradient-to-b from-white via-white to-purple-900 h-full'>
        <h1 className=' text-4xl font-semibold text-center mb-4 pb-4'>Products</h1>
        <div className=' grid grid-cols-2 w-full md:w-full lg:w-1/2 m-auto h-auto px-12 justify-between items-center'>
          {Products.map(({id, productName, productPrice, productImage }) => {
            const cartItemsAmount = cartItems[id]

            return (
            <div key={ id } className=' justify-center items-center mx-auto shadow-lg shadow-purple-600 mb-8 bg-white rounded-lg'>
                <img src={ productImage } alt="product-image" className=' w-[240px] h-[240px] rounded-md hover:scale-105 duration-300'/>
                <div className=' text-center py-1'>
                  <p> { productName } </p>
                  <p> Price: { productPrice } Pesos </p>
                </div>
                <div className=' flex justify-center pb-2'>
                  <button className=' bg-orange-400 rounded-lg w-40 h-10 ' onClick={() => addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>} </button>
                </div>
            </div>
        )})}
        </div>
      </div>
    </div>
  )
}

export default Shop