import React, { Fragment } from "react";

import "../../styles/app.css";

const Sidebar = () => {
  return (
    <Fragment>
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky ">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span data-feather="home"></span>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/codeeditors">
                <span data-feather="file"></span>
                Code Editors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ide">
                <span data-feather="shopping-cart"></span>
                IDE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/backendframeworks">
                <span data-feather="users"></span>
                Back-End
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/frontendframeworks">
                <span data-feather="bar-chart-2"></span>
                Front-End
              </a>
            </li>
          </ul>
          {/* <li className="nav-item">
              <a className="nav-link" href="packagemanagers">
                <span data-feather="layers"></span>
                Package Managers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="npm">
                <span data-feather="file-text"></span>
                NPM
              </a>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Theory</span>
            <a className="d-flex align-items-center text-muted" href="#">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <a className="nav-link" href="">
                <span data-feather="file-text"></span>
                Last quarter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Social engagement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Year-end sale
              </a>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Environments</span>
            <a className="d-flex align-items-center text-muted" href="#">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <a className="nav-link" href="npm">
                <span data-feather="file-text"></span>
                Microsoft
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <span data-feather="file-text"></span>
                ASP.NET
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Android
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Linux
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                iOS
              </a>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Resources</span>
            <a className="d-flex align-items-center text-muted" href="#">
              <span data-feather="plus-circle"></span>
            </a>
          </h6> */}
          {/* <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <a className="nav-link" href="npm">
                <span data-feather="file-text"></span>
                Microsoft
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <span data-feather="file-text"></span>
                ASP.NET
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Android
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                Linux
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                iOS
              </a>
            </li>
          </ul> */}
        </div>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
