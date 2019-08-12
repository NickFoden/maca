import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import NavHeader from "./components/NavHeader";

function App() {
  const [currentCart, setCart] = useState({ items: [] });

  return (
    <Router>
      <NavHeader currentCart={currentCart} />
      <Route
        exact
        path="/"
        component={Menu}
        currentCart={currentCart}
        setCart={setCart}
      />
      <Footer />
    </Router>
  );
}

export default App;
