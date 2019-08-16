import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Menu from "./pages/Menu";
import NavHeader from "./components/NavHeader";

function App() {
  const [currentCart, setCart] = useState({ items: { a: 2, b: 1 } });
  const [cartVisible, setCartVisibility] = useState(true);

  const addToCart = id => {
    setCart({
      items: {
        ...currentCart.items,
        [id]: currentCart.items[id] ? currentCart.items[id] + 1 : 1
      }
    });
  };

  const removeItem = id => {
    setCart({
      items: {
        ...currentCart.items,
        [id]: currentCart.items[id] ? currentCart.items[id] - 1 : 0
      }
    });
  };

  const toggleCartView = () => {
    setCartVisibility(!cartVisible);
  };

  const totalItems = () => {
    let count = 0;
    for (let oneItem in currentCart.items) {
      count += currentCart.items[oneItem];
    }
    return count;
  };

  return (
    <Router>
      <NavHeader numberInCart={totalItems()} toggleCartView={toggleCartView} />
      <Cart
        currentCartItemsObj={currentCart.items}
        removeItem={removeItem}
        toggleCartView={toggleCartView}
        visibility={cartVisible}
      />
      <Layout>
        <Route
          exact
          path="/"
          render={props => <Menu {...props} addToCart={addToCart} />}
        />
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
