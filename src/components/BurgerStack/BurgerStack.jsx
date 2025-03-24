const BurgerStack = (props) => {
    return (
      <ul>
        {props.stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            <p>{ingredient.name}</p>
            <button onClick={() => props.removeFromBurger(ingredient)}>-</button>
          </li>
        ))
        }
      </ul>
    )
  };
  
  export default BurgerStack;
  