/** 
 * * Probando async await con peticiones a API
*/

const url = 'https://picsum.photos/list';


const obtenerDatos = () => {
    fetch( url )
        .then( resp => resp.json())
        .then( resultado => console.log(resultado))
        .catch(err => console )
}

const obtenerDatos2 = async () => {
    try {
        const resp      = await fetch(url);
        const resultado = await resp.json();
        console.log(resultado); 
    } catch (error) {
        console.log(error);
    }
}


document.addEventListener('DOMContentLoaded', obtenerDatos2);