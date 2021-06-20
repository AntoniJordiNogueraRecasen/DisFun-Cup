const API = "http://localhost:8080/api/gametournamentapi/participantes";
const HOST = "localhost";

const HEADERS = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
  Host: HOST,
});

async function registerParticipante(playerData) {
  const opcionesFetch = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(playerData),
  };

  const response = await fetch(API, opcionesFetch);

  return response.ok;
}

const Participante = { registerParticipante };

export default Participante;
