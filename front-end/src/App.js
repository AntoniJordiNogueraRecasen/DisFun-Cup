import "./style/App.css";
import React from "react";
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
function App() {
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
            <Route path="/login" render={() => <Login />} />
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
