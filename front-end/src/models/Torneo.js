const API = "http://localhost:8080/api/gametournamentapi/torneos";
const HOST = "localhost";

const HEADERS = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
  Host: HOST,
});

async function getAll() {
  const opcionesFetch = {
    method: "GET",
    headers: HEADERS,
  };

  const response = await fetch(API, opcionesFetch);
  if (response.ok) {
    const resp = await response.json();
    console.log("RESPUESTA: " + resp);
    return resp;
  } else {
    return [];
  }
}

const Torneo = { getAll };

export default Torneo;
