import React, { Fragment } from "react";

// import "../styles/app.css";
import "../styles/list.css";

const Frontendlib = () => {
  return (
    <Fragment>
      <div className="row">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Front End Libraries</h1>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">
                  <a href="https://placem.at/" target="_blank">
                    Placem
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://ianlunn.github.io/Hover/" target="_blank">
                    Hover
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://gka.github.io/chroma.js/" target="_blank">
                    Chroma.js
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a
                    href="https://daneden.github.io/animate.css/"
                    target="_blank"
                  >
                    Animate
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://coolors.co/" target="_blank">
                    Coolors
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://jonsuh.com/hamburgers/" target="_blank">
                    Hamburgers
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://placekitten.com/" target="_blank">
                    Placekitten
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.styled-components.com/" target="_blank">
                    Styled Components
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">
                  <a href="https://materializecss.com/" target="_blank">
                    materializecss
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://sass-lang.com/" target="_blank">
                    Sass
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="http://mustache.github.io/" target="_blank">
                    Mustache
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="http://lesscss.org/" target="_blank">
                    Less
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://handlebarsjs.com/" target="_blank">
                    Handlebarsjs
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://placeholder.com/" target="_blank">
                    Placeholder
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://balsamiq.com/" target="_blank">
                    Balsamiq
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

export default Frontendlib;
