import React from "react";
import InventoryData from "./menuData";
import MenuItem from "../../components/MenuItem";

const Menu = ({ addToCart }) => {
  return (
    <div>
      <h1>Menu</h1>
      {Object.values(InventoryData).map(item => {
        return <MenuItem key={item.title} item={item} addToCart={addToCart} />;
      })}
    </div>
  );
};

export default Menu;
