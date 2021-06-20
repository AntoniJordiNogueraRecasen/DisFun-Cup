const API = "http://localhost:8080/api/gametournamentapi/espectadores";
const HOST = "localhost";

const HEADERS = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
  Host: HOST,
});

async function registereEspectador(userData) {
  const opcionesFetch = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(userData),
  };

  const response = await fetch(API, opcionesFetch);

  return response.ok;
}

const Espectador = { registereEspectador };

export default Espectador;
