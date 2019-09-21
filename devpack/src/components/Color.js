import React, { Fragment } from "react";

// import "../styles/app.css";
import "../styles/list.css";

const Color = () => {
  return (
    <Fragment>
      <div className="row">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Color and Icons</h1>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">
                  <a
                    href="https://www.canva.com/colors/color-wheel/                    "
                    target="_blank"
                  >
                    Canva
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a
                    href="https://www.npmjs.com/package/mongojs"
                    target="_blank"
                  >
                    Mongojs
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://nodemon.io/" target="_blank">
                    Nodemon
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://ionicons.com/" target="_blank">
                    Ionicons
                  </a>
                </li>
                {/* <li className="list-group-item list-group-item-action">
                  <a href="http://www.jedit.org/" target="_blank">
                    Jedit
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://macromates.com/" target="_blank">
                    TextMate
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
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
                {/* <li className="list-group-item list-group-item-action">
                  <a href="https://www.jetbrains.com/" target="_blank">
                    Jetbrains Suite
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.eclipse.org/" target="_blank">
                    Eclipse
                  </a>
                </li> */}
                {/* <li className="list-group-item list-group-item-action">
                  <a href="https://www.vim.org/" target="_blank">
                    Vim
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.geany.org/" target="_blank">
                    Geany
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a
                    href="https://www.activestate.com/products/komodo-edit/"
                    target="_blank"
                  >
                    komodo Edit
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.gnu.org/software/emacs/" target="_blank">
                    Emacs
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://wiki.gnome.org/Apps/Gedit" target="_blank">
                    Gedit
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Color;
