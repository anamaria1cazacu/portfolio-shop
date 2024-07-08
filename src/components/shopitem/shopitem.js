import "./shopitem.css";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useCart } from "../../utilities/shopingcartcontext";

export function ShopItem({ id, name, description, price, preview }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={preview}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text d-flex align-item-baseline mb-4 flex-column">
          <span className="d-flex flex-row justify-content-between">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-info">{formatCurrency(price)}</span>
          </span>
          <span className="">{description}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div className="text">
                  <span className="fs-3">{quantity}</span>in Cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
          ;
        </div>
      </Card.Body>
    </Card>
  );
}
