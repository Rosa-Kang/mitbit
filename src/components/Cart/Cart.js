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
  border-top-right-radius: 90px;
  border-top-left-radius: 90px;
  border: 2px solid #dd3333;
  background-color: white;
  color: #dd3333;
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;

  img {
    width: 100px;
    height: 100px;
  }

  .qty {
    background-color: #dd3333;
    position: absolute;
    top: 17%;
    right: 23%;
    color: white;
    padding: 10px 15px;
    border-radius: 50%;
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
            <p>$ {item.price * item.qty}</p>
            <img src={item.image} alt={item.name} />
            <h1>{item.name}</h1>
            <p className="qty">{item.qty}</p>
          </CartItems>
        ))}
      </CartContainer>
    </Wrapper>
  );
};

export default Cart;
