import "./style/App.css";
import React from "react";
import "./style/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import "./style/Apuntado.css";
import doneImg from "./img/doneImg.png";

function Apuntado() {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12" className="colDiv">
            <img className="doneImg" src={doneImg} alt="done"></img>
            <h1>ENHORABUENA, TE HAS APUNTADO EXITOSAMENTE!</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Apuntado;
