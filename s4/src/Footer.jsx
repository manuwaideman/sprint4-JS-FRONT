import React, { useState } from "react";
import { Dropdown } from 'react-bootstrap';
import "./css/style.css";
import footer from "./images/footer.png";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Form from './Form';

const Footer = () => {
  const [isOptionMenuOpen, setOptionMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Horário de Funcionamento"
  );

  const toggleOptionMenu = () => {
    setOptionMenuOpen(!isOptionMenuOpen);
  };

  const handleOptionClick = (optionText) => {
    setSelectedOption(optionText);
    setOptionMenuOpen(false);
  };

  return (
    <footer id="footer">
      <img className="footer-img" src={footer} alt="" />
      <div className="tittle-text">
        <p>SOBRE NÓS</p>
        <h1 className="about-text">
          Acreditamos que a tecnologia e a sustentabilidade podem se unir para
          criar cidades mais inteligentes e ecológicas. Estamos empenhados em
          tornar nossa visão realidade. Junte-se a nós nessa jornada e seja
          parte da transformação. Vamos trabalhar juntos para construir um
          futuro mais verde e inteligente para todos.
        </h1>
      </div>
      <div className="d-flex justify-content-center align-items-center m-5">
      <Dropdown drop="down" className="m-5">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedOption}
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-center">
          <Dropdown.Item onClick={() => handleOptionClick("Segunda a Sexta - 9:00 to 21:00")}>
            Segunda à Sexta - 9h às 21h
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionClick("Sábados e Domingos - 10:00 to 19:00")}>
            Sábados e Domingos - 10h às 19h
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <Form />

      <div className="social-links p-5">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-youtube-play"></i>
        <p>@2023 - Todos Direitos Reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
