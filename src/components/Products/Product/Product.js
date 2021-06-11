import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../../../redux/Shopping/shopping-actions";
import { HiPlusCircle } from "react-icons/hi";

import { connect } from "react-redux";

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

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const id = item.id;
  const handleClick = () => {
    dispatch(addToCart(id));
  };

  return (
    <>
      <Wrapper key={item.id}>
        <p>{item.name}</p>
        <Columns>
          <ColumnLeft>
            <img src={item.image} alt={item.name} />
          </ColumnLeft>
          <ColumnRight>
            <p>$ {item.price}</p>
            <Plus primary="true" alias={item.id} onClick={handleClick} />
            <p>Add</p>
          </ColumnRight>
        </Columns>
      </Wrapper>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapDispatchToProps)(Product);
