import React from "react";
import InventoryData from "./menuData";
import MenuItem from "../../components/MenuItem";

const Menu = props => {
  return (
    <div>
      <h1>Menu</h1>
      {Object.values(InventoryData).map(item => {
        return <MenuItem key={item.title} item={item} />;
      })}
    </div>
  );
};

export default Menu;
