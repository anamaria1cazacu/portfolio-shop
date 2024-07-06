import { Card } from "react-bootstrap";
import { formatCurrency } from "./formatCurrency";

export function ShopItem({ id, name, description, price, preview }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={preview}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex align-item-baseline mb-4 flex-column">
          <span className="d-flex flex-row justify-content-between">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </span>
          <span className="">{description}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
