import "./style/App.css";
import React from "react";
import "./style/bootstrap.min.css";

import { Table } from "reactstrap";
const Torneo = (props) => {
  let filas = props.torneos.map((torneo) => {
    return (
      <>
        <tr key={torneo.idtorneo}>
          <td>{torneo.videojuego}</td>
          <td>{torneo.localizacion}</td>
          <td>{torneo.fecha}</td>
          <td>{torneo.recompensas}</td>
          <td>
            <a href="#" class="rainbow-button">
              Apuntate
            </a>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h1 class="titulo">Torneos</h1>
      <hr></hr>
      <div class="col-lg-8 mx-auto p-3 py-md-5">
        <main>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>VideoJuego </th>
                  <th>Localidad</th>
                  <th>Fecha</th>
                  <th>Recompensa</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{filas}</tbody>
            </Table>
          </div>
        </main>
      </div>
    </>
  );
};

export default Torneo;
