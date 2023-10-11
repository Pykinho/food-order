import mealsImage from "../../assets/sushi.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactFood</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A food table" />
      </div>
    </>
  );
};

export default Header;
