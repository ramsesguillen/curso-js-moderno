/** 
 * * Fetch
*/

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click',  obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';

    fetch( url )
        .then( resp => {
            // forma de retornar los datos 
            return resp.text();
        })
        .then( data => {
            // usar los datos obtenidos en el primer then
            console.log( data );
        })
        .catch( err => {
            console.log( err )
        });
}