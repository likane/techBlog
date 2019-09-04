import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
//<Kane Development/>
import TopNav from "./components/layout/TopNav";
import Landing from "./components/layout/Landing";
import Sidebar from "./components/layout/Sidebar";
import CodeEditors from "./components/CodeEditors";
import Ide from "./components/Ide";
import Frontend from "./components/Frontendframeworks";
import Backend from "./components/Backendframeworks";
import PackageManagers from "./components/PackageManagers";

// import logo from "./logo.svg";
// import "./App.css";

import "./styles/app.css";

const trackingId = "UA-146619496-2";

ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Router>
      <Fragment>
        <TopNav />
        <Sidebar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/codeeditors" component={CodeEditors} />
          <Route exact path="/ide" component={Ide} />
          <Route exact path="/frontendframeworks" component={Frontend} />
          <Route exact path="/backendframeworks" component={Backend} />
          <Route exact path="/packagemanagers" component={PackageManagers} />
          {/*<Route exact path="/Area" component={Area} />
          <Route exact path="/weight" component={Weight} /> */}
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
