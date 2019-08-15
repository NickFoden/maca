import React from "react";
import "./cartStyles.scss";

const Cart = ({ toggleCartView, visibility }) => {
  const show = visibility ? "displayCart" : "none";

  if (visibility) {
    return (
      <div className={show} id="cart">
        <div className="cart_background" />
        <div className="cart_slider">
          <h1>Cart</h1>
          <button onClick={toggleCartView}>Toggle the view</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Cart;
