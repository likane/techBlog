import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faWindowRestore,
  faFileCode,
  faLaptopCode,
  faNetworkWired
} from "@fortawesome/free-solid-svg-icons";

import "../../styles/app.css";
import "../../styles/list.css";
const Landing = () => {
  return (
    <Fragment>
      <div className="row">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">codeShelf</h1>
          </div>

          <div class="aboutSection row">
            <div class="col-12">
              <h4>More Coding, Less Searching.</h4>
              <h6>
                Setting up your environment is half the battle. Let's it a
                little easier.{" "}
              </h6>
            </div>
          </div>

          <div className="row detailsSection">
            <div className="col-6">
              <h6>Made with developers in mind.</h6>
              <p>
                codeShelf hopes to collect notable tools and resources for easy
                discovery
              </p>
            </div>
            <div className="col-6">
              <h6>Used by everyone.</h6>
              <p>
                Learning to code? Curious what tools us developer's like to use?
                codeShelf is for you too.
              </p>
            </div>
          </div>

          <div className="genreSection row">
            <div className="col-3">
              <h4>
                <FontAwesomeIcon icon={faWindowRestore} />
              </h4>
              <p>IDE's</p>
            </div>
            <div className="col-3">
              <h4>
                <FontAwesomeIcon icon={faFileCode} />
              </h4>
              <p>Environments</p>
            </div>
            <div className="col-3">
              <h4>
                <FontAwesomeIcon icon={faNetworkWired} />
              </h4>
              <p>Theory</p>
            </div>
            <div className="col-3">
              <h4>
                <FontAwesomeIcon icon={faLaptopCode} />
              </h4>
              <p>Frameworks</p>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Landing;
