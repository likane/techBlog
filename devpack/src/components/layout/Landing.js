import React, { Fragment } from "react";

import "../../styles/app.css";
import "../../styles/list.css";
const Landing = () => {
  return (
    <Fragment>
      <div className="row">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">DevPack</h1>
          </div>

          <div class="aboutSection">
            <h4>More Coding, Less Searching.</h4>
            <h6>
              Setting up your environment is half the battle. Let's make this
              step a little easier.{" "}
            </h6>
          </div>

          <div className="card-columns">
            <div className="card">
              {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
              <div className="card-body">
                <h5 className="card-title">Code Editors</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div className="card p-3">
              {/* <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote> */}
              <div className="card-body">
                <h5 className="card-title">NPM Packages</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div className="card">
              {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
              <div className="card-body">
                <h5 className="card-title">ASP.NET</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">IDE's</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
            </div>
            {/* <div className="card bg-primary text-white text-center p-3">
              <blockquote className="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat.
                </p>
                <footer className="blockquote-footer">
                  <small>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div> */}
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Database Management Tools</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card">
              {/* <img className="card-img" src="..." alt="Card image"> */}
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">IDE's</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">IDE's</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Landing;
