import React from "react";
import "./style.scss";
import Button from "../Button";
import iconAudio from "../../images/icon-audio.png";
import iconBanheiro from "../../images/icon-banheiro-acessivel.png";
import iconBraile from "../../images/icon-braile.png";
import iconCaoGuia from "../../images/icon-caoguia.png";
import iconElevador from "../../images/icon-elevador.png";
import iconEstacionamento from "../../images/icon-estacionamento.png";
import iconLibras from "../../images/icon-libras.png";
import iconPiso from "../../images/icon-piso-tatil.png";
import iconPorta from "../../images/icon-porta-larga.png";
import iconRampa from "../../images/icon-rampa.png";

const Card = ({ item }) => {
  const imagePath = require("../../images" + item.image);

  return (
    <div className="card__container">
      <div className="card__image">
        <img src={imagePath.default} alt={item.name} title={item.name}></img>
      </div>
      <div className="card__content">
        <h3>{item.name}</h3>
        <ul className="card__facilities">
          <li
            className={`card__facilities__item ${item.facilities[0]} ${
              !item.facilities[0].status
                ? "card__facilities__item--unchecked"
                : ""
            }`}
          >
            <img
              src={iconBraile}
              alt="Sinalização em Braile"
              title="Sinalização em Braile"
            />
          </li>
          <li
            className={`card__facilities__item ${item.facilities[1]} ${
              !item.facilities[1].status
                ? "card__facilities__item--unchecked"
                : ""
            }`}
          >
            <img
              src={iconAudio}
              alt="Audio descrição"
              title="Audio descrição"
            />
          </li>

          <li
            className={`card__facilities__item ${item.facilities[2]} ${
              !item.facilities[2].status
                ? "card__facilities__item--unchecked"
                : ""
            }`}
          >
            <img
              src={iconBanheiro}
              alt="Banheiro Acessível"
              title="Banheiro Acessível"
            />
          </li>
          <li
            className={`card__facilities__item ${item.facilities[3]} ${
              !item.facilities[3].status
                ? "card__facilities__item--unchecked"
                : ""
            }`}
          >
            <img
              src={iconElevador}
              alt="Elevador para Cadeirantes"
              title="Elevador para Cadeirantes"
            />
          </li>
          <li
            className={`card__facilities__item ${item.facilities[4]} ${
              !item.facilities[4].status
                ? "card__facilities__item--unchecked"
                : ""
            }`}
          >
            <img
              src={iconEstacionamento}
              alt="Estacionamento para Idosos/Deficientes"
              title="Estacionamento para Idosos/Deficientes"
            />
          </li>
          <li
            className={`card__facilities__item ${item.facilities[5]} ${
              !item.facilities[5].status
                ? "card__facilities__item--unchecked"
                : ""
            }`}
          >
            <img
              src={iconCaoGuia}
              alt="Permite Acesso de Cães-Guias"
              title="Permite Acesso de Cães-Guias"
            />
          </li>
          <li
            className={`card__facilities__item ${item.facilities[6]} ${
              !item.facilities[6].status
                ? "card__facilities__item--unchecked"
                : ""
            }`}
          >
            <img
              src={iconPiso}
              alt="Piso Tátil de Alerta"
              title="Piso Tátil de Alerta"
            />
          </li>
          <li
            className={`card__facilities__item ${item.facilities[7]} ${
              !item.facilities[7].status
                ? "card__facilities__item--unchecked"
                : ""
            }`}
          >
            <img src={iconPorta} alt="Portas Largas" title="Portas Largas" />
          </li>
          <li
            className={`card__facilities__item ${item.facilities[8]} ${
              !item.facilities[8].status
                ? "card__facilities__item--unchecked"
                : ""
            }`}
          >
            <img
              src={iconRampa}
              alt="Rampas de Acesso para Cadeirantes"
              title="Rampas de Acesso para Cadeirantes"
            />
          </li>
          <li
            className={`card__facilities__item ${item.facilities[9]} ${
              !item.facilities[9].status
                ? "card__facilities__item--unchecked"
                : ""
            }`}
          >
            <img
              src={iconLibras}
              alt="Atendimento em Libras"
              title="Atendimento em Libras"
            />
          </li>
        </ul>
        <p>{item.description}</p>
        <a href={item.link} target="_blank" className="card__button button">
          Como Chegar
        </a>
      </div>
    </div>
  );
};

export default Card;
