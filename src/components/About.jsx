import React from "react";
import { Slide, Bounce, Fade } from "react-awesome-reveal";

//Images
import memoji from "../assets/memoji.png";

const About = () => {
  return (
    <section id="about" className="about">
      <Slide direction="right" damping={0.1}>
        <h2>La RH qui vous veut du bien</h2>
        <h1>C'est quoi Studios RH ?</h1>
      </Slide>
      <Bounce>
        <img src={memoji} alt="memoji" className="memoji" />
      </Bounce>

      <p>
        <Fade duration="3000">
          Lorem ipsum dolor sit amet. Et dolor esse cum quisquam molestias qui
          sunt inventore qui voluptatem doloribus. Ut quaerat ratione et quos
          magni et iusto sequi non deleniti consequuntur non dolores atque aut
          error quaerat est harum accusamus.
        </Fade>
      </p>

      <p>
        <Fade duration="3000">
          Id quia eius et labore autem aut perspiciatis nihil est voluptas
          natus. Hic molestias accusantium est repellendus optio quo beatae quos
          in quia facere At iusto iusto et omnis delectus. Ea ducimus ratione in
          velit praesentium eum ipsum corrupti et consequatur omnis sit
          exercitationem beatae est minima enim et magnam voluptatum. Qui neque
          sunt est soluta vitae et impedit fugiat aut eaque aperiam non cumque
          officia sit nihil magnam ut voluptas nihil.
        </Fade>
      </p>

      <button className="pink-btn about-btn">On discute ?</button>
    </section>
  );
};

export default About;
