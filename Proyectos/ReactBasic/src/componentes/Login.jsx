import { useState } from "react";

const LoginForm = ({ setSegundoEstado }) => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const iniciarSesion = () => {
    setSegundoEstado(true);
  };

  const handleUsuario = (evento) => {
    setUsuario(evento.target.value);
  };

  const handleContraseña = (evento) => {
    setContraseña(evento.target.value);
  };

  return (
    <div className="login">
      <form>
        <h3>Iniciar Sesion</h3>

        <input
          type="text"
          placeholder="Usuario"
          onChange={handleUsuario}
          value={usuario}
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={handleContraseña}
          value={contraseña}
        />
        <button onClick={iniciarSesion}>Inciar Sesion</button>
      </form>
    </div>
  );
};

export default LoginForm;
