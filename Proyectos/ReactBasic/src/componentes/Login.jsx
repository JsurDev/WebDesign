const LoginForm = () => {
  return (
    <div className="login">
      <form>
        <h3>Iniciar Sesion</h3>
        <input type="text" placeholder="Usuario" />
        <input type="text" placeholder="Contraseña" />
        <button>Inciar Sesion</button>
      </form>
    </div>
  );
};

export default LoginForm;
