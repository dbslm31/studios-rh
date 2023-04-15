import React from "react";

// Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Exp from "./components/Exp";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

// Style
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Exp />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
