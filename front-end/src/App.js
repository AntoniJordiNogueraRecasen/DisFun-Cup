import "./style/App.css";
import React, { useState, useEffect } from "react";
import NavTop from "./Navtop";
import Corepage from "./Corepage";
import WhoIs from "./Who";
import Cover from "./Cover";
import ResgistrarPlayer from "./RegistrarPlayer";
import ResgistrarEspectador from "./RegistrarEspectador";
import Login from "./Login";
import Contact from "./Contact.js";
import Cups from "./Cups.js";
import News from "./News.js";
import Torneo from "./Torneo";
import Apuntado from "./Apuntado";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";

import WebUserModel from "./models/WebUser";
import PlayerModel from "./models/Participante";
import EspectadorModel from "./models/Espectador";
import TorneoModel from "./models/Torneo";

function App() {
  const [uid, setUID] = useState(0);
  const [user, setUser] = useState({});
  const [torneos, setTorneos] = useState([{}]);

  async function loadData() {
    if (uid === 0) {
    } else {
      console.log("UID VALUE: " + uid);
    }
    let torneos = await TorneoModel.getAll();
    setTorneos(torneos);
  }

  async function login(email, password) {
    let x = await WebUserModel.login(email, password);
    console.log("USER LOGIN: " + x.email);
    setUID(x.idwebuser);
    let promise = WebUserModel.getSpecificUser(x.email);
    promise.then((data) => {
      let user = data;
      setUser(user);
    });
    loadData();
  }

  async function registerPlayer(playerData) {
    let x = await PlayerModel.registerParticipante(playerData);
    console.log(x);
  }

  async function registerEspectador(userData) {
    let x = await EspectadorModel.registereEspectador(userData);
    console.log(x);
  }

  async function logout() {
    setUID(0);
    setUser({});
    loadData();
  }

  useEffect(() => {
    loadData();
  });

  return (
    <>
      <BrowserRouter>
        <NavTop user={user} uid={uid} logout={logout} />
        <Container>
          <Switch>
            <Route exact path="/" render={() => <Corepage />} />
            <Route path="/who" render={() => <WhoIs />} />
            <Route path="/cover" render={() => <Cover />} />
            <Route
              path="/espector"
              render={() => (
                <ResgistrarEspectador registerEspectador={registerEspectador} />
              )}
            />
            <Route
              path="/player"
              render={() => (
                <ResgistrarPlayer registerPlayer={registerPlayer} />
              )}
            />
            <Route path="/login" render={() => <Login login={login} />} />
            <Route path="/contact" render={() => <Contact />} />
            <Route path="/cups" render={() => <Cups />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/torneo" render={() => <Torneo torneos={torneos} />} />
            <Route path="/apuntado" render={() => <Apuntado />} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
