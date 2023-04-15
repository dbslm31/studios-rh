import React from "react";

//Libraries
import { Slide, Fade } from "react-awesome-reveal";

import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
} from "react-icons/tb";

import Wave2 from "../assets/waves2.png";

//Components
import Collapsible from "./Collapsible";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <img src={Wave2} alt="Vecteur vague" className="wave_down" />
        <div id="howto" className="howto">
          <Slide direction="right" damping={0.1}>
            <h2>Comment ça marche ?</h2>
            <h1>Prêt.e à te lancer ?</h1>
          </Slide>
          <Fade cascade duration="1000">
            <Collapsible
              icon={<TbCircleNumber1 />}
              title="Un entretien téléphonique de 30 min"
              content="Lorem ipsum dolor sit amet. Sed veniam provident ad corporis minus et explicabo officiis est sunt possimus sed dolore. Id quia eius et labore autem aut perspiciatis nihil est voluptas natus. Hic molestias accusantium est repellendus optio quo beatae quos in quia facere At iusto iusto et omnis delectus."
            />
            <Collapsible
              icon={<TbCircleNumber2 />}
              title="Le premier rendez-vous"
              content="Lorem ipsum dolor sit amet. Sed veniam provident ad corporis minus et explicabo officiis est sunt possimus sed dolore. Id quia eius et labore autem aut perspiciatis nihil est voluptas natus. Hic molestias accusantium est repellendus optio quo beatae quos in quia facere At iusto iusto et omnis delectus."
            />
            <Collapsible
              icon={<TbCircleNumber3 />}
              title="On met en place le plan d'action"
              content="Lorem ipsum dolor sit amet. Sed veniam provident ad corporis minus et explicabo officiis est sunt possimus sed dolore. Id quia eius et labore autem aut perspiciatis nihil est voluptas natus. Hic molestias accusantium est repellendus optio quo beatae quos in quia facere At iusto iusto et omnis delectus."
            />
          </Fade>
        </div>
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
        <button className="pink-btn">Demander un devis personnalisé</button>
      </section>
    </>
  );
};

export default Services;
