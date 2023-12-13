import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="w-100  d-flex  align-items-center justify-content-center flex-wrap">
        <p className="fs-5 px-3  pt-3">
          Alan Israel Arnez Flores &copy; Todos Los Derechos Reservados 2023
        </p>
        <div id="iconos">
          <a href="https://www.facebook.com/AlanIsraelArnez/">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/arnez-flores-alan-israel-838954272/">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/alan_arnez_08/">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
