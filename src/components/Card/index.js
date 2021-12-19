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

const Card = () => {
  return (
    <div className="card__container">
      <div className="card__image"></div>
      <div className="card__content">
        <h3>Nome do local</h3>
        <ul className="card__facilities">
          <li className="card__facilities__item">
            <img
              src={iconBraile}
              alt="Sinalização em Braile"
              title="Sinalização em Braile"
            />
          </li>
          <li className="card__facilities__item">
            <img
              src={iconAudio}
              alt="Audio descrição"
              title="Audio descrição"
            />
          </li>

          <li className="card__facilities__item card__facilities__item--unchecked>">
            <img
              src={iconBanheiro}
              alt="Banheiro Acessível"
              title="Banheiro Acessível"
            />
          </li>
          <li className="card__facilities__item">
            <img
              src={iconElevador}
              alt="Elevador para Cadeirantes"
              title="Elevador para Cadeirantes"
            />
          </li>
          <li className="card__facilities__item">
            <img
              src={iconEstacionamento}
              alt="Estacionamento para Idosos/Deficientes"
              title="Estacionamento para Idosos/Deficientes"
            />
          </li>
          <li className="card__facilities__item">
            <img
              src={iconCaoGuia}
              alt="Permite Acesso de Cães-Guias"
              title="Permite Acesso de Cães-Guias"
            />
          </li>
          <li className="card__facilities__item">
            <img
              src={iconPiso}
              alt="Piso Tátil de Alerta"
              title="Piso Tátil de Alerta"
            />
          </li>
          <li className="card__facilities__item">
            <img src={iconPorta} alt="Portas Largas" title="Portas Largas" />
          </li>
          <li className="card__facilities__item">
            <img
              src={iconRampa}
              alt="Rampas de Acesso para Cadeirantes"
              title="Rampas de Acesso para Cadeirantes"
            />
          </li>
          <li className="card__facilities__item">
            <img
              src={iconLibras}
              alt="Atendimento em Libras"
              title="Atendimento em Libras"
            />
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          corporis nam! Consequatur atque porro repudiandae perspiciatis,
          inventore est delectus.
        </p>
        <Button>Como Chegar</Button>
      </div>
    </div>
  );
};

export default Card;
