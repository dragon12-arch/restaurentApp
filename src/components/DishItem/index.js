import {useState} from 'react'

import './index.css'

const DishItem = props => {
  const [count, setCount] = useState(0)

  const {dishDetails, updateCartCount} = props

  const {
    dish_name: dishName,
    dish_currency: dishCurrency,
    dish_price: dishPrice,
    dish_description: dishDescription,
    dish_image: dishImage,
    dish_calories: dishCalories,
    dish_Type: dishType,
    dish_Availability: dishAvailability,
    addonCat,
  } = dishDetails

  const isVeg = dishType === 1 || dishType === '1'
  const hasAddons = addonCat && addonCat.length > 0

  const onClickIncrease = () => {
    setCount(prevCount => prevCount + 1)
    updateCartCount(1)
  }

  const onClickDecrease = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
      updateCartCount(-1)
    }
  }

  return (
    <li className="dish-item">
      <div className={isVeg ? 'veg-icon' : 'non-veg-icon'}>
        <div className="dish-dot" />
      </div>

      <div className="dish-item-container">
        <div className="dish-details">
          <h1 className="dish-name">{dishName}</h1>
          <p className="dish-currency">
            {dishCurrency} {dishPrice}
          </p>
          <p className="dish-description">{dishDescription}</p>

          {dishAvailability ? (
            <div className="quantity-container">
              <button
                type="button"
                className="quantity-button"
                onClick={onClickDecrease}
                data-testid="decrement"
              >
                -
              </button>

              <p className="dish-quantity" data-testid="activeDishQuantity">
                {count}
              </p>

              <button
                type="button"
                className="quantity-button"
                onClick={onClickIncrease}
                data-testid="increment"
              >
                +
              </button>
            </div>
          ) : (
            <p className="available-text">Not available</p>
          )}

          {hasAddons && (
            <p className="customization-text">Customizations available</p>
          )}
        </div>

        <div className="dish-calories-container">
          <p className="calories-text">{dishCalories} calories</p>
        </div>

        <div className="dish-image-container">
          <img src={dishImage} alt={dishName} className="dish-image" />
        </div>
      </div>
    </li>
  )
}

export default DishItem
