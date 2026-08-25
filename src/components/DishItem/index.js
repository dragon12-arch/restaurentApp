import {useState} from 'react'

import './index.css'

const DishItem = props => {
  const [count, setCount] = useState(0)

  const {dishDetails} = props

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

  const onClickIncrease = () => {
    setCount(prevCount => prevCount + 1)
  }

  const onDecrease = () => {
    setCount(prevCount => Math.max(0, prevCount - 1))
  }

  return (
    <li className="dish-item">
      <div
        className={
          dishType === 1 || dishType === '1' ? 'veg-icon' : 'non-veg-icon'
        }
      >
        <div className="dish-dot" />
      </div>
      <div className="dish-item-container">
        <div className="dish-details">
          <h2>{dishName}</h2>
          <p className="dish-currency">
            {dishCurrency} {dishPrice}
          </p>
          <p className="dish-description">{dishDescription}</p>
          {dishAvailability ? (
            <div className="quantity-container">
              <button type="button" onClick={onDecrease}>
                -
              </button>

              <span>{count}</span>

              <button type="button" onClick={onClickIncrease}>
                +
              </button>
            </div>
          ) : (
            <p className="available-text">Not available</p>
          )}
          {addonCat && addonCat.length > 0 && (
            <p className="customization-text">Customizations available</p>
          )}
        </div>
        <div>
          <p className="calories-text">{dishCalories} calories</p>
        </div>
        <div>
          <img src={dishImage} alt={dishName} className="dish-image" />
        </div>
      </div>
    </li>
  )
}
export default DishItem
