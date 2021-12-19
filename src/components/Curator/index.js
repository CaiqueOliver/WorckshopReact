import React from "react";
import "./style.scss";
import curatorPhoto from "../../images/foto-perfil.jpg";

function curatorItem() {
  return (
    <div className="curator__container">
      <div className="curator__photo">
        <img src={curatorPhoto} alt="Foto Perfil" />
      </div>

      <div className="curator__details">
        <div>
          <h3>Caique Oliveira</h3>
          <h6>Apresentador</h6>
        </div>
        <p>
          Desenvolvido por um aluno do segundo período de desenvolvimento web da
          Faculdade Pitágoras.
        </p>
      </div>
    </div>
  );
}

export default curatorItem;
