import React from "react";
import styled from "styled-components";
// import { RiArrowUpSLine } from "react-icons/ri";
// import { RiArrowDownSLine } from "react-icons/ri";

const CartContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CartItems = styled.div`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border: 1px solid #dd3333;
  padding-top: 30px;
  position: fixed;
  bottom: 0;
  width: 80%;
  background-color: #f4fcbf;
  height: 5vw;
`;

const Cart = () => {
  return (
    <CartContainer>
      <CartItems>
        <h1>SHOPPING CART HERE!</h1>
      </CartItems>
    </CartContainer>
  );
};

export default Cart;
