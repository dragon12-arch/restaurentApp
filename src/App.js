import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import RestaurantHome from './components/RestaurantHome'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import CartProvider from './context/CartProvider'

import './App.css'

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={RestaurantHome} />
        <ProtectedRoute exact path="/cart" component={Cart} />
      </Switch>
    </CartProvider>
  </BrowserRouter>
)

export default App
