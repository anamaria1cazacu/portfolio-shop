import "./navigation.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/home/home";
import Portfolio from "../../pages/portfolio/portfolio";
import Shop from "../../pages/shop/shop";
import Contact from "../../pages/contact/contact";

const router = BrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/shop", element: <Shop /> },
  { path: "/contact", element: <Contact /> },
]);

function Navigation() {
  return <RouterProvider router={router} />;
}

export default Navigation;
