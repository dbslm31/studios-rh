import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

//Images
import sky from "../assets/ciel.png";
import rocket from "../assets/fusée.png";
import waves from "../assets/waves.png";

const Header = () => {
  return (
    <section id="header" className="header">
      <div className="header__container">
        <div className="header__content">
          <Slide cascade damping={0.1} direction="up">
            <h1>
              Faîtes décoller votre{" "}
              <span className="header__span">carrière</span>
            </h1>
            <h2>Tania B | Consultante RH indépendante</h2>
            <p>
              Lorem ipsum dolor sit amet. Sed veniam provident ad corporis minus
              et explicabo officiis est sunt possimus sed dolore internos! Eum
              velit excepturi est quasi rerum sit deserunt eius et unde illo?
            </p>{" "}
          </Slide>
        </div>

        <Fade duration="3000">
          <div className="header__links">
            <button className="btn-bordered">Décollage immédiat</button>
            <a href="#">En savoir plus</a>
          </div>
        </Fade>
      </div>

      <div className="header__img">
        <img src={rocket} alt="ciel nocturne" className="img-rocket" />
        <img src={sky} alt="ciel nocturne" className="img-sky" />
      </div>
      <img src={waves} alt="vagues blanches" className="img-waves" />
    </section>
  );
};

export default Header;
