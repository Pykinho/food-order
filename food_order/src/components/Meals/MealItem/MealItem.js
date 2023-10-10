import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = ({ id, key, name, description, price }) => {
  const mealPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal} key={key}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
