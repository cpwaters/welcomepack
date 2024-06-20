/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import { Home } from "./pages/Home";
import { GetAllProducts } from "./data/products";
import { ProductDetails } from "./pages/product-details";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route path={"/"} component={Home} />
      <Route path={"/products"} component={GetAllProducts} />
      <Route path={"/products/:id"} component={ProductDetails} />
    </Router>
  ),
  root!
);
