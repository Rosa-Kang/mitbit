import React from "react";
import Navbar from "../components/Nav/Navbar";

const Home = ({ menuData }) => {
  return (
    <>
      <Navbar menuData={menuData} />
    </>
  );
};

export default Home;
