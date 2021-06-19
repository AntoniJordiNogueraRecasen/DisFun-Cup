import "./style/App.css";
import React from "react";
import "./style/carousel.css";
import "./style/bootstrap.min.css";
import Toni from "./img/toniSexy.jpg";
import Pau from "./img/PauSensu.jpg";
import Viktor from "./img/ViktorSexy.jpg";
import empresa from "./img/empresa.jpg";
import modeloNegocio from "./img/divFuncional.jpg";
import identifica from "./img/identifica.jpg";

function CircleNews() {
  return (
    <>
      <div class="row">
        <div class="col-lg-4">
          <img src={Toni} class="carrusel1 rounded-circle nosotros"></img>
          <h2>Antoni Jordi</h2>
          <p>Mi porque del proyecto</p>
        </div>
        <div class="col-lg-4">
          <img src={Viktor} class="carrusel1 rounded-circle nosotros"></img>

          <h2>Victor Gómez</h2>
          <p>Mi porque del proyecto</p>
        </div>
        <div class="col-lg-4">
          <img src={Pau} class="carrusel1 rounded-circle nosotros"></img>

          <h2>Pau Cuenca</h2>
          <p>Nuestra pequeña aportación a la sociedad</p>
        </div>
      </div>
    </>
  );
}
function Empresa() {
  return (
    <>
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Nuestra historia</h2>
          <p class="lead">
            Somos un grupo de emprendedores de la fundación Esplai con el
            objetivo de mejorar la vida de los jugadores y de las personas que
            padecen estas enfermedades o malformaciones. Y además hacer más
            visibles a la población y hacer participes a estas de la importancia
            que tienen estas personas en la sociedad como ejemplos de superación
            y de esfuerzo.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src={empresa}
            alt="empresa"
          ></img>
        </div>
      </div>
    </>
  );
}
function EntidadCorp() {
  return (
    <>
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Imagen Corporativa</h2>
          <p class="lead">
            Torneo para personas de diversidad funcional, tenemos un torneo de
            personas con diversidad funcional la cual los participantes tienen
            que presentar su grado de disfuncionalidad y así crear diferentes
            grupos dependiendo del grado. La inscripción será gratuita y se
            rentabiliza con sponsors y el ganador se llevará una pequeña
            aportación económica así como nosotros mismos con el dinero ganado
            será invertido para investigar y mejorar la calidad de las mismas.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src={modeloNegocio}
            alt="modeloNegocio"
          ></img>
        </div>
      </div>
    </>
  );
}
function ModeloNegocio() {
  return (
    <>
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Modelo de negocio</h2>
          <p class="lead">
            Nuestra misión es crear una competición para gente con diversidad
            funcional y demostrar asi que son capaces de todo lo que se
            propongan asi com superarse a si mismos mediante el objetivo de
            competir para conseguir el trofeo. Nuestra verdadera misión es dar a
            ver al mundo el esfuerzo que hacen estas personas para superar las
            barreras que se encuentran al intentar jugar a los videojuegos.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src={identifica}
            alt="identifica"
          ></img>
        </div>
      </div>
    </>
  );
}
function WhoIs() {
  return (
    <>
      <h1 class="titulo">Quienes SOMOS?</h1>
      <hr></hr>
      <div class="container marketing">
        <br></br>
        <Empresa />
        <hr class="featurette-divider"></hr>
        <EntidadCorp />
        <hr class="featurette-divider"></hr>
        <ModeloNegocio />
        <hr class="featurette-divider"></hr>
        <CircleNews />
      </div>
    </>
  );
}

export default WhoIs;
