import imagen from '../assets/bosque1.jpg'
import CargarContador from '../contador';

import '../estilos.css';
import clases from '../imagen.module.css';


console.log('Juan Dev');

document.querySelector('#app').innerHTML=`
<h1>Hey Juan Dev</h1>

<img src="${imagen}" id="imagen" class="${clases.imagen}" alt="Imagen de un bosque" style="width: 300px; height: 200px;"/>
<h2>Veces Clickeado: <span id="cuenta" class="${clases.contador}">0</span></h2>
`;

//debo ejecutar la funcion
CargarContador();