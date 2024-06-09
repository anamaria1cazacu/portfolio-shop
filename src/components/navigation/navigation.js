import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/portfolio">Portfolio</CustomLink>
      <CustomLink to="/shop">Shop</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>
      <CustomLink to="/cart">Cart</CustomLink>
    </nav>
  );
}

export default Navigation;

function CustomLink({ to, children, ...props }) {
  const path = window.Location.pathname;
  return (
    <Link className={path === to ? "active" : ""} to={to}>
      {children}
    </Link>
  );
}
