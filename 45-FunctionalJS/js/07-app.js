/**
 * * Funciones que retornan una funcion
*/

const obtenerCliente = () => () => 'Hola mundo!';

const fn = obtenerCliente();

console.log( fn() );