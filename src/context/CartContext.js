import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  restaurantName: '',
  setRestaurantName: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
