import React, { Fragment } from "react";

// import "../styles/app.css";
import "../styles/list.css";

const Backendframeworks = () => {
  return (
    <Fragment>
      <div className="row">
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Back-End Technologies</h1>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">
                  <a
                    href="https://www.oracle.com/database/technologies/appdev/sql-developer.html"
                    target="_blank"
                  >
                    Oracle SQL Developer
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.jetbrains.com/datagrip/" target="_blank">
                    DataGrip
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.dbvis.com/" target="_blank">
                    Db Visualizer
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://teamsql.io/" target="_blank">
                    TeamSQL
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a
                    href="https://www.allroundautomations.com/plsqldev.html"
                    target="_blank"
                  >
                    PL / SQL Developer
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.red-gate.com/products/" target="_blank">
                    Red Gate SQL Server
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://dbeaver.io/" target="_blank">
                    DBeaver
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.devart.com/dbforge/" target="_blank">
                    DBForge
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">
                  <a
                    href="https://www.webyog.com/product/monyog"
                    target="_blank"
                  >
                    Monyog
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a
                    href="https://github.com/tora-tool/tora/wiki"
                    target="_blank"
                  >
                    Tora
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.quest.com/toad/" target="_blank">
                    Toad
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a
                    href="https://github.com/huggingface/Mongoku"
                    target="_blank"
                  >
                    Mongoku
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.mongodb.com/" target="_blank">
                    mongo DB
                  </a>
                </li>
                <li className="list-group-item list-group-item-action">
                  <a href="https://www.getpostman.com/" target="_blank">
                    Postman
                  </a>
                </li>
                {/* <li className="list-group-item list-group-item-action">
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

export default Backendframeworks;
