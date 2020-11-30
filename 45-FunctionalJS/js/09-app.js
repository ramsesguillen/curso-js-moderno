/**
 * * Curring and Partials: Dividir la funciones en partes
*/

const suma = (a, b, c) => a + b + c;

const parcial = a => b => c => suma( a, b, c );

const resultadoParcial = parcial(5)(4)(3);
console.log( resultadoParcial);

/* 
const parcial = a => (b, c) => suma( a, b, c );
const primerNumero = parcial( 5 );
const resultado = primerNumero( 4, 3);
console.log(resultado);
*/

/* 
const parcial = a => b => c => suma( a, b, c );
const primerNumero = parcial( 5 );
const segundoNumero = primerNumero( 4);
const resultado = segundoNumero(3);
console.log(resultado)
 */