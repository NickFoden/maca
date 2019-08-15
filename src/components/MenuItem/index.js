import React, { Fragment, useState } from "react";
import { formatCurrency } from "../../utils/currencyConvert";
import "./menuItemStyles.scss";

const MenuItem = ({ item, addToCart }) => {
  const [readMoreStatus, updateReadMore] = useState(false);
  const [ordered, updateOrder] = useState(false);
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
    updateOrder(true);
    addToCart(id);
    setTimeout(() => {
      updateOrder(false);
    }, 1000);
  };

  return (
    <Fragment>
      <div className="MenuItem_container">
        <img
          className="MenuItem_image"
          src={image}
          srcSet={`${image} 1x, ${image2} 2x, ${image3} 3x`}
          alt={title}
        />
        <div className="MenuItem_text">
          <h2>{title}</h2>
          <h3>{variation}</h3>
          <p>{description}</p>
          {description2 && !readMoreStatus && (
            <button
              className="MenuItem_text_read_button"
              onClick={toggleReadMore}
            >
              Read More
            </button>
          )}
          {description2 && readMoreStatus && (
            <Fragment>
              <p>{description2}</p>
              <button
                className="MenuItem_text_read_button"
                onClick={toggleReadMore}
              >
                Read Less
              </button>
            </Fragment>
          )}
        </div>
        <div className="MenuItem_button_div">
          <p>${formatCurrency(cost)}/ea.</p>
          {!ordered ? (
            <button onClick={() => handleAddToCart(id)}>+ Add to Cart</button>
          ) : (
            <button id="MenuItem_button_ordered">✔ Added to Cart</button>
          )}
        </div>
      </div>
      <hr className="MenuItem_hr" />
    </Fragment>
  );
};

export default MenuItem;
