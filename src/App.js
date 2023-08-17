import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/details" component={DetailsPage} />
        <Route path="/shoppingcart" component={ShoppingCartPage} />
      </Switch>
    </Router>
  );
}

export default App;
