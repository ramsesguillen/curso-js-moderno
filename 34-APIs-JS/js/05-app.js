/** 
 * * Detectar cuando estamos viendo la pagina actual
*/

document.addEventListener('visibilitychange', () => {
    if ( document.visibilityState === 'visible' ) {
        console.log('Ejecutar funcion para reproducir el video');
    } else {
        console.log('pausar el video');
    }
});