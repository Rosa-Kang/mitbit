import React, { useState } from "react";
import styled from "styled-components";
import Cart from "../../Cart/Cart";
import { HiPlusCircle } from "react-icons/hi";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnLeft = styled.section`
  display: flex;
  align-items: center;

  img {
    width: 160px;
    height: 180px;
    object-fit: contain;
  }
`;

const ColumnRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
`;
const Plus = styled(HiPlusCircle)`
  cursor: pointer;
  height: 38px;
  width: 38px;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Product = ({ item, index }) => {
  const [modal, setModal] = useState(false);
  const [addId, setAddId] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setAddId(e.target.id);
    console.log(addId);
    setModal(true);
  };

  return (
    <>
      <Wrapper key={index}>
        <p>{item.name}</p>
        <Columns>
          <ColumnLeft>
            <img src={item.image} alt={item.name} />
          </ColumnLeft>
          <ColumnRight>
            <p>{item.price}</p>
            <Plus id={item.id} primary="true" onClick={handleChange} />
            <p>Add</p>
          </ColumnRight>
        </Columns>
      </Wrapper>
      {modal && <Cart />}
    </>
  );
};

export default Product;
