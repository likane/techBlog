import React, { Fragment } from "react";

// import "../styles/app.css";
import "../styles/list.css";

const PackageManagers = () => {
  return (
    <Fragment>
      <div className="row">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Package Managers</h1>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">
                  <a href="https://rpm.org/" target="_blank">
                    RPM
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.nuget.org/" target="_blank">
                    NuGet
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://getcomposer.org/" target="_blank">
                    Composer
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="http://yum.baseurl.org/index.html" target="_blank">
                    yum
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.archlinux.org/pacman/" target="_blank">
                    Pacman
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.npmjs.com/" target="_blank">
                    NPM
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://cocoapods.org/" target="_blank">
                    CocoaPods
                  </a>
                </li>
                {/* <li className="list-group-item list-group-item-action">
                  <a href="http://lighttable.com/" target="_blank">
                    Lighttable
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="http://bluegriffon.org/" target="_blank">
                    BlueGriffon
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">
                  <a href="https://pypi.org/project/pip/" target="_blank">
                    pip
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://brew.sh/" target="_blank">
                    Homebrew
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://rubygems.org/" target="_blank">
                    RubyGems
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://chocolatey.org/" target="_blank">
                    Chocolatey
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.anaconda.com/" target="_blank">
                    Anaconda
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.macports.org/" target="_blank">
                    MacPorts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default PackageManagers;
