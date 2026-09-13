import DishItem from '../DishItem'

const DishesList = ({dishes}) => (
  <ul className="dish-container">
    {dishes.map(eachDish => (
      <DishItem key={eachDish.dish_id} dishDetails={eachDish} />
    ))}
  </ul>
)

export default DishesList
