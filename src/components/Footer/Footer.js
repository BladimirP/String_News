import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        String News - Gestión de Noticia
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://bladimirpardo.atlassian.net/l/c/YNdq5sAL" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
