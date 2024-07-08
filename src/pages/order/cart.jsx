import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../../utilities/shopingcartcontext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { CartItem } from "../../components/cartitem/cartitem";
import storeItems from "../../data/shop.json";

function Cart({ isOpen }) {
  const { closeCart, cartItems } = useCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text">Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="text">
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
