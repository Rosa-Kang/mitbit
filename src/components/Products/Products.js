import React from "react";
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

const Products = ({ products, name, filtered }) => {
  if (name === null) {
    return (
      <>
        <Section>
          <Container>
            {products.map((item) => (
              <Product item={item} key={item.id} />
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
            {filtered.map((item) => (
              <Product item={item} />
            ))}
          </Container>
        </Section>
      </>
    );
  }
};

export default Products;
