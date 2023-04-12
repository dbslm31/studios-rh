import React from "react";

//Images
import memoji from "../assets/memoji.png";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>La RH qui vous veut du bien</h2>
      <h1>C'est quoi Studios RH ?</h1>

      <img src={memoji} alt="memoji" className="memoji" />
    </section>
  );
};

export default About;
