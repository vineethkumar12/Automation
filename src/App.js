import "./App.css";
import { useEffect } from "react";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import Gallery from "./Components/Gallery";
import Services from "./Components/Services";
import { ToastContainer, toast } from "react-toastify";
import Contact from "./Components/Contact";
import INFO from "./Components/INFO";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";
import SmartSwitchSection from "./Components/SmartSwitchSection";
import FeaturesSection from "./Components/FeaturesSection";
import HowItWorks from "./Components/HowItWorks";
import Video from "./Components/Video";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutCompany from "./Components/AboutCompany";

Modal.setAppElement("#root");

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Toast notifications */}
        <ToastContainer />

        <Routes>
          <Route
            path="/Automation"
            element={
              <>
                <Home />
                <About />
                <FeaturesSection />
                <SmartSwitchSection />
                <Video />
                <HowItWorks />
                <Services />
                <Gallery />
                <Contact />
                <INFO />
              </>
            }
          />

          <Route path="/aboutcompany" element={<AboutCompany />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;