import React from "react";
import TestimonialCard from "./Testimonialcard";
import testimonials from "../testimonials";
import logosData from "../logosData";

import { Slide, Fade } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <Slide direction="right" damping={0.1}>
        <h2>C'est vous qui en parlez le mieux</h2>
        <h1>Vos témoignages</h1>
      </Slide>
      <Fade cascade duration="1000">
        <div className="testimonials__container">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <Slide direction="right" damping={0.1}>
          <h2 className="testimonials__logos">Ils m'ont fait confiance</h2>
        </Slide>
        <div className="logos_container">
          {logosData.map((logo) => (
            <img
              key={logo.id}
              src={logo.img}
              alt="logo partenaires"
              className="logos"
              style={{ width: "10%", height: "10%" }}
            />
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Testimonials;
