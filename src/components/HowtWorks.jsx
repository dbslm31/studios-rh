import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
} from "react-icons/tb";

import Collapsible from "./Collapsible";

const HowtWorks = () => {
  return (
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
  );
};

export default HowtWorks;
