import React, { useState } from "react";
import styled from "styled-components";
import Product from "./Product/Product";

const Section = styled.section`
  padding: 40px 120px;
  color: #dd3333;
`;
const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = ({ menuData, id, filtered }) => {
  if (id === null) {
    return (
      <>
        <Section>
          <Container>
            {menuData.map((item, index) => (
              <Product item={item} index={index} />
            ))}
          </Container>
        </Section>
      </>
    );
  } else {
    return (
      <>
        <Section>
          <Container>
            {filtered.map((item, index) => (
              <Product item={item} index={index} />
            ))}
          </Container>
        </Section>
      </>
    );
  }
};

export default Products;
