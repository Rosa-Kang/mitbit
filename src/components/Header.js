import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

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

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

const NavMenuList = styled.li`
  border: 1px solid #dd3333;
  color: #dd3333;
  font-family: "Roboto", sans-serif;
  list-style-type: none;
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
  const uniqueMenu = menuData.filter((item, i) => {
    return (
      menuData.findIndex((item2, j) => {
        return item.category === item2.category;
      }) === i
    );
  });

  const optionSelected = () => {};

  return (
    <Greater>
      <Head>
        <Logo to="/">MitBit</Logo>
      </Head>
      <NavMenu>
        {uniqueMenu.map((item) => (
          <NavMenuList onClick={optionSelected} key={item.category}>
            {item.category}
          </NavMenuList>
        ))}
      </NavMenu>
    </Greater>
  );
};

export default Header;
