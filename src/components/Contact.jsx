import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Wave3 from "../assets/wave3.png";

//Libraries
import { Slide, Fade } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dtbz6ma",
        "template_i3amcc4",
        form.current,
        "JZ3FubIKJRWJYla0g"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <section className="contact" id="contact">
      <Slide direction="right" damping={0.1}>
        <h2>Discutons un peu ensemble</h2>
        <h1>Contactez-moi</h1>
      </Slide>
      <div className="form-container">
        {submitted ? (
          <div className="submitted_text">Thank you for your message!</div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div className="user-infos">
              <div className="contact-col">
                <input
                  type="text"
                  name="last name"
                  placeholder="Ton nom"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Ton numéro de téléphone"
                />
              </div>

              <div className="contact-col">
                <input
                  type="text"
                  name="first name"
                  placeholder="Ton prénom"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Ton Email"
                  required
                />
              </div>
            </div>
            <select onChange={handleChange}>
              <option value="">De quoi voulez-vous parler ?</option>
              <option value="1-10">1-10</option>
              <option value="10-15">10-15</option>
              <option value="15-20">15-20</option>
              <option value="20+">20+</option>
            </select>

            <textarea
              name="message"
              rows="7"
              placeholder="Écrivez votre message ici et soyez le plus détaillé possible ;)"
              required
            ></textarea>
            <button type="submit" className="pink-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
      <img src={Wave3} alt="Vecteur vague" className="wave_3" />
    </section>
  );
};

export default Contact;
