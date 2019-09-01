import React, { Fragment } from "react";

import "../styles/app.css";

const CodeEditors = () => {
  return (
    <Fragment>
      <div className="row">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Code Editors</h1>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">
                  Cras justo odio
                </li>
                <li className="list-group-item list-group-item-action">
                  Dapibus ac facilisis in
                </li>
                <li className="list-group-item list-group-item-action">
                  Morbi leo risus
                </li>
                <li className="list-group-item list-group-item-action">
                  Porta ac consectetur ac
                </li>
                <li className="list-group-item list-group-item-action">
                  Vestibulum at eros
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">
                  Cras justo odio
                </li>
                <li className="list-group-item list-group-item-action">
                  Dapibus ac facilisis in
                </li>
                <li className="list-group-item list-group-item-action">
                  Morbi leo risus
                </li>
                <li className="list-group-item list-group-item-action">
                  Porta ac consectetur ac
                </li>
                <li className="list-group-item list-group-item-action">
                  Vestibulum at eros
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default CodeEditors;
