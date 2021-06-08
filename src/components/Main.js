import React from "react";
import styled from "styled-components";
import { HiPlusCircle } from "react-icons/hi";

const Section = styled.section`
  padding: 40px 120px;
  color: #dd3333;
`;
const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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

const Main = ({ menuData, id, filtered }) => {
  console.log(menuData, id, filtered);

  if (id === null) {
    return (
      <Section>
        <Container>
          {menuData.map((item, index) => (
            <Wrapper key={index}>
              <p>{item.name}</p>
              <Columns>
                <ColumnLeft>
                  <img src={item.image} alt={item.name} />
                </ColumnLeft>
                <ColumnRight>
                  <p>{item.price}</p>
                  <Plus to="/houses" primary="true" />
                  <p>Add</p>
                </ColumnRight>
              </Columns>
            </Wrapper>
          ))}
        </Container>
      </Section>
    );
  } else {
    return (
      <Section>
        <Container>
          {filtered.map((item, index) => (
            <Wrapper key={index}>
              <p>{item.name}</p>
              <Columns>
                <ColumnLeft>
                  <img src={item.image} alt={item.name} />
                </ColumnLeft>
                <ColumnRight>
                  <p>{item.price}</p>
                  <Plus to="/houses" primary="true" />
                  <p>Add</p>
                </ColumnRight>
              </Columns>
            </Wrapper>
          ))}
        </Container>
      </Section>
    );
  }
};

export default Main;
