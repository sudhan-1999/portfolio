import About from "./About";
import "./App.css";
import Certificate from "./Certificate";
import Home from "./Home";
import Content from "./Nav";
import Skills from "./Skills";

function App() {
  return (
    <>
      <div className="home" id="home">
        <Content />
        <Home/>
        <About/>
        <Skills/>
        <Certificate/>
      </div>
    </>
  );
}

export default App;
