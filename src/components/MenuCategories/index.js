const MenuCategories = ({categories, activeCategoryId, onSelectCategory}) => (
  <div className="menu-categories-slider">
    <ul className="menu-category-container">
      {categories.map(eachCategory => (
        <li className="category-list-item" key={eachCategory.menu_category_id}>
          <button
            type="button"
            data-testid="categoryButton"
            className={
              activeCategoryId === eachCategory.menu_category_id
                ? 'category-button active-tab'
                : 'category-button'
            }
            onClick={() => onSelectCategory(eachCategory.menu_category_id)}
          >
            {eachCategory.menu_category}
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default MenuCategories
