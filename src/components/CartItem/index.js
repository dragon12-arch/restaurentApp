import {useContext} from 'react'

import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = ({cartItemDetails}) => {
  const {
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeCartItem,
  } = useContext(CartContext)

  const {
    dishId,
    dishName,
    dishImage,
    dishCurrency,
    dishPrice,
    quantity,
  } = cartItemDetails

  const totalPrice = dishPrice * quantity

  const onIncrement = () => incrementCartItemQuantity(dishId)
  const onDecrement = () => decrementCartItemQuantity(dishId)
  const onRemove = () => removeCartItem(dishId)

  return (
    <li className="cart-item">
      <img src={dishImage} alt={dishName} className="cart-item-image" />

      <div className="cart-item-details">
        <p className="cart-item-name">{dishName}</p>
        <p className="cart-item-price">
          {dishCurrency} {totalPrice}
        </p>
      </div>

      <div className="cart-quantity-container">
        <button
          type="button"
          onClick={onDecrement}
          data-testid="decrement-quantity"
        >
          -
        </button>
        <p data-testid="item-quantity">{quantity}</p>
        <button
          type="button"
          onClick={onIncrement}
          data-testid="increment-quantity"
        >
          +
        </button>
      </div>

      <button type="button" className="remove-button" onClick={onRemove}>
        Remove
      </button>
    </li>
  )
}

export default CartItem
