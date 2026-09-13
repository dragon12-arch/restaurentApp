import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiShoppingCart} from 'react-icons/fi'

import CartContext from '../../context/CartContext'
import './index.css'

const Header = () => {
  const history = useHistory()
  const {cartList, restaurantName} = useContext(CartContext)

  const cartCount = cartList.length

  const onClickRestaurantName = () => {
    history.push('/')
  }

  const onClickCartIcon = () => {
    history.push('/cart')
  }

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar">
      <h3 className="restaurant-name" onClick={onClickRestaurantName}>
        {restaurantName}
      </h3>

      <div className="cart-and-text">
        <p className="orders-text">My Orders</p>

        <button
          type="button"
          className="cart-icon-button"
          onClick={onClickCartIcon}
          aria-label="cart"
          data-testid="cart"
        >
          <FiShoppingCart size={24} />
          <span className="cart-count" data-testid="cartItemsCount">
            {cartCount}
          </span>
        </button>

        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header
