import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

const URL = "http://localhost:3000/data/data.json";

const Home = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setMenuData(res.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <>
      <Header menuData={menuData} />
      <Main menuData={menuData} />
    </>
  );
};

export default Home;
