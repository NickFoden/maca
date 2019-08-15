import React from "react";
import InventoryData from "./menuData";
import MenuItem from "../../components/MenuItem";
import "../pageStyles.scss";

const Menu = ({ addToCart }) => {
  return (
    <div className="menu_page_container">
      <h1 className="page_title">Menu</h1>
      {Object.values(InventoryData).map(item => {
        return <MenuItem key={item.title} item={item} addToCart={addToCart} />;
      })}
    </div>
  );
};

export default Menu;
