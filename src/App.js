import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

    <Router>
      <div className="App">
        <Menu />
        <Slide />
        <Seccion/>
        <About/>
        <Contacto/>
        <Creditos/>
        <Footer/>
        {/* <Switch>
          <Route path="/Creditos" component={Creditos} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
