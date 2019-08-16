import React from "react";
import { formatCurrency } from "../../utils/currencyConvert";
import "./cartStyles.scss";

const CartItem = ({ item, qty, removeItem }) => {
  const { id, image, cost, title, variation } = item;
  return (
    <div className="cartItem_container">
      <img src={image} alt={title} />
      <div className="cartItem_text">
        <h2>{title}</h2>
        <h3>{variation}</h3>
        <button className="cartItem_remove_btn" onClick={() => removeItem(id)}>
          Remove
        </button>
      </div>
      <div className="cartItem_item_total">
        ${formatCurrency(qty * cost, true)}
      </div>
    </div>
  );
};

export default CartItem;
