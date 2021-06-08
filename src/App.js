import axios from "axios";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import GlobalStyle from "./globalStyle";

const URL = "http://localhost:3000/data/data.json";

function App() {
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
      <GlobalStyle />
      <Header menuData={menuData} />
      <Home menuData={menuData} />
    </>
  );
}

export default App;
