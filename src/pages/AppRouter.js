import React from "react";
import { Route } from "react-router-dom";
// import Product from "../components/Product";
import Details from "../components/Details";
import Products from "../components/Products";
import Cart from "./Cart";
import About from "./About";
import Checkout from "./Checkout";
import Login from "./login/Login";
import Register from "./register/Register";
import Navbar from "../components/Navbar";
import Admin from "./admin/Admin";


const Sections = () => {
  return (
    

    <section>
        <Navbar/>
      <div className="inner-section">
        <Route path="/" component={Products} exact />
        {/* <Route path="/product" component={Details} exact /> */}
        <Route path="/details/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={Admin} />
      </div>
    </section>
   
  );
};

export default Sections;
