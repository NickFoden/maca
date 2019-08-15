import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Menu from "./pages/Menu";
import NavHeader from "./components/NavHeader";

function App() {
  const [currentCart, setCart] = useState({ items: [] });
  const [cartVisible, setCartVisibility] = useState(true);
  const addToCart = id => {
    setCart({ items: [...currentCart.items, id] });
  };
  const toggleCartView = () => {
    setCartVisibility(!cartVisible);
  };
  return (
    <Router>
      <NavHeader currentCart={currentCart} toggleCartView={toggleCartView} />
      <Cart visibility={cartVisible} toggleCartView={toggleCartView} />
      <Layout>
        <Route
          exact
          path="/"
          render={props => (
            <Menu {...props} currentCart={currentCart} addToCart={addToCart} />
          )}
        />
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
