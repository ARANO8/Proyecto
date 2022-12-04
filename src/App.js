import "./App.css";
import About from "./components/About";
import Contacto from "./components/Contacto.jsx";
import Menu from "./components/Menu.jsx";
import Seccion from "./components/Seccion.jsx";
import Slide from "./components/Slide.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Menu />
      <Slide />
      <Seccion/>
      <About/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
