import "./style/App.css";
import React, { useState } from "react";
import "./style/form-validation.css";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
const ResgistrarEspectador = (props) => {
  const [dni, setDNI] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const [volver, setVolver] = useState(false);

  function register(e) {
    e.preventDefault();

    let userData = {
      asiento: null,
      apuesta: null,
      dni: dni,
      email: email,
      telefono: telefono,
      password: password,
      nombre: nombre,
      apellido: apellido,
    };

    props.registerEspectador(userData);
    setVolver(true);
  }

  function cancelar() {
    setVolver(true);
  }

  if (volver === true) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div class="container">
        <main>
          <div class="py-5 text-center">
            <h2>Registrarse como Espectador</h2>
            <p class="lead">
              Completa el siguiente formulario para poder asistir.
            </p>
          </div>

          <div class="row g-5 boxh">
            <div class="col-md-7 col-lg-8 boxj">
              <h4 class="mb-3">Registro Espectador</h4>
              <Form onSubmit={register}>
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <Label for="nombreInput">Nombre</Label>
                      <Input
                        type="text"
                        id="nombreInput"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="apellidoInput">Apellido</Label>
                      <Input
                        type="text"
                        id="apellidoInput"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="dniInput">DNI</Label>
                      <Input
                        type="text"
                        id="dniInput"
                        value={dni}
                        onChange={(e) => setDNI(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="emailInput">E-mail</Label>
                      <Input
                        type="email"
                        id="emailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="telefonoInput">Telefono</Label>
                      <Input
                        type="text"
                        id="telefonoInput"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="passwordInput">Contraseña</Label>
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
                      Registrarse
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
          </div>
        </main>
      </div>
    </>
  );
};

export default ResgistrarEspectador;
