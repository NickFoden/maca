import React, { useState } from "react";
import "./styles.scss";

const MenuItem = ({ item }) => {
  const [readMoreStatus, updateReadMore] = useState(false);
  const {
    cost,
    description,
    description2,
    image,
    image2,
    image3,
    title,
    variation
  } = item;

  const toggleReadMore = () => {
    updateReadMore(!readMoreStatus);
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
      <button>{cost}/ each</button>
    </div>
  );
};

export default MenuItem;
