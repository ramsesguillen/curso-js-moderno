/** 
 * * Comprovar si hay o no conexion a internet
*/

window.addEventListener('online', actualizarEstado );
window.addEventListener('offline', actualizarEstado );

function actualizarEstado() {

    if ( navigator.onLine ) {
        console.log('Si estas conectado a internet');
    } else {
        console.log('No tines conexion a internet');
    }
}
