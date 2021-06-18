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

function App() {
  const [uid, setUID] = useState(0);
  const [promise, setPromise] = useState();
  const [user, setUser] = useState({});

  async function loadData() {
    if (uid === 0) {
      return;
    } else {
      setPromise(WebUserModel.getSpecificUser(uid));
      promise.then(async (data) => {
        setUser(data);
        console.log(user);
      });
    }
  }

  async function login(email, password) {
    let x = await WebUserModel.login(email, password);
    console.log("USER LOGIN: " + x.idwebuser);
    setUID(x.idwebuser);
    loadData();
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavTop />
        <Container className="switchContainer">
          <Switch>
            <Route exact path="/" render={() => <Corepage />} />
            <Route path="/who" render={() => <WhoIs />} />
            <Route path="/cover" render={() => <Cover />} />
            <Route path="/espector" render={() => <ResgistrarEspectador />} />
            <Route path="/player" render={() => <ResgistrarPlayer />} />
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
