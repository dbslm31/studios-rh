import React from "react";
import TestimonialCard from "./Testimonialcard";
import testimonials from "../testimonials";

import { Slide, Fade } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <Slide direction="right" damping={0.1}>
        <h2>C'est vous qui en parlez le mieux</h2>
        <h1>Vos témoignages</h1>
      </Slide>
      <div className="testimonials__container">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
