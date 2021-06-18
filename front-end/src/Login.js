import "./style/App.css";
import React from "react";
import "./style/login.css";
function Login() {
  return (
    <>
      <div class="container">
        <main>
          <div class="py-5 text-center">
            <h2>Iniciar sesión</h2>
          </div>

          <div class="row boxh">
          
            <div class="col-md-7 col-lg-8 textalign">
              <form class="needs-validation" novalidate>
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

                <hr class="my-4"></hr>

                <button class="w-100 btn btn-primary btn-lg" type="submit">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;
