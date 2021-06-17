import React from "react";
import iconCasa from "./img/house.png";
import "./style/bootstrap.min.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./style/App.css";
function NavCasa() {
  return (
    <Link to="/" class="nav-link px-2">
      <img src={iconCasa} alt="casa" class="icon" />
    </Link>
  );
}
function Who() {
  return (
    <Link to="/who" class="nav-link px-2 ">
      Quienes somos?
    </Link>
  );
}
function Contact() {
  return (
    <Link to="/contact" class="nav-link px-2">
      Contacto
    </Link>
  );
}
function News() {
  return (
    <Link to="/news" class="nav-link px-2">
      Noticias
    </Link>
  );
}
function Cups() {
  return (
    <Link to="/cups" class="nav-link px-2">
      Torneos
    </Link>
  );
}

function Inscribe() {
  return (
    <Link to="/login" class="nav-link px-2">
      Entrar
    </Link>
  );
}
function Subscribe() {
  return (
    <Link to="/cover" class="nav-link px-2">
      Registrar
    </Link>
  );
}

function NavTop() {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <NavCasa />
              </li>
              <li class="nav-item">
                <News />
              </li>
              <li class="nav-item">
                <Contact />
              </li>
              <li class="nav-item">
                <Who />
              </li>
              <li class="nav-item">
                <Cups />
              </li>
              <div className="sign">
                <Inscribe />

                <Subscribe />
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
    </div>
  );
}

export default NavTop;
