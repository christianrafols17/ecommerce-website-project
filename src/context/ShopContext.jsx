import React, { createContext, useState } from 'react'
import { Products } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < Products.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [ cartItems, setCartItems ] = useState(getDefaultCart());

    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1}))
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1}))
    }

    const updateCartItemAmount = (newAmount, itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: newAmount}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Products.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.productPrice
            }
        }
        return totalAmount
    }

    const clearCart = () => {
        setCartItems(getDefaultCart())
      }

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotalCartAmount, clearCart }

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider