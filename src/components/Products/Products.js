import React from "react";
// import {useSelector} from 'react-redux';
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
            {products.map((item, index) => (
              <Product item={item} key={index} />
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

// const mapStateToProps = (state) => {
//   return {
//     products: state.shop.products,
//   };
// };

// export default connect(mapStateToProps)(Products);

export default Products;
