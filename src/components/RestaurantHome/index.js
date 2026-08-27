import {Component} from 'react'

import Header from '../Header'
import DishItem from '../DishItem'

import './index.css'

class RestaurantHome extends Component {
  state = {
    menuList: [],
    activeCategory: '',
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    const apiUrl =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedMenuList = data[0].table_menu_list

      this.setState({
        menuList: updatedMenuList,
        activeCategory: updatedMenuList[0].menu_category_id,
      })
    }
  }

  onClickCategory = categoryId => {
    this.setState({
      activeCategory: categoryId,
    })
    console.log(categoryId)
  }

  render() {
    const {menuList, activeCategory} = this.state

    const activeCategoryData = menuList.find(
      each => each.menu_category_id === activeCategory,
    )

    const dishes = activeCategoryData ? activeCategoryData.category_dishes : []
    return (
      <>
        <Header />
        <ul className="menu-category-container">
          {menuList.map(each => (
            <li key={each.menu_category_id}>
              <button
                type="button"
                className={
                  activeCategory === each.menu_category_id
                    ? 'category-button active-tab'
                    : 'category-button'
                }
                onClick={() => this.onClickCategory(each.menu_category_id)}
              >
                {each.menu_category}
              </button>
            </li>
          ))}
        </ul>

        <ul className="dish-container">
          {dishes.map(item => (
            <DishItem key={item.dish_id} dishDetails={item} />
          ))}
        </ul>
      </>
    )
  }
}

export default RestaurantHome
