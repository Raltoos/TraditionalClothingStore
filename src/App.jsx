import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";
import { useState } from "react";

function App() {
  const [style, setStyle] = useState("All");

  return (
    <CartContextProvider>
      <Header />
      <div id="category-container">
        <ul id="category-list">
          <li
            className={`category-item ${style === "All" ? "active" : ""}`}
            onClick={() => setStyle("All")}
          >
            All
          </li>
          <li
            className={`category-item ${
              style === "North Indian" ? "active" : ""
            }`}
            onClick={() => setStyle("North Indian")}
          >
            North Indian
          </li>
          <li
            className={`category-item ${
              style === "South Indian" ? "active" : ""
            }`}
            onClick={() => setStyle("South Indian")}
          >
            South Indian
          </li>
          <li
            className={`category-item ${
              style === "Rajasthani" ? "active" : ""
            }`}
            onClick={() => setStyle("Rajasthani")}
          >
            Rajasthani
          </li>
          <li
            className={`category-item ${style === "Kashmiri" ? "active" : ""}`}
            onClick={() => setStyle("Kashmiri")}
          >
            Kashmiri
          </li>
        </ul>
      </div>

      <Shop>
        {DUMMY_PRODUCTS.filter(
          (product) => style === "All" || product.traditionStyle === style
        ).map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
