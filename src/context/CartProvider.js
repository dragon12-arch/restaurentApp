import {useState} from 'react'
import CartContext from './CartContext'

const CartProvider = ({children}) => {
  const [cartList, setCartList] = useState([])
  const [restaurantName, setRestaurantName] = useState('')

  const addCartItem = dish => {
    setCartList(prevList => {
      const existingItem = prevList.find(item => item.dishId === dish.dishId)

      if (existingItem) {
        return prevList.map(item =>
          item.dishId === dish.dishId
            ? {...item, quantity: item.quantity + dish.quantity}
            : item,
        )
      }

      return [...prevList, dish]
    })
  }

  const removeCartItem = dishId => {
    setCartList(prevList => prevList.filter(item => item.dishId !== dishId))
  }

  const removeAllCartItems = () => {
    setCartList([])
  }

  const incrementCartItemQuantity = dishId => {
    setCartList(prevList =>
      prevList.map(item =>
        item.dishId === dishId ? {...item, quantity: item.quantity + 1} : item,
      ),
    )
  }

  const decrementCartItemQuantity = dishId => {
    setCartList(prevList => {
      const targetItem = prevList.find(item => item.dishId === dishId)

      if (targetItem && targetItem.quantity === 1) {
        return prevList.filter(item => item.dishId !== dishId)
      }

      return prevList.map(item =>
        item.dishId === dishId ? {...item, quantity: item.quantity - 1} : item,
      )
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        restaurantName,
        setRestaurantName,
        addCartItem,
        removeCartItem,
        removeAllCartItems,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
