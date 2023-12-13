import React from "react";
import { Fragment } from "react/cjs/react.production.min";
//import Prueba2 from './Prueba2.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';

import seo from "../assets/seo.png";

const Seccion = () => {
  return (
    <Fragment>
      <section
        className="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto"
        id="intro"
      >
        <h1 className="p-3 fs-2 border-top border-3">
          BIENVENIDO AL{" "}
          <span className="text-danger"> "INSTITUTO TÉCNICO FIRST CLASS"</span>{" "}
        </h1>
        <p className="p-3  fs-4">CHANGING LIVES TOUCHING HEARTS</p>
      </section>
      <section className="w-100">
        <div className="row w-75 mx-auto" id="servicios-fila-1">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
          <i class="bi bi-phone" style={{ fontSize: '5rem', color: '#C90606' }}></i>

            <div>
              <h3 className="fs-5 mt-4 px-4 pb-1">ENGLISH APLICACIONES</h3>
              <p className="px-4">
                Les enseñamos las herramientas ONLINE más usadas, y aplicaciones
                divertidas para incentivar la creatividad y el inglés al mismo
                tiempo..
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start  my-5 icono-wrap">
          <i class="bi bi-globe-americas" style={{ fontSize: '5rem', color: '#C90606' }}></i>

            {/* <img src={concepto}alt="concepto" width="180" height="160"/> */}

            <div>
              <h3 className="fs-5 mt-4 px-4 pb-1 icono-wrap">
                SALIDAS EXTRACURRICULARES
              </h3>
              <p className="px-4">
                Son actividades programas y coordinadas fuera del instituto, los
                alumnos realizaran traducciones sobre su visita en inglés de
                todo lo estudiado. Ejemplo: Museos, Lugares Públicos, Eventos
                Educativos.
              </p>
            </div>
          </div>
        </div>

        <div className="row w-75 mx-auto mb-5" id="servicios-fila-2">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start  my-5 icono-wrap">
          <i class="bi bi-mortarboard" style={{ fontSize: '5rem', color: '#C90606' }}></i>
            {/* <img
              src={comunicacion}
              alt="comunicaciones"
              width="180"
              height="160"
            /> */}

            <div>
              <h3 className="fs-5 mt-4 px-4 pb-1">
                CLASES VIVENCIALES & ROLE PLAYING
              </h3>
              <p className="px-4">
                Simulaciones de situaciones cotidianas en diferentes ámbitos y
                rubros Ejemplo; los alumnos hacen una simulación de una agencia
                de viajes..
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
          <i className="bi bi-people-fill" style={{ fontSize: '5rem', color: '#C90606' }}></i>

          
            {/* <img src={seo} alt="seo" width="180" height="160" /> */}

            <div>
              <h3 className="fs-5 mt-4 px-4 pb-1">PUBLIC SPEAKING</h3>
              <p className="px-4">
                Hablar en público ayuda a los alumnos a desarrollar habilidades
                que les beneficiarán a lo largo de su vida profesional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Seccion;
