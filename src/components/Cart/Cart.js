import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import styled from "styled-components";
import axios from "axios";

const url = "http://localhost:3000/data/data.json";

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
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log("Fetch", err);
    });
    dispatch(setProducts(response.data));
    console.log(product);
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartContainer>
      <h1> HELLO WORLD</h1>
      {/* {product.map((item, index) => (
        <CartItems key={index}>
          <h1>{item.name}</h1>
        </CartItems>
      ))} */}
    </CartContainer>
  );
};

export default Cart;
