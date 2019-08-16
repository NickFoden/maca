import React from "react";
import { formatCurrency } from "../../utils/currencyConvert";

const CartItem = ({ item, removeItem }) => {
  const { id, image, qty, cost, title, variation } = item;

  return (
    <div className="CartItem_container">
      <img className="CartItem_image" src={image} alt={title} />
      <div className="CartItem_text">
        <h2>{title}</h2>
        <h3>{variation}</h3>
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
      <div className="CartItem_button_div">${formatCurrency(qty * cost)}</div>
    </div>
  );
};

export default CartItem;
