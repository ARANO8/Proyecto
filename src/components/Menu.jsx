import React from "react";
import logow from "../assets/logow.png";
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div>
      <header className="container-fluid d-flex justify-content-center">
        <p className="text-light mb-0 p-2 fs-6">
          Contactanos (+549)-11-4558-6523
        </p>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light p-3 " id="menu">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logow} width="240" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#equipo">
                  Equipo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#seccion-contacto">
                  Contactos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#seccion-contacto">
                  Creditos
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="email"
                placeholder="Correo Electronico"
                aria-label="Suscribete"
              />
              <button
                className="btn btn-danger btn-danger-outline-success"
                type="button"
              >
                Suscribete
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
