import React from "react";

// Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";

// Style
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
    </div>
  );
}

export default App;
