/**
 * * Funciones puras
 * 1.- No modifica una variable global
 * 2.- Cantaidad de entradas = cantidad de salida en cunato a paramtros
*/

const numero = 20;

const duplicar = numero => numero * 2;

const resultado = duplicar( 20 );
console.log( numero);
console.log( resultado);