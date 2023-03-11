import React from "react";

const Card = ({ userName, userApellido, ejercicioFavorito, selectValue }) => {
  return (
    <div class="card">
      <h3>Nombre: {userName} </h3>
      <h3>Apellido: {userApellido} </h3>
      <h3>Ejercicio favorito: {ejercicioFavorito} </h3>
      <h3>Turno: {selectValue} </h3>
    </div>
  );
};

export default Card;
