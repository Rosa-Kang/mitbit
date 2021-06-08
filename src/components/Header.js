import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Main from "../components/Main";

const Greater = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: center;
  background-color: #fff;
  margin-top: 0px;
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
`;

const Header = ({ menuData }) => {
  const [id, setId] = useState(null);

  const uniqueMenu = menuData.filter((item, i) => {
    return (
      menuData.findIndex((item2, j) => {
        return item.category === item2.category;
      }) === i
    );
  });

  const select = (e) => {
    e.preventDefault();

    setId(e.target.id);
  };

  const reset = () => {
    setId(null);
  };

  const filtered = menuData.filter((li) => li.category === id);
  console.log(menuData, filtered);
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
              id={item.category}
            >
              {item.category}
            </NavMenuLinks>
          ))}
        </NavMenu>
      </Greater>
      <Main menuData={menuData} id={id} filtered={filtered} />
    </>
  );
};

export default Header;
