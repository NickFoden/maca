import React, { useState } from "react";
import { formatCurrency } from "../utils/currencyConvert";
import "./styles.scss";

const MenuItem = ({ item, addToCart }) => {
  const [readMoreStatus, updateReadMore] = useState(false);
  const {
    cost,
    description,
    description2,
    id,
    image,
    image2,
    image3,
    title,
    variation
  } = item;

  const toggleReadMore = () => {
    updateReadMore(!readMoreStatus);
  };

  const handleAddToCart = id => {
    addToCart(id);
  };

  return (
    <div className="MenuItem_container">
      <img
        src={image}
        srcSet={(`${image} 1x`, `${image2} 2x`, `${image3} 3x`)}
        alt={title}
      />
      <div>
        <h2>{title}</h2>
        <h3>{variation}</h3>
        <p>{description}</p>
        {description2 && <button onClick={toggleReadMore}>Read More</button>}
        {description2 && readMoreStatus && <p>{description2}</p>}
      </div>
      <div>
        <div>{formatCurrency(cost)}/ea.</div>
        <button onClick={() => handleAddToCart(id)}>+ Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
