import React, { Fragment } from "react";
import equipo from "../assets/equipo.jpg";

const About = () => {
  return (
    <Fragment>
      <section>
        <div className="container w-50 m-auto text-center" id="equipo">
          <h1 className="mb-5 fs-2 text-danger">
          PLATAFORMA VIRTUAL - NUESTROS PRODUCTOS
          </h1>
          <p className="fs-4 ">
          Ahora podrás seguir actualizándote con nuestros cursos online, presenciales, semipresenciales diseñados para que puedas seguir especializándote en la seguridad de tu hogar o en nuestras comodas aulas y con la más alta calidad educativa. ¡Ven te esperamos!
          </p>
        </div>

        <div className="mt-5 text-center">
          <img id="img-equipo" src={equipo} alt="equipo" />
        </div>

        <div id="local" className="border-top border-2">
          <div className="mapa"> </div>
          <div>
            <div className="wrapper-local">
              <h2 className="text-warning">CONTACTO</h2>
              <h2 className="mb-4" id="typewriter"></h2>
              <p className="fs-5 text-light">
              Abrimos el mundo a través del aprendizaje de idiomas, el intercambio cultural, los programas académicos y los viajes educativos.
              </p>
              <section
                className="d-flex justify-content-start"
                id="numeros-local"
              >

                
                <div>
                <i class="bi bi-geo-alt-fill" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <p className="text-warning fs-5">DIRECCION</p>
                  <p className="text-light">Av. Mariscal Santa Cruz. Edif. San Pablo Piso 4</p>
                </div>
                <div>
                <i class="bi bi-telephone-fill" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <p className="text-warning fs-5">CONTACTOS</p>
                  <p className="text-light"> +591 60168378

+591 79542857</p>
                </div>
                <div>
                <i class="bi bi-geo-alt-fill" style={{ fontSize: '2rem', color: 'white' }}></i>
                  <p className="text-warning fs-5">EMAIL</p>
                  <p className="text-light">institutofirstclass@gmail.com</p>
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
