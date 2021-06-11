import "./style/App.css";
import React from "react";
import "./style/cover.css";
import { Button } from "reactstrap";
import "./style/bootstrap.min.css";

import { Link } from "react-router-dom";

function Cover() {
  return (
    <>
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <div>
            <h3 class="titulocover">¿Eres jugador o espectador?</h3>
          </div>
        </header>

        <main>
          <div class="selector">
            <Link to="/player">
              <Button className="player">Jugador</Button>
            </Link>
            <Link to="/espector">
              <Button className="espector">Espectador</Button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Cover;
