import React, { Fragment } from "react";

// import "../styles/app.css";
import "../styles/list.css";

const Frontendframeworks = () => {
  return (
    <Fragment>
      <div className="row">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Front-End Technologies</h1>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">
                  <a href="https://reactjs.org/" target="_blank">
                    React
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://vuejs.org/" target="_blank">
                    Vue.js
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://code.visualstudio.com/" target="_blank">
                    Angular
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://getbootstrap.com/" target="_blank">
                    Bootstrap
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://material.io/" target="_blank">
                    Material
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://materializecss.com/" target="_blank">
                    Materialize CSS
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
                  <a href="https://jquery.com/" target="_blank">
                    jQuery
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://sass-lang.com/" target="_blank">
                    Sass
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="http://lesscss.org/" target="_blank">
                    Less
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://handlebarsjs.com/" target="_blank">
                    Handlebars
                  </a>
                </li>
                {/* <li className="list-group-item list-group-item-action">
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

export default Frontendframeworks;
