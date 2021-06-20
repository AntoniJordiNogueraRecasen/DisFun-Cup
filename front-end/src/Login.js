import "./style/App.css";
import React, { useState } from "react";
import "./style/login.css";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [volver, setVolver] = useState(false);

  function login(e) {
    e.preventDefault();

    props.login({
      email,
      password,
    });

    setVolver(true);
  }

  function cancelar() {
    setVolver(true);
  }

  if (volver === true) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <main>
        <div class="py-5 text-center">
          <h1 class="titulo">Iniciar sesión</h1>
          <hr></hr>
        </div>

        <div class="row g-4">
          <div class="col-md-4 col-lg-4 order-md-last">
            {" "}
            <Form onSubmit={login}>
              <Row>
                <Col lg="12">
                  <FormGroup>
                    <Label for="nombreInput">Correo electrónico</Label>
                    <Input
                      type="email"
                      id="emailInput"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="emailInput">Contraseña</Label>
                    <Input
                      type="password"
                      id="passwordInput"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row style={{ marginTop: "15px" }}>
                <Col>
                  <Button type="submit" color="primary">
                    Entrar
                  </Button>{" "}
                  <Button
                    class="btn btn-danger"
                    type="button"
                    onClick={cancelar}
                  >
                    Cancelar
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
          <div class="col-md-4 col-lg-4"></div>
        </div>
      </main>
    </>
  );
};

export default Login;
