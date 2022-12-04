import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Prueba2 from './Prueba2.jsx'

import desarrollo from '../assets/desarrollo.png';
import comunicacion from '../assets/comunicaciones.png';
import concepto from '../assets/concepto.png';
import seo from '../assets/seo.png'


const Seccion = () => {
  return (
    <Fragment>
        <section className="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto" id="intro">
    <h1 className="p-3 fs-2 border-top border-3">Una agencia única para todas tus necesidades de <span className='text-primary'> Marketing Digital</span> </h1>
     <p className="p-3  fs-4">
         <span className="text-primary">KROM Tech</span> es la agencia donde te ayudamos establecer tu presencia online. SEO, paginas WEB, tiendas virtuales, redes sociales        
     </p>   
    </section>
    <section className="w-100">
    <div className="row w-75 mx-auto" id="servicios-fila-1">       
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
            <img src={desarrollo} alt="desarrollo"   width="180" height="160"/>

            <div>
                <h3 className="fs-5 mt-4 px-4 pb-1">Desarrollo</h3>
                <p className="px-4">Desarrollo de aplicaciones WEB, moviles y ecommerce</p>
            </div>

        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start  my-5 icono-wrap">
            <img src={concepto}alt="concepto" width="180" height="160"/>

            <div>
                <h3 className="fs-5 mt-4 px-4 pb-1 icono-wrap">Branding</h3>
                <p className="px-4">Diseño, Conceptualización e Implementación de productos digitales</p>
            </div>
        </div>   
    </div>
    
    <div className="row w-75 mx-auto mb-5" id="servicios-fila-2">       
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start  my-5 icono-wrap">
            <img src={comunicacion} alt="comunicaciones" width="180" height="160"/>

            <div>
                <h3 className="fs-5 mt-4 px-4 pb-1">Comunicaciones</h3>
                <p className="px-4">Desarrollo  del plan de comunicaciones para sus clientes.</p>
            </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
            <img src={seo} alt="seo" width="180" height="160" />

            <div>
                <h3 className="fs-5 mt-4 px-4 pb-1">SEO</h3>
                <p className="px-4">Analizamos la eficiencia y optimizamos los sitios WEB</p>
            </div>
        </div>   
    </div>
</section>
    </Fragment>
    
  )
}

export default Seccion