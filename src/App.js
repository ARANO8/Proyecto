import React from 'react';
import "./App.css";
import About from "./components/About";
import Contacto from "./components/Contacto.jsx";
import Menu from "./components/Menu.jsx";
import Seccion from "./components/Seccion.jsx";
import Slide from "./components/Slide.jsx";
import Footer from "./components/Footer.jsx";
import Creditos from "./components/Creditos.jsx";


function App() {
  return (

    
      <div className="App">
        <Menu />
        <Slide />
        <Seccion/>
        <About/>
        <Contacto/>
        <Creditos/>
        <Footer/>
      </div>
    
  );
}

export default App;
