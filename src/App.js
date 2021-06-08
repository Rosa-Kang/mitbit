import axios from "axios";
import React, { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Header from "./components/Header";
import GlobalStyle from "./globalStyle";
// import Payment from "./pages/Payment";

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
  }, []);

  return (
    <>
      <GlobalStyle />
      <Home menuData={menuData} />
      {/* <Switch>
        <Route exact path="/" component={Home} menuData={menuData} />
        <Route path="/payment" component={Payment} exact />
      </Switch> */}
    </>
  );
}

export default App;
