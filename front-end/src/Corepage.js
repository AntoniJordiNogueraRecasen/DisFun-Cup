import React from "react";
import "./style/carousel.css";
import "./style/bootstrap.min.css";
import "./style/App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
/// IMAGENES///
import Manosredonda from "./img/manosredonda.jpg";
import Campeones from "./img/Campeones.jpg";
import Infantil from "./img/infantil.jpg";
import SillaRuedas from "./img/SillaRuedas.jpg";
import EnergyTeam from "./img/energyTeam.jpg";
import Objetivo from "./img/Objetivo.PNG";

function Carrusel() {
  return (
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Campeones} alt="campeones"></img>

          <div class="container">
            <div class="carousel-caption text-start">
              <p></p>
              <p>
                <Link to="/cover" class="btn btn-lg btn-primary red">
                  Registrate HOY MISMO
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Infantil} alt="infantil"></img>

          <div class="container">
            <div class="carousel-caption">
              <h1>Nuevo torneo de DisFUN CUP.</h1>
              <p>
                Entra para visualizar la variedad de eventos que puedes
                participar
              </p>
              <p>
                <Link to="/cups" class="btn btn-lg btn-primary blue">
                  Torneos
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="notice" src={SillaRuedas} alt="SillaRuedas"></img>

          <div class="container">
            <div class="carousel-caption text-end">
              <h1>Lo mas importante para nosotros</h1>
              <p>Aquí mostramos las noticias mas relevantes!</p>
              <p>
                <Link to="/news" class="btn btn-lg btn-primary pink">
                  Novedades
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
function ReviewNews() {
  return (
    <>
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            “Todo el mundo tiene discapacidad porque nadie es capaz de hacerlo
            todo”
          </h2>
          <p class="lead">
            No todo el mundo se acerca a Moyorz87 de buenas maneras. “Me acuerdo
            de un comentario: 'si te veo por Pamplona te tiro de la silla de
            ruedas'. Al principio tenía miedo, pero tienes que reponerte y
            seguir. Mucha gente se esconde en el anonimato que te da estar
            detrás de la pantalla"
          </p>
        </div>
        <div class="col-md-5">
          <img class="notice" src={Manosredonda} alt="manos"></img>
        </div>
      </div>

      <hr class="featurette-divider"></hr>

      <div class="row featurette">
        <div class="col-md-6">
          <img class="notice" src={EnergyTeam} alt="team"></img>
        </div>
        <div class="col-md-6 izquierda">
          <h2 class="featurette-heading">
            “La discapacidad no te define; te define cómo haces frente a los
            desafíos que la discapacidad te presenta”
          </h2>
          <p class="lead">Jim Abbott</p>
        </div>
      </div>

      <hr class="featurette-divider"></hr>

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            "El miedo es la discapacidad más grande de todas"
          </h2>
          <p class="lead">Nick Vujicic</p>
        </div>
        <div class="col-md-5">
          <img class="notice" src={Objetivo} alt="objetivo"></img>
        </div>
      </div>
    </>
  );
}
function Corepage() {
  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"
      ></script>
      <Carrusel />
      <div class="container marketing">
        <hr class="featurette-divider"></hr>
        <ReviewNews />
      </div>
    </>
  );
}

export default Corepage;
