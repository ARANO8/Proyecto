import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import equipo from "../assets/equipo.jpg";

const About = () => {
  return (
    <Fragment>
      <section>
        <div className="container w-50 m-auto text-center" id="equipo">
          <h1 className="mb-5 fs-2">
            Equipo pequeño con{" "}
            <span className="text-primary">resultados Grandes</span>.
          </h1>
          <p className="fs-4 ">
            Siempre buscamos las personas adecuadas para que trabajen con
            nosotros. Si te sientes listo para este reto, te esperamos para que
            te unas a nosotros.
          </p>
        </div>

        <div className="mt-5 text-center">
          <img id="img-equipo" src={equipo} alt="equipo" />
        </div>

        <div id="local" className="border-top border-2">
          <div className="mapa"> </div>
          <div>
            <div className="wrapper-local">
              <h2>Ubicado en Buenos Aires, Argentina</h2>
              <h2 className="mb-4" id="typewriter"></h2>
              <p className="fs-5 text-body">
                Elijimos Buenos Aires para nuestra oficina con el objetivo de
                estar cerca a nuestros clientes. Estamos ubicados en Boedo, el
                corazon y el centro financiero de Buenos Aires, cerca de los
                mejores restaurantes, tiendas y tan solo 10 minutos de
                Microcentro Porteño. ¡Visitennos y no se arrepentiran!
              </p>
              <section
                className="d-flex justify-content-start"
                id="numeros-local"
              >
                <div>
                  <p className="text-primary fs-5">200</p>
                  <p>Proyectos</p>
                </div>
                <div>
                  <p className="text-primary fs-5">100%</p>
                  <p>Aprobado</p>
                </div>
                <div>
                  <p className="text-primary fs-5">100%</p>
                  <p>Eficiencia</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
