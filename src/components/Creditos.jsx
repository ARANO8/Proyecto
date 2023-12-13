import React, { Fragment } from "react";
import perfil from "../assets/perfil.jpg";

const Creditos = () => {
  return (
    <div>
      <h1>Créditos</h1>

      <Fragment>
        <div className="d-flex justify-content-center align-items-center vw-100">
            <div className="card mb-3" style={{ maxWidth: "600px" }}>
              <div className="row g-2">
                <div className="col-md-3">
                  <img src={perfil} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">Datos</h2>
                    <p className="card-text text-center">
                      ESTUDIANTE: Alan Israel Arnez Flores<br />
                      CI: 13764464 LP<br />
                      ASIGNATURA: INF122 PROGRAMACIÓN WEB 2<br />
                      PARALELO: A CARRERA:<br />
                      INFORMATICA/FCPN-UMSA
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Creditos;
