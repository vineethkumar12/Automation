import "./App.css";

import { useEffect } from "react";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import Gallery from "./Components/Gallery";
import Services from "./Components/Services";
import Testmonials from "./Components/Testmonials";
import Contact from "./Components/Contact";
import INFO from "./Components/INFO";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";

Modal.setAppElement("#root");
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="App">
      <Home />
      <About />
      <Gallery />
      <Services />
      <Testmonials />
      <Contact />
      <INFO />
    </div>
  );
}

export default App;
