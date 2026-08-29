import DishItem from '../DishItem'

const DishesList = ({dishes, updateCartCount}) => (
  <ul className="dish-container">
    {dishes.map(eachDish => (
      <DishItem
        key={eachDish.dish_id}
        dishDetails={eachDish}
        updateCartCount={updateCartCount}
      />
    ))}
  </ul>
)

export default DishesList
