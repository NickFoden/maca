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

          <div className="cart_total_div">
            <h4>Total</h4>
            <h4>$55.00</h4>
          </div>
          <button onClick={toggleCartView}>Continue to Checkout</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Cart;
