/** 
 * * Provar dos valores
*/

function suma( a, b ) {
    return a + b;
}

function resta( a, b ) {
    return a - b;
}


let resultado = suma( 2, 1 );
let esperado  = 3;

expected( esperado ).toBe( resultado );


resultado = resta(10, 5);
esperado  = 5;
expected( esperado ).toBe( resultado );
expected( esperado ).toEqueal( resultado );


function expected( esperado ) {
    return {
        toBe( resultado ) {
            if ( resultado !== esperado ) {
                console.error(`El ${resultado} es diferente a lo esperado: la orueba no pasó`);
            } else {
                console.log('La prueba pasó correctamente');
            }
        },
        toEqueal( resultado ) {
            if ( resultado !== esperado ) {
                console.error(`El ${resultado} no es igual a lo esperado: la orueba no pasó`);
            } else {
                console.log('La prueba pasó correctamente');
            }
        }
    }
}
