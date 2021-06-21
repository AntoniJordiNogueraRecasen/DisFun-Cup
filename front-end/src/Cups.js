import "./style/App.css";
import React from "react";
import "./style/bootstrap.min.css";
import { Button } from "reactstrap";
import "./style/features.css";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function Lol() {
  return (
    <>
      <div class="col fondo">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg fondoLol">
          <div>
            <Link to="/apuntado" className="linkToSee rainbow-button">
              Apuntate
            </Link>
            <div className="linkToSeeDiv">
              <Link to="/torneo" className="linkToSee">
                VER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Clash() {
  return (
    <>
      <div class="col fondo">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg fondoClash">
          <div>
            <Link to="/apuntado" className="linkToSee rainbow-button">
              Apuntate
            </Link>
            <div className="linkToSeeDiv">
              <Link to="/torneo" className="linkToSee">
                VER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Fifa() {
  return (
    <>
      <div class="col fondo">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg fondoFifa">
          <div>
            <Link to="/apuntado" className="linkToSee rainbow-button">
              Apuntate
            </Link>
            <div className="linkToSeeDiv">
              <Link to="/torneo" className="linkToSee">
                VER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Pubg() {
  return (
    <>
      <div class="col fondo">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg fondoPUBG">
          <div>
            <Link to="/apuntado" className="linkToSee rainbow-button">
              Apuntate
            </Link>
            <div className="linkToSeeDiv">
              <Link to="/torneo" className="linkToSee">
                VER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function GTS() {
  return (
    <>
      <div class="col fondo">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg fondoGTS">
          <div>
            <Link to="/apuntado" className="linkToSee rainbow-button">
              Apuntate
            </Link>
            <div className="linkToSeeDiv">
              <Link to="/torneo" className="linkToSee">
                VER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Fortnite() {
  return (
    <>
      <div class="col fondo ">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg fondoFortnite ">
          <div>
            <Link to="/apuntado" className="linkToSee rainbow-button">
              Apuntate
            </Link>
            <div className="linkToSeeDiv">
              <Link to="/torneo" className="linkToSee">
                VER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Cups() {
  return (
    <>
      <main>
        <div class="container">
          <div class="container px-4 py-5" id="custom-cards">
            <h1 class="titulo">Torneos</h1>
            <hr></hr>

            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
              <Fortnite />
              <Lol />
              <Clash />
              <Fifa />
              <Pubg />

              <GTS />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cups;
