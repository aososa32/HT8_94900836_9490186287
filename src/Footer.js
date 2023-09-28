import React from "react";

const Footer = () => {
  const integrantes = ["Asbel Sosa", "Brandon Boror"]; 

  return (
    <footer className="footer">
      <div className="container">
        <p>Integrantes del trabajo:</p>
        <ul>
          {integrantes.map((nombre, index) => (
            <li key={index}>{nombre}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
