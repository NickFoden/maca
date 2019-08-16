import React from "react";
import "./cartStyles.scss";

const Cart = ({ currentCart, toggleCartView, visibility }) => {
  const show = visibility ? "displayCart" : "none";
  console.dir(currentCart);

  if (visibility) {
    return (
      <div className={show} id="cart">
        <div onClick={toggleCartView} className="cart_background" />
        <div className="cart_slider">
          <h1>My Cart</h1>

          <button onClick={toggleCartView}>Toggle the view</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Cart;
