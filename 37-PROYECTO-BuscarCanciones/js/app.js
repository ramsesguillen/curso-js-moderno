/** 
 * * App Buscador de canciones
*/
import * as UI from './interfaz.js';
import API from './api.js';

const buscarCancion = ( e ) => {
    e.preventDefault();

    // obtener datos del formulario 
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if ( artista === '' || cancion === '' ) {
        UI.divMensaje.textContent = 'Error... Todos los canpos son obligatorios';
        UI.divMensaje.classList.add('error');

        setTimeout(() => {
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error');
        }, 3000);

        return;
    }

    // consultar la api 

    const busqueda = new API( artista, cancion );
    busqueda.consultarAPI();
}



UI.formularioBuscar.addEventListener('submit', buscarCancion );