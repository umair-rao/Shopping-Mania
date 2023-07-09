import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CartTotalComponent from "./components/CartTotalComponent";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const navIncrement = () => {
    setCount(count + 1);
  };

  const navDecrement = () => {
    setCount(count -1 );
  };

  return (
    <>
      <Router>
        <Navbar count={count} />
        <div>
          <Switch>
            <Route exact path="/">
              <Products handleClick={handleClick} />
            </Route>
            <Route exact path="/cart">
              <CartTotalComponent navIncrement={navIncrement} navDecrement={navDecrement} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
