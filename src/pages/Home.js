import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { menuData } from "../data/MenuData";

const Home = () => {
  return (
    <>
      <Header menuData={menuData} />
      <Main menuData={menuData} />
    </>
  );
};

export default Home;
