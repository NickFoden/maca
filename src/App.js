import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import NavHeader from "./components/NavHeader";

function App() {
  const [currentCart, setCart] = useState({ items: [] });
  const addToCart = id => {
    setCart({ items: [...currentCart.items, id] });
  };
  return (
    <Router>
      <NavHeader currentCart={currentCart} />
      <Route
        exact
        path="/"
        render={props => (
          <Menu {...props} currentCart={currentCart} addToCart={addToCart} />
        )}
      />
      <Footer />
    </Router>
  );
}

export default App;
