import React, { useState } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Wave2 from "../assets/waves2.png";
// Components
import Timelinexp from "./Timelinexp";

//Data
import { timelineItems } from "../timelineItems";

const Exp = () => {
  return (
    <section id="exp" className="exp">
      <div className="exp__title">
        <Slide cascade damping={0.1}>
          <h2>La RH qui vous veut du bien</h2>
          <h1>Mes expériences</h1>
        </Slide>
      </div>
      <Fade duration="3000">
        <Timelinexp timelineItems={timelineItems} />
      </Fade>
      <div className="exp__description"></div>
      <img src={Wave2} alt="Vecteur vague" className="wave_down" />
    </section>
  );
};

export default Exp;
