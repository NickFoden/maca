import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Menu from "./pages/Menu";
import OtherPage from "./pages/OtherPage";
import NavHeader from "./components/NavHeader";

function App() {
  const [currentCart, setCart] = useState({ items: {} });
  const [cartVisible, setCartVisibility] = useState(false);

  const addToCart = id => {
    setCart({
      items: {
        ...currentCart.items,
        [id]: currentCart.items[id] ? currentCart.items[id] + 1 : 1
      }
    });
  };

  const checkout = () => {
    setCart({
      items: {}
    });
    toggleCartView();
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
        checkout={checkout}
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
        <Route exact path="/:id" render={props => <OtherPage {...props} />} />
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
