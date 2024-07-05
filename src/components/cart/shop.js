import React, { useContext } from "react";
import "./shop.css";
import shop from "../../data/shop.json";
import { CartContext } from "../../components/CartContext";

function Shop() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="content">
      {shop.map((shopItem, index) => (
        <div key={index} className="shop-item">
          <h2>{shopItem.name}</h2>
          <img alt="Preview" src={shopItem.preview} />
          <p>
            Description: {shopItem.description || "No description available"}
          </p>
          <p>Price: {shopItem.price || "No price available"}</p>
          <p>Review: {shopItem.review || "No review available"}</p>
          <button onClick={() => addToCart(shopItem)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
