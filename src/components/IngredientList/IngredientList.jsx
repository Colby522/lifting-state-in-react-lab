const IngredientList = ({ingredients, addToBurger}) => {
    return (
        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index} style={{ backgroundColor: ingredient.color }}>
                    <p>{ingredient.name}</p>
                    <button onClick={ () => {addToBurger(ingredient)}}>+</button>
                </li>
            ))}
        </ul>
    )
  };
  
  export default IngredientList;
  