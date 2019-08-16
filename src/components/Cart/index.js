import React from "react";
import CartItem from "./CartItem";
import InventoryData from "../../pages/Menu/menuData";
import { formatCurrency } from "../../utils/currencyConvert";
import "./cartStyles.scss";

const Cart = ({
  checkout,
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
          key={itemId}
          item={InventoryData[itemId]}
          qty={currentCartItemsObj[itemId]}
          removeItem={removeItem}
        />
      );
    });
  };

  const calculateTotal = () => {
    let total = 0;

    for (let key in currentCartItemsObj) {
      total += currentCartItemsObj[key] * InventoryData[key]["cost"];
    }
    return total;
  };

  return (
    <div className={show} id="cart">
      <div onClick={toggleCartView} className="cart_background" />
      <div className="cart_slider">
        <h1>My Cart</h1>
        {renderItems()}
        <div className="cart_total_div">
          <h4>Total</h4>
          <h4>${formatCurrency(calculateTotal(), true)}</h4>
        </div>
        <button className="cart_checkout_btn" onClick={checkout}>
          Continue to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
