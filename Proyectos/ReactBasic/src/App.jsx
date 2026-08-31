import Header from "./componentes/Header";
import Lista from "./componentes/Lista";
import LoginForm from "./componentes/Login";
import { useState } from "react";

function App() {
  const nombre = "Jesur";

  const amigos = [
    { nombre: "Carlos", telefono: "123-456-789" },
    { nombre: "Alex", telefono: "123-456-789" },
    { nombre: "Cesar", telefono: "123-456-789" },
    { nombre: "Manuel", telefono: "123-456-789" },
  ];
  const famosos = [
    { nombre: "Pedro Pascal", telefono: "555-019-283" },
    { nombre: "Billie Eilish", telefono: "555-014-729" },
    { nombre: "Zendaya", telefono: "555-017-384" },
    { nombre: "Tom Holland", telefono: "555-012-948" },
  ];

  ///const sesionIniciada = true;

  const [sesionIniciada, setSegundoEstado] = useState(false);

  const cerrarSesion = () => {
    setSegundoEstado(false);
  };

  return (
    <>
      {sesionIniciada ? (
        <div className="contenedor">
          <Header nombre={nombre} />
          <Lista contactos={amigos} />
          <Lista titulo="Lista famosos" contactos={famosos} />
          <button className="btnCerrarSesion" onClick={cerrarSesion}>
            Cerrar Sesion
          </button>
        </div>
      ) : (
        <LoginForm setSegundoEstado={setSegundoEstado} />
      )}
    </>
  );
}

export default App;
