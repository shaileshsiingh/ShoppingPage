// CartButton.js
import React from "react";
import { useDispatch} from "react-redux";
import { cartActions } from "../../store/cartReducer";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartActions.toggleCartVisibility());
  };

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
