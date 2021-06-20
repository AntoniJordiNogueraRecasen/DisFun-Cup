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
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import WebUserModel from "./models/WebUser";
import PlayerModel from "./models/Participante";
import EspectadorModel from "./models/Espectador";

function App() {
  const [uid, setUID] = useState(0);
  const [user, setUser] = useState({});

  async function loadData() {
    if (uid === 0) {
      return;
    } else {
      console.log("UID VALUE: " + uid);
    }
  }

  async function login(email, password) {
    let x = await WebUserModel.login(email, password);
    console.log("USER LOGIN: " + x.email);
    setUID(x.idwebuser);
    let promise = WebUserModel.getSpecificUser(x.email);
    promise.then((data) => {
      let user = data;
      console.log(user);
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

  useEffect(() => {
    loadData();
  }, [user]);

  return (
    <>
      <BrowserRouter>
        <NavTop />
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
            <Route path="/torneo" render={() => <Torneo />} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
