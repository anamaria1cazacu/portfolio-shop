import "./App.css";
import Navigation from "./components/navigation/navigation";
import Home from "../src/pages/home/home";
import Portfolio from "../src/pages/portfolio/portfolio";
import Shop from "../src/pages/shop/shop";
import Contact from "../src/pages/contact/contact";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./utilities/shopingcartcontext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
