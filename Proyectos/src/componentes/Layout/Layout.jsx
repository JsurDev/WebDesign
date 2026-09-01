import "./Layout.css";
import { Play, CassetteTape, ListPlus, Music, Pause } from "lucide-react";
import hustleImg from "../../assets/images/hustle.jpg";
import vector2 from "../../assets/images/vector2.png";
import vector3 from "../../assets/images/vector3.png";
import vector4 from "../../assets/images/vector4.jpg";

const Layout = () => {
  const customAreas = {
    areaCocepto: { gridArea: "box-1" },
    areaVector: { gridArea: "box-2" },
    areaPhilosophy: { gridArea: "box-3" },
    areaCanva: { gridArea: "box-4" },
    areaMusic: { gridArea: "box-5" },
  };

  return (
    <div className="contenedor-grid">
      <div className="box" style={customAreas.areaCocepto}>
        <div className="conceptoContenedor">
          <h4>CONCEPT DRAWING</h4>
          <div className="imgWrap">
            <img src={vector2} alt="Vector diseño" className="imgCocepto" />
          </div>
        </div>
      </div>
      <div className="box" style={customAreas.areaVector}>
        <img src={vector4} alt="Vector libre" className="vectorLibre" />
      </div>
      <div className="box" style={customAreas.areaPhilosophy}>
        <h4>DESING PHILOSOPHY</h4>
        <img src={vector3} alt="Vector Philosophy" className="imgPhilosophy" />
      </div>
      <div className="box" style={customAreas.areaCanva}>
        <img src={hustleImg} alt="Hustle artwork" className="imgCanva" />
      </div>
      <div className="boxSoundtrack" style={customAreas.areaMusic}>
        <div className="soundtrackDiv">
          <h4>SOUNDTRACK</h4>
          <hr className="linea" />
          <button className="btnPlay" type="button">
            <span>Play</span>
            <Play size={16} color="rgb(66, 38, 43)" fill="rgb(66, 38, 43)" />
          </button>
        </div>
        <div className="playList">
          <div className="casseteIcon">
            <CassetteTape size={125} color="#d2adb8" />
          </div>
          <div className="musicList">
            <div className="headerLista">
              <span>
                <ListPlus size={23} color="rgb(229, 66, 96)" />
                Lista de musica
              </span>
              <hr className="linea" />
            </div>
            <div className="listaMusica">
              <ul className="canciones">
                <li>
                  <Music size={18} color="rgb(229, 66, 96)"></Music>
                  <a
                    href="https://youtu.be/5NPBIwQyPWE?si=e1tRGp5HQiD9rwQh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Avril Lavigne - Complicated</span>
                  </a>
                </li>
                <li>
                  <Music size={18} color="rgb(229, 66, 96)"></Music>
                  <a
                    href="https://youtu.be/wNHGT-neTes?si=jUXeaSXGi7bse6Bn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>blink-182 - I Miss You</span>
                  </a>
                </li>
                <li>
                  <Music size={18} color="rgb(229, 66, 96)"></Music>
                  <a
                    href="https://youtu.be/fV4DiAyExN0?si=SGpNal2WJrERGnxi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Hoobastank - The Reason</span>
                  </a>
                </li>
                <li>
                  <Music size={18} color="rgb(229, 66, 96)"></Music>
                  <a
                    href="https://youtu.be/iAP9AF6DCu4?si=MvbUXsQCE7MRdxBJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>The Calling - Wherever You Will Go </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
