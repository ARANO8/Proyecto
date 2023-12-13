import React, { Fragment } from 'react';
import support from '../assets/support.png';

import './nuevos.css';

const Contacto = () => {
  return (
  <Fragment>
<section id="seccion-contacto" className="nuevos border-bottom border-secondary border-2">
  <div id="bg-contactos" className='bg-white'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
  </div>
  <div className="nuevos-contacto container  border border-secondary border-subtle rounded-3" id="contenedor-formulario">
      <div className="text-center mb-4" id="titulo-formulario">
        <div><img src={support} alt="" className="img-fluid ps-5"/></div>
        <h2>Contactanos</h2>
        <p className="fs-5">Estamos aqui para hacer realidad de tus proyectos</p>
      </div>

     

      <form   method="POST" data-netlify="true" action="#">     
            <div className= "mb-3">           
              <input type="email" className="form-control" id="email" name="email" placeholder="nombre@ejemplo.com"/>
            </div>
 
          
            <div className="mb-3">            
              <input type="input" className="form-control" id="name" name="name" placeholder="John Doe"/>
            </div>
      

            <div className="mb-3">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Teléfono"/>
            </div>

          <div className="mb-3">       
            <textarea className="form-control" name="message" id="message" rows="4"></textarea>
          </div>

          <div className="mb-3">
            <button type="submit" className=" btn btn-danger w-100 fs-5">Enviar Mensaje</button>
          </div>
      </form>
  
  </div>
</section>
  </Fragment>
  )
}

export default Contacto