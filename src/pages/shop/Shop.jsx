import React, { useContext } from 'react'
import { Products } from '../../products'
import { ShopContext } from '../../context/ShopContext'

const Shop = () => {
  const { addToCart, cartItems } = useContext(ShopContext)
  
  return (
    <div className='Shop'>
      <div>
        <h1>Street Foods</h1>
      </div>
      <div className=' grid grid-cols-4 w-full h-screen px-12 justify-between items-center'>
        {Products.map(({id, productName, productPrice, productImage }) => {
          const cartItemsAmount = cartItems[id]

          return (
          <div key={ id } className=''>
            <div>
              <img src={ productImage } alt="product-image" className=' w-[240px] h-[240px]'/>
              <div>
                <p> { productName } </p>
                <p> Price: { productPrice } Pesos </p>
              </div>
              <div>
                <button className=' bg-orange-400 rounded-md w-40 h-12 ' onClick={() => addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>} </button>
              </div>
            </div>
          </div>
       )})}
      </div>
    </div>
  )
}

export default Shop