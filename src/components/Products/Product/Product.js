import React from "react";
import styled from "styled-components";

import { HiPlusCircle } from "react-icons/hi";

// import Cart from "../../Cart/Cart";
// import { useDispatch, useSelector } from "react-redux";

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
  // const [alias, setAlias] = useState();
  // const dispatch = useDispatch();
  const clickHandler = (e) => {
    const info = e.currentTarget.getAttribute("alias");
    console.log(info);
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
            <p>{item.price}</p>
            <Plus primary="true" alias={item.id} onClick={clickHandler} />
            <p>Add</p>
          </ColumnRight>
        </Columns>
      </Wrapper>
    </>
  );
};

export default Product;
