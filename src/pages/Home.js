import React from "react";
import { Route } from "react-router-dom";
// import Product from "../components/Product";
import Details from "../components/Details";
import Products from "../components/Products";

const Sections = () => {
  return (
    <section>
      <Route path="/" component={Products} exact />
      {/* <Route path="/product" component={Details} exact /> */}
      <Route path="/details/:id" component={Details} />
    </section>
  );
};

export default Sections;
