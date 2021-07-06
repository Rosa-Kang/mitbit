import React from "react";
import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";
// import { loadCurrentItem } from "../../redux/Shopping/shopping-actions";

// import { RiArrowUpSLine } from "react-icons/ri";
// import { RiArrowDownSLine } from "react-icons/ri";
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartContainer = styled.section`
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  border: 2px solid #dd3333;
  background-color: white;
  color: #dd3333;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  position: fixed;
  padding: 30px 0px;
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

  .cart,
  .check-out {
    padding: 15px 35px;
    border-radius: 10px;
    margin: 20px 0px 10px;
    background-color: #dd3333;
    color: white;
  }

  .total {
    padding-top: 5px;
    margin-top: 7px;
    border-top: solid 1px;
  }
`;

const Cart = ({ cart }) => {
  // const product = useSelector((state) => state.shop.cart);
  // const dispatch = useDispatch();

  // const fetchCart = async () => {
  //   await dispatch(loadCurrentItem(product));
  //   console.log(product);
  // };

  // useEffect(() => {
  //   fetchCart();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [product]);
  console.log(cart);
  let amount = cart.reduce((prev, curr) => prev.price + curr.price);

  console.log(amount);

  return (
    <Wrapper>
      <CartContainer>
        {cart.map((item) => (
          <CartItems key={item.id}>
            <p>$ {item.price * item.qty}</p>
            <img src={item.image} alt={item.name} />
            <h1>{item.name}</h1>
            <p className="qty">{item.qty}</p>
          </CartItems>
        ))}
        <CartItems>
          {cart.map((curr) => (
            <p className="cost"> $ {curr.cost}</p>
          ))}
          {cart.length && <p>{cart.length}</p>}
          <p className="cart">Go to Cart</p>
          <p className="check-out">Check out</p>
        </CartItems>
      </CartContainer>
    </Wrapper>
  );
};

export default Cart;
