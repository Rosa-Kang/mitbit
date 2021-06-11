import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadCurrentItem } from "../../redux/Shopping/shopping-actions";

// import { RiArrowUpSLine } from "react-icons/ri";
// import { RiArrowDownSLine } from "react-icons/ri";
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartContainer = styled.section`
  border-radius: 100px;
  color: #dd3333;
  background-color: #ffffdb;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  position: fixed;
  padding-top: 30px;
  bottom: 0;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;

  img {
    width: 200px;
    height: 200px;
  }
`;

const Cart = () => {
  const product = useSelector((state) => state.shop.cart);
  const dispatch = useDispatch();

  const fetchCart = async () => {
    await dispatch(loadCurrentItem(product));
    console.log(product);
  };

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <Wrapper>
      <CartContainer>
        {product.map((item) => (
          <CartItems key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <p>{item.qty}</p>
          </CartItems>
        ))}
      </CartContainer>
    </Wrapper>
  );
};

export default Cart;
