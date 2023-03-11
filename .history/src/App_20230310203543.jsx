import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [userName, setUserName] = useState("");
  const [userApellido, setUserApellido] = useState("");
  const [ejercicioFavorito, setEjercicioFavorito] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [send, setSend] = useState(false);


  const [errorSelect, setErrorSelect] = useState("");

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeUserApellido = (event) => {
    setUserApellido(event.target.value);
  };
  const onChangeEjercicioFavorito = (event) => {
    setEjercicioFavorito(event.target.value);
  };
  const onChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };

  const validUserName = (userName) => {
    const withoutSpace = userName.trim();

    if (withoutSpace.length >= 8) {
      return true;
    } else {
      setErrorSelect("Nombre no válido");
      return false;
    }
  };

  const completeInput = (userName, userApellido, ejercicioFavorito, userEdad) => {
    if (userName === "" || userApellido === "" || ejercicioFavorito === "" || userEdad === "") {
      setErrorSelect("Completar los campos");
      setSend(false);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameValid = validUserName(userName);

    const isCompleteInput = completeInput(userName, userApellido, ejercicioFavorito);

    if (selectValue === "") {
      setErrorSelect("Seleccionar turno");

      return;
    }

    if (isNameValid && isCompleteInput) {
      setSend(true);
      setErrorSelect("");
    }
  };

  return (

    <div className="App">
    <h2>Formulario Ingreso al Gimnasio</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={userApellido}
          onChange={onChangeUserApellido}
        />
        <input
          type="text"
          placeholder="Ejercicio favorito"
          value={ejercicioFavorito}
          onChange={onChangeEjercicioFavorito}
        />

        <select
          placeholder="Turno"
          value={selectValue}
          onChange={onChangeSelect}
        >
          <option value="" disabled default>
            Turno
          </option>
          <option value="Mañana">Mañana</option>
          <option value="Medio día">Medio día</option>
          <option value="Tarde">Tarde</option>
        </select>
        <input class = "btn "type="submit" value="Enviar" />
      </form>
      <div className="error">{errorSelect}</div>

      {send && (
        <Card
          userName={userName}
          userMail={userApellido}
          obraSocial={ejercicioFavorito}
          selectValue={selectValue}
        />
      )}
    </div>
  );
}

export default App;
