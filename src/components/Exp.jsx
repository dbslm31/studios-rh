import React, { useState } from "react";

// Components
import Timelinexp from "./Timelinexp";

//Data
import { timelineItems } from "../timelineItems";

const Exp = () => {
  return (
    <section id="exp" className="exp">
      <div className="exp__title">
        <h2>La RH qui vous veut du bien</h2>
        <h1>Mes expériences</h1>
      </div>
      <Timelinexp timelineItems={timelineItems} />
      <div className="exp__description"></div>
    </section>
  );
};

export default Exp;
