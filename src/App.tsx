import React from "react";
import "./App.css";
import Home from "./onepirate/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./onepirate/Contact";
import { ParallaxProvider } from 'react-scroll-parallax';
import Articles from "./onepirate/Articles";
import Privacidade from "./onepirate/Privacidade";
import Resources from "./onepirate/Resources";
import Groups from "./onepirate/Groups";
import NotFound404 from "./onepirate/404";
import Floating from "./onepirate/modules/components/Floating";
import ReactPixel from 'react-facebook-pixel'; 
import ReactGA from "react-ga4";


function App() {
  
  React.useEffect(() => {
    // Inicialize o Pixel do Meta com seu ID
    ReactGA.initialize('AW-16515472425');
  }, []); // Garante que isso só seja executado uma vez


  React.useEffect(() => {
    // Inicialize o Pixel do Meta com seu ID
    ReactPixel.init('397619074247878');
  }, []); // Garante que isso só seja executado uma vez


  return (
    <React.Fragment>
      <ParallaxProvider>
        <BrowserRouter>
        <Floating>
          <Routes>
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog/*" element={<Articles />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/resources/*" element={<Resources />} />
            <Route path="/grupos/*" element={<Groups />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
          </Floating>
        </BrowserRouter>
      </ParallaxProvider>
    </React.Fragment>
  );
}

export default App;
