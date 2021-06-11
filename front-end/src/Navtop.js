import "./style/App.css";
import React from "react";
import iconCasa from "./img/house.png";
import "./style/bootstrap.min.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function NavCasa() {
  return (
    <Link to="/" class="nav-link px-2">
      {" "}
      <img src={iconCasa} alt="casa" class="icon" />
    </Link>
  );
}
function Who() {
  return (
    <Link to="/who" class="nav-link px-2">
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
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        ></a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 navegador">
          <li>
            <NavCasa />
          </li>
          <li>
            <News />
          </li>
          <li>
            <Contact />
          </li>
          <li>
            <Who />
          </li>
          <li>
            <Cups />
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <Inscribe />
          <Subscribe />
        </div>
      </header>
    </div>
  );
}

export default NavTop;
