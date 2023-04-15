import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial__user">
        <img src={testimonial.img} alt={testimonial.alt} />
        <p className="user-name">{testimonial.name}</p>
      </div>
      <div className="testimonial__content">
        <p>{testimonial.content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
