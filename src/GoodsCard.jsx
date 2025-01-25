import React from "react";
function GoodsCard({ image, title, price }) {
  return (
    <div>
      <img
        src={image}
        alt={title}
        style={{ height: "10rem", width: "10rem" }}
      />
      <h3>{title}</h3>
      <p>{price} грн</p>
    </div>
  );
}

export default GoodsCard;
