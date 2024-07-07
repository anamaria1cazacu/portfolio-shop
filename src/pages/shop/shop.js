import "./shop.css";
import { Col, Row } from "react-bootstrap";
import shop from "../../data/shop.json";
import { ShopItem } from "../../components/shopitem/shopitem";

function Shop() {
  return (
    <div className="content">
      <Row md={2} xs={1} lg={3} className="g-3">
        {shop.map((item) => (
          <Col key={item.id}>
            <ShopItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Shop;
