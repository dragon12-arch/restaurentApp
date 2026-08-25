import {FiShoppingCart} from 'react-icons/fi'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <h3>UNI Resto Cafe</h3>

    <div className="cart-and-text">
      <h4 className="orders-text">My Orders</h4>
      <div>
        <FiShoppingCart size={24} />
        <span>0</span>
      </div>
    </div>
  </nav>
)

export default Header
