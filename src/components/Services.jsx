import React from "react";

//Libraries
import { Slide } from "react-awesome-reveal";

//Components
import Card from "./Card";
import HowtWorks from "./HowtWorks";

const Services = () => {
  return (
    <>
      <HowtWorks />
      <section id="services" className="services">
        <Slide direction="left" damping={0.1}>
          <h2>Ce que je peux faire pour vous</h2>
          <h1>Mes services</h1>
        </Slide>
        <div className="card__container">
          <Card
            title="PACK LUNE"
            price="150€"
            taxes="PRIX TTC"
            services={[
              "Service numéro 1 ",
              "Service numéro 2 ",
              "Service numéro 3 ",
            ]}
            not={["Service numéro 4 ", "Service numéro 5"]}
          />

          <Card
            title="PACK SOLEIL"
            price="250€"
            taxes="PRIX TTC"
            services={[
              "Service numéro 1 ",
              "Service numéro 2 ",
              "Service numéro 3 ",
              "Service numéro 4 ",
            ]}
            not={["Service numéro 5"]}
          />
          <Card
            title="PACK UNIVERS"
            price="400€"
            taxes="PRIX TTC"
            services={[
              "Service numéro 1 ",
              "Service numéro 2 ",
              "Service numéro 3 ",
              "Service numéro 4 ",
              "Service numéro 5",
            ]}
            not={[]}
          />
        </div>
      </section>
    </>
  );
};

export default Services;
