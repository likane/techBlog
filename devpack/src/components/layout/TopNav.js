import React, { Fragment } from "react";

import "../../styles/app.css";

const TopNav = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
          DevPack
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Code Editors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                IDE's
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Front-End
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Back-End
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Wordpress
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default TopNav;
