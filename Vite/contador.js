const CargarContador =() =>{
    const imagen = document.getElementById('imagen');
    const cuenta = document.getElementById('cuenta');

    imagen.addEventListener('click',() => {
        cuenta.innerHTML=parseInt(cuenta.innerText)+1;
    });
};

//Debo exportar la Funcion
export default CargarContador;


//EJECUTAR
//ls
//cd +"nombre de proyecto"
//npm run dev