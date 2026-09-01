import Header from "./componentes/Header/Header";
import Layout from "./componentes/Layout/Layout";

function App() {
  return (
    <>
      <div className="main-contenedor">
        <Header />
        <Layout />
        <main className="layout"></main>
      </div>
    </>
  );
}

export default App;
