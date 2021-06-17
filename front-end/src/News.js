import "./style/App.css";
import React from "react";
import "./style/bootstrap.min.css";
import { Button } from "reactstrap";

///// IMAGENES /////
import rocky from "./img/rocky.PNG";
import moyorz from "./img/MOYORZ87.jpg";
import xbox from "./img/xbox.jpg";
import campana from "./img/campana.PNG";

function Rocky() {
  return (
    <>
      <div class="col">
        <div class="card shadow-sm">
          <img
            class="bd-placeholder-img card-img-top"
            width="80%"
            height="400"
            src={rocky}
          ></img>
          <div class="card-body">
            <p class="card-text">
              Rocky es uno de los gamers más famosos en Call of duty: Warzone, y
              a pesar de su discapacidad es el más letal de todos jugando solo
              con la boca.
            </p>
            <a href="https://laverdadnoticias.com/viral/Rocky-el-gamer-con-discapacidad-que-juega-Call-of-Duty-con-la-boca-se-hizo-viral-20200727-0209.html">
              <button class="info">Ver noticia</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
function Moyorz() {
  return (
    <>
      <div class="col">
        <div class="card shadow-sm">
          <img
            class="bd-placeholder-img card-img-top"
            width="80%"
            height="400"
            src={moyorz}
          ></img>
          <div class="card-body">
            <p class="card-text">
              Aritz Acevedo, conocido en redes sociales y en YouTube como
              “Moyorz87” es el nuevo fichaje del equipo Movistar Riders en el
              juego Fortninte
            </p>
            <a href="https://cadenaser.com/ser/2019/08/11/cultura/1565509697_923737.html">
              <button class="info">Ver noticia</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
function Xbox() {
  return (
    <>
      <div class="col">
        <div class="card shadow-sm">
          <img
            class="bd-placeholder-img card-img-top"
            width="80%"
            height="400"
            src={xbox}
          ></img>
          <div class="card-body">
            <p class="card-text">
              Xbox crea un programa con jugadores discapacitados para mejorar la
              accesibilidad.
            </p>
            <br></br>
            <a href="https://www.semana.com/tecnologia/articulo/xbox-crea-un-programa-con-jugadores-discapacitados-para-mejorar-la-accesibilidad/202140/">
              <button class="info">Ver noticia</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Campana() {
  return (
    <>
      <div class="col">
        <div class="card shadow-sm">
          <img
            class="bd-placeholder-img card-img-top"
            width="80%"
            height="400"
            src={campana}
          ></img>
          <div class="card-body">
            <p class="card-text">
              Steven Spohn es director de operaciones de la fundación
              AbleGamers, una ONG que trabaja para mejorar la accesibilidad en
              el entorno de los videojuegos, para que más personas con
              discapacidad puedan jugar.
            </p>
            <a href="https://www.infobae.com/gaming/2020/09/25/la-campana-de-donacion-para-que-mas-personas-con-discapacidad-puedan-jugar-videojuegos/">
              <button class="info">Ver noticia</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
function News() {
  return (
    <>
      <main>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2">
            <Rocky />
            <Moyorz />
            <Xbox />
            <Campana />
          </div>
        </div>
      </main>
    </>
  );
}

export default News;
