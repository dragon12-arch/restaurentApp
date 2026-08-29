import {Component} from 'react'

import Header from '../Header'
import MenuCategories from '../MenuCategories'
import DishesList from '../DishesList'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class RestaurantHome extends Component {
  state = {
    menuList: [],
    activeCategoryId: '',
    cartCount: 0,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

    try {
      const response = await fetch(apiUrl, {method: 'GET'})

      if (response.ok) {
        const data = await response.json()
        const updatedMenuList = data[0].table_menu_list
        console.log(updatedMenuList)

        this.setState({
          menuList: updatedMenuList,
          activeCategoryId: updatedMenuList[0].menu_category_id,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onSelectCategory = categoryId => {
    this.setState({activeCategoryId: categoryId})
  }

  updateCartCount = value => {
    this.setState(prevState => ({
      cartCount: prevState.cartCount + value,
    }))
  }

  getActiveCategoryDishes = () => {
    const {menuList, activeCategoryId} = this.state

    const activeCategoryData = menuList.find(
      eachCategory => eachCategory.menu_category_id === activeCategoryId,
    )

    return activeCategoryData ? activeCategoryData.category_dishes : []
  }

  renderSuccessView = () => {
    const {menuList, activeCategoryId} = this.state
    const dishes = this.getActiveCategoryDishes()

    return (
      <>
        <MenuCategories
          categories={menuList}
          activeCategoryId={activeCategoryId}
          onSelectCategory={this.onSelectCategory}
        />
        <DishesList dishes={dishes} updateCartCount={this.updateCartCount} />
      </>
    )
  }

  renderFailureView = () => (
    <div className="restaurant-failure-view">
      <p>Something went wrong. Please try again.</p>
      <button type="button" onClick={this.getRestaurantDetails}>
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="restaurant-loader-container" data-testid="loader">
      <p>Loading...</p>
    </div>
  )

  renderContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {cartCount} = this.state

    return (
      <div className="restaurant-home-container">
        <Header cartCount={cartCount} />
        {this.renderContent()}
      </div>
    )
  }
}

export default RestaurantHome
