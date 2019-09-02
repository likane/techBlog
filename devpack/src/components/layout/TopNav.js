import React, { Fragment } from "react";

import "../../styles/app.css";

const TopNav = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
          DevPak
        </a>
      </nav>
    </Fragment>
  );
};

export default TopNav;
