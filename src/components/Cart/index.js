import React from "react";
import CartItem from "./CartItem";
import InventoryData from "../../pages/Menu/menuData";
import "./cartStyles.scss";

const Cart = ({
  currentCartItemsObj,
  removeItem,
  toggleCartView,
  visibility
}) => {
  const show = visibility ? "displayCart" : "none";

  const renderItems = () => {
    const itemsArray = [];
    for (let keyName in currentCartItemsObj) {
      if (currentCartItemsObj[keyName] > 0) {
        itemsArray.push(keyName);
      }
    }

    return itemsArray.map(itemId => {
      return (
        <CartItem
          item={InventoryData[itemId]}
          qty={currentCartItemsObj[itemId]}
          removeItem={removeItem}
        />
      );
    });
  };

  if (visibility) {
    return (
      <div className={show} id="cart">
        <div onClick={toggleCartView} className="cart_background" />
        <div className="cart_slider">
          <h1>My Cart</h1>
          {renderItems()}
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
