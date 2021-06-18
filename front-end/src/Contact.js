import "./style/App.css";
import React from "react";
import "./style/bootstrap.min.css";

function Contact() {
  return (
    <>
      <div class="col-lg-8 mx-auto p-3 py-md-5">
        <h1 class="titulo">Contáctanos</h1>
        <hr></hr>

        <main>
          <div class="card-body loca">
            <h1 class="ubi">Ubicación</h1>

            <br></br>
            <address class="row">
              <div class="col white">
                <div class="center">
                  <ul>
                    <li>
                      <span itemprop="name">DisFun S.L.</span>
                    </li>
                    <li>
                      {" "}
                      <span>
                        Plaça del Canigó<br></br>08303 Mataró, Barcelona
                      </span>
                    </li>
                    <li>
                      <span>+34 609 34 72 23</span>
                    </li>
                    <li>
                      <a
                        className="gmail"
                        href="mailto:correoempresa@gmail.com"
                      >
                        DisfunCup@nombre.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.186417294817!2d2.425952614872541!3d41.543560779250036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b505aeb2b79b%3A0x4d6aa1f23b2fc902!2zUGxhw6dhIGRlbCBDYW5pZ8OzLCAwODMwMyBNYXRhcsOzLCBCYXJjZWxvbmE!5e0!3m2!1ses!2ses!4v1622736747052!5m2!1ses!2ses"
                  width="350"
                  height="350"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </address>
          </div>
        </main>
      </div>

      <script src="bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Contact;
