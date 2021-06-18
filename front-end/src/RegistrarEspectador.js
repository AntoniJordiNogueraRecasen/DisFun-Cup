import "./style/App.css";
import React from "react";
import "./style/form-validation.css";
function ResgistrarEspectador() {
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
              <form class="needs-validation" novalidate>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Introduzca un nombre válido.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Introduzca un apellido válido
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="username" class="form-label">
                      DNI
                    </label>
                    <div class="input-group has-validation">
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="DNI"
                        required
                      ></input>
                      <div class="invalid-feedback">
                        Introduzca un Nombre de Usuario
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="ejemplo@ejemplo.com"
                    ></input>
                    <div class="invalid-feedback">El email no es válido.</div>
                  </div>

                  <div class="col-12">
                    <label for="telefono" class="form-label">
                      Teléfono<span class="text-muted">(Opcional)</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="telefono"
                    ></input>
                  </div>

                  <div class="col-12">
                    <label for="password" class="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="passwd"
                      placeholder="Contraseña"
                    ></input>
                    <div class="invalid-feedback">Contraseña no válida.</div>
                  </div>

                  <div class="col-12">
                    <label for="password" class="form-label">
                      Repita la Contraseña
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="passwd"
                      placeholder="Contraseña"
                    ></input>
                    <div class="invalid-feedback">Contraseña no válida.</div>
                  </div>

                  <div class="col-12">
                    <label for="Fecha" class="form-label">
                      Fecha de Nacimiento
                    </label>
                    <input type="date" class="form-control" id="Fecha"></input>
                  </div>
                </div>

                <hr class="my-4"></hr>

                <button class="w-100 btn btn-primary btn-lg" type="submit">
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ResgistrarEspectador;
