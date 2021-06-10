import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </Router>
  );
}

export default App;
