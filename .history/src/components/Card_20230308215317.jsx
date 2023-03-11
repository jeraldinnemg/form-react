import React from "react";

const Card = ({ userName, userMail, obraSocial, selectValue }) => {
  return (
    <div>
      <h3>nombre: {userName} </h3>
      <h3>mail: {userMail} </h3>
      <h3>obra social: {obraSocial} </h3>
      <h3>medico: {selectValue} </h3>
    </div>
  );
};

export default Card;
