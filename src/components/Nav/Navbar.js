import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import axios from "axios";

const url = "http://localhost:3000/data/data.json";

const Greater = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Head = styled.header`
  font-size: 60px;
  display: flex;
  justify-content: center;
  background-color: #dd3333;
  padding: 1rem 2rem;
  z-index: 100;
  width: 100%;
`;

const Logo = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-family: "Grand Hotel", cursive;
  text-decoration: none;
  text-align: center;
`;

const NavMenu = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  margin-top: 0px;

  @media screen and (max-width: 860px) {
    width: 80%;
    overflow: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const NavMenuLinks = styled.li`
  cursor: pointer;
  border: 1px solid #dd3333;
  color: #dd3333;
  font-family: "Roboto", sans-serif;
  list-style: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    background-color: #dd3333;
    color: #fff;
  }

  &:focus {
    background-color: #dd3333;
    color: #fff;
  }

  @media screen and (max-width: 860px) {
    display: inline-block;
  }
`;

const Navbar = () => {
  const [name, setName] = useState(null);

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log("Fetch", err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const uniqueMenu = products.filter((item, i) => {
    return (
      products.findIndex((item2, j) => {
        return item.category === item2.category;
      }) === i
    );
  });

  const select = (e) => {
    e.preventDefault();

    setName(e.target.getAttribute("name"));
    console.log(name);
  };

  const reset = () => {
    setName(null);
  };

  const filtered = products.filter((li) => li.category === name);

  return (
    <>
      <Greater>
        <Head>
          <Logo to="/" onClick={reset}>
            MitBit
          </Logo>
        </Head>
        <NavMenu>
          {uniqueMenu.map((item) => (
            <NavMenuLinks
              onClick={select}
              key={item.category}
              name={item.category}
            >
              {item.category}
            </NavMenuLinks>
          ))}
        </NavMenu>
      </Greater>
      <Products products={products} name={name} filtered={filtered} />
    </>
  );
};

export default Navbar;
