/** 
 * * Provar dos valores
*/

function suma( a, b ) {
    return a + b;
}

function resta( a, b ) {
    console.log(a - b);
    return a - b;
}


let resultado = suma( 2, 1 );
let esperado  = 3;

if ( resultado !== esperado ) {
    console.error(`El ${resultado} es diferente a lo esperado: la orueba no pasó`);
} else {
    console.log('La prueba pasó correctamente');
}

resultado = resta(10, 2);
esperado  = 10;

if ( resultado !== esperado ) {
    console.error(`El ${resultado} es diferente a lo esperado: la orueba no pasó`);
} else {
    console.log('La prueba pasó correctamente');
}