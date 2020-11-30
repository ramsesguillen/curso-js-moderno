/**
 * *
*/


const suma = ( a, b ) => a + b;
const multiplicar = ( a, b ) => a * b;

const sumaOMumtiplicar = ( fn ) => fn( 10, 20 );

console.log( sumaOMumtiplicar( suma ) );
console.log( sumaOMumtiplicar( multiplicar ) );