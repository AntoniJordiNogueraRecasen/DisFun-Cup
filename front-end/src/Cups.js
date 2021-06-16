import "./style/App.css";
import React from "react";
import "./style/bootstrap.min.css";
import { Button } from "reactstrap";
import "./style/features.css";

function Lol() {
  return (
    <>
      <div class="col fondo">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg fondoLol">
          <div>
            <a href="#" class="rainbow-button">
              Apuntate
            </a>
            <Button>
              <a>Ver</a>
            </Button>
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
            <a href="#" class="rainbow-button">
              Apuntate
            </a>
            <Button>
              <a>Ver</a>
            </Button>
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
            <a href="#" class="rainbow-button">
              Apuntate
            </a>
            <Button>
              <a>Ver</a>
            </Button>
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
            <a href="#" class="rainbow-button">
              Apuntate
            </a>
            <Button>
              <a>Ver</a>
            </Button>
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
            <a href="#" class="rainbow-button">
              Apuntate
            </a>
            <Button>
              <a>Ver</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
function Fortnite() {
  return (
    <>
      <div class="col fondo">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg fondoFortnite">
          <div>
            <a href="#" class="rainbow-button">
              Apuntate
            </a>
            <Button>
              <a>Ver</a>
            </Button>
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
            <h2 class="pb-2 border-bottom">Torneos</h2>

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
