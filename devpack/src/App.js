import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TopNav from "./components/layout/TopNav";
import Landing from "./components/layout/Landing";
import Sidebar from "./components/layout/Sidebar";
import CodeEditors from "./components/CodeEditors";

// import logo from "./logo.svg";
// import "./App.css";

import "./styles/app.css";

function App() {
  return (
    <Router>
      <Fragment>
        <TopNav />
        <Sidebar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/codeeditors" component={CodeEditors} />
          {/*<Route exact path="/Temperature" component={Temperature} />
          <Route exact path="/volume" component={Volume} />
          <Route exact path="/Area" component={Area} />
          <Route exact path="/weight" component={Weight} /> */}
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
