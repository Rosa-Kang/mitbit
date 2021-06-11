import React from "react";
import Navbar from "../components/Nav/Navbar";
import Cart from "../components/Cart/Cart";
import { connect } from "react-redux";

const Home = ({ products, cart }) => {
  return (
    <>
      <Navbar products={products} />
      {cart.length > 0 && <Cart cart={cart} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Home);
