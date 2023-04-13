import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo-container">SRH</div>
      <div className="nav__links">
        <ul>
          <li>Qui suis-je ?</li>
          <li>Comment ça marche ?</li>
          <li>Mes services</li>
          <li>Le blog</li>
        </ul>
      </div>
      <button className="pink-btn">Contactez-moi</button>
    </nav>
  );
};

export default Nav;
