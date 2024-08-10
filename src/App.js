import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Navbar } from './components';
import { About, Contact, Experience, Feedbacks, Home, Tech, Works } from './pages';
import { StarsCanvas } from "./canvas";



const App = () => {
  return (
    <Router>
      <div className="relative z-50 !bg-primary !bg-cover !bg-scroll">
        <div className="!bg-hero-pattern bg-no-repeat bg-center !bg-scroll !bg-cover">
          <Navbar />
          <Home />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>    
    </Router>
  );
}

export default App;
