
const Header = (props) => {
  return (
    <header className="header">
      <h1>Practicando {props.nombre}!</h1>
      <p>La fecha actual es {new Date().toLocaleDateString()}</p>
    </header>
  );
};

export default Header;
