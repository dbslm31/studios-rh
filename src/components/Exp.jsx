import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
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
      <Slide direction="right" damping={0.1}>
        <Timelinexp timelineItems={timelineItems} />
      </Slide>
      <div className="exp__description"></div>
      <img src={Wave2} alt="Vecteur vague" className="wave_down" />
    </section>
  );
};

export default Exp;
