import {FiShoppingCart} from 'react-icons/fi'

import './index.css'

const Header = ({cartCount}) => (
  <nav className="navbar">
    <h3 className="restaurant-name">UNI Resto Cafe</h3>

    <div className="cart-and-text">
      <p className="orders-text">My Orders</p>
      <div className="cart-icon-container">
        <FiShoppingCart size={24} />
        <span className="cart-count" data-testid="cartItemsCount">
          {cartCount}
        </span>
      </div>
    </div>
  </nav>
)

export default Header
