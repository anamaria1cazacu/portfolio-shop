import React, { useContext } from "react";
import { CartContext } from "../../components/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <img alt="{Item}" src="{item.preview}" />
            <p>
              {item.name} - Quantity: {item.quantity}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
