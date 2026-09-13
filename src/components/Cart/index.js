import {useContext} from 'react'

import Header from '../Header'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import './index.css'

const EMPTY_CART_IMAGE_URL =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)

  const renderEmptyCartView = () => (
    <div className="empty-cart-container">
      <img
        src={EMPTY_CART_IMAGE_URL}
        alt="empty cart"
        className="empty-cart-image"
      />
      <p>Your Cart is Empty</p>
    </div>
  )

  const renderCartItemsView = () => (
    <div className="cart-items-view">
      <button
        type="button"
        className="remove-all-button"
        onClick={removeAllCartItems}
      >
        Remove All
      </button>

      <ul className="cart-items-list">
        {cartList.map(eachItem => (
          <CartItem key={eachItem.dishId} cartItemDetails={eachItem} />
        ))}
      </ul>
    </div>
  )

  return (
    <>
      <Header />
      <div className="cart-page-container">
        {cartList.length === 0 ? renderEmptyCartView() : renderCartItemsView()}
      </div>
    </>
  )
}

export default Cart
