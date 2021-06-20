const API = "http://localhost:8080/api/gametournamentapi/login";
const GETAPI = "http://localhost:8080/api/gametournamentapi/user/";
const HOST = "localhost";

const HEADERS = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
  Host: HOST,
});

async function login(email, password) {
  const opcionesFetch = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(email, password),
  };

  const response = await fetch(API, opcionesFetch);

  if (response.ok) {
    const resp = await response.json();
    return resp;
  } else {
    return [];
  }
}

async function getSpecificUser(email) {
  const opcionesFetch = {
    method: "GET",
    headers: HEADERS,
  };

  const response = await fetch(GETAPI + email, opcionesFetch);
  if (response.ok) {
    const resp = await response.json();
    return resp;
  } else {
    return [];
  }
}

const WebUser = { login, getSpecificUser };

export default WebUser;
