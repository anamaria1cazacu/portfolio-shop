import "./cart.css";
import shop from "../../data/shop.json";

function Cart() {
  return (
    <div className="">
      <ul>
        {shop.map((shop, index) => (
          <li key={index}>
            <h2>{shop.name}</h2>
            <img alt={"Preview"} src={shop.preview} />
            <p>Description: {shop.description || "No description available"}</p>
            <p>Price: {shop.price || "No price available"}</p>
            <p>Review: {shop.review || "No review available"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
