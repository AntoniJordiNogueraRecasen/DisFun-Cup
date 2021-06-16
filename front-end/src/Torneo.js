import "./style/App.css";
import React from "react";
import "./style/bootstrap.min.css";

function Torneo() {
  return (
    <>
      <div class="col-lg-8 mx-auto p-3 py-md-5">
        <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
          <h1>Torneos</h1>
        </header>
        <main>
          <div>
            <table>
              <tr>
                <th>VideoJuego </th>
                <th>Localidad</th>
                <th>Nº Participantes</th>
                <th>Fecha</th>
                <th>Recompensa</th>
                <th></th>
              </tr>
              <tr>
                <td>League of Legends</td>
                <td>Online</td>
                <td>35</td>
                <td>21/07/2021</td>
                <td>1200 coins</td>
                <td>
                  <a href="#" class="rainbow-button">
                    Apuntate
                  </a>
                </td>
              </tr>
              <tr>
                <td>League of Legends</td>
                <td>Presencial</td>
                <td>20</td>
                <td>10/07/2021</td>
                <td>1200 coins</td>
                <td>
                  <a href="#" class="rainbow-button">
                    Apuntate
                  </a>
                </td>
              </tr>
              <tr>
                <td>Clash Royale</td>
                <td>Online</td>
                <td>10</td>
                <td>30/06/2021</td>
                <td>1200 coins</td>
                <td>
                  <a href="#" class="rainbow-button">
                    Apuntate
                  </a>
                </td>
              </tr>
              <tr>
                <td>Gran Turismo</td>
                <td>Online</td>
                <td>20</td>
                <td>11/08/2021</td>
                <td>1200 coins</td>
                <td>
                  <a href="#" class="rainbow-button">
                    Apuntate
                  </a>
                </td>
              </tr>
              <tr>
                <td>PUBG</td>
                <td>Online</td>
                <td>20</td>
                <td>11/08/2021</td>
                <td>1200 coins</td>
                <td>
                  <a href="#" class="rainbow-button">
                    Apuntate
                  </a>
                </td>
              </tr>
              <tr>
                <td>FIFA 21</td>
                <td>Online</td>
                <td>20</td>
                <td>11/08/2021</td>
                <td>1200 coins</td>
                <td>
                  <a href="#" class="rainbow-button">
                    Apuntate
                  </a>
                </td>
              </tr>
              <tr>
                <td>Fortnite</td>
                <td>Online</td>
                <td>80</td>
                <td>21/08/2021</td>
                <td>1200 coins</td>
                <td>
                  <a href="#" class="rainbow-button">
                    Apuntate
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default Torneo;
