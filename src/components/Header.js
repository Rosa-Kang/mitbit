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

const NavMenuLinks = styled(Link)`
  border: 1px solid #dd3333;
  color: #dd3333;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
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

  return (
    <Greater>
      <Head>
        <Logo to="/">MitBit</Logo>
      </Head>
      <NavMenu>
        {uniqueMenu.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.category}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Greater>
  );
};

export default Header;
