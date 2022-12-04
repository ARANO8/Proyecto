import React from "react";
import { Fragment } from "react/cjs/react.development";

const Footer = () => {
  return (
    <Fragment>
      <footer className="w-100  d-flex  align-items-center justify-content-center flex-wrap">
        <p className="fs-5 px-3  pt-3">
          KROM Tech &copy; Todos Los Derechos Reservados 2022
        </p>
        <div id="iconos">
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
