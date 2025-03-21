import About from "./About";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Certificate from "./Certificate";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Content from "./Nav";
import Service from "./Service";
import Skills from "./Skills";
import Projects from "./Project";

function App() {
  return (
    <>
      <div className="home" id="home">
        <Content />
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Certificate/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
