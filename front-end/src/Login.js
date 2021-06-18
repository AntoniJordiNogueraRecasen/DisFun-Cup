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
      <div class="container">
        <main>
          <div class="py-5 text-center">
            <h2>Iniciar sessión</h2>
          </div>

          <div class="row g-5">
            <div class="col-md-5 col-lg-4 order-md-last"></div>
            <div class="col-md-7 col-lg-8">
              <Form onSubmit={login}>
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <Label for="nombreInput">E-mail</Label>
                      <Input
                        type="email"
                        id="emailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="emailInput">Password</Label>
                      <Input
                        type="password"
                        id="passwordInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row style={{ "margin-top": "15px" }}>
                  <Col>
                    <Button type="submit">Login</Button>{" "}
                    <Button type="button" onClick={cancelar}>
                      Cancelar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
