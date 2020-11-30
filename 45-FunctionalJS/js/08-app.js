/**
 * * Closure: una forma de acceder a un valor desde el exiterior del scope
*/

const obtenerCliente = () => {
    const nombre = 'Guillen';

    function muestraNombre() {
        console.log( nombre );
    }

    return muestraNombre;
}

const cliente = obtenerCliente();
cliente();

