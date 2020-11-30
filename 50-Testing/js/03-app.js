/** 
 * * Provar dos valores
*/

function suma( a, b ) {
    return a + b;
}

function resta( a, b ) {
    return a - b;
}


async function sumaAsync( a, b ) {
    return Promise.resolve( suma( a, b ) );
}


let resultado = suma( 2, 1 );
let esperado  = 3;



resultado = resta(10, 5);
esperado  = 5;

test('Suma 10 + 20 y el resultado debe ser 30', async () => {
    const resultado = await sumaAsync(10, 20);
    const esperado  = 31;
    expected( esperado ).toBe( resultado );
});

async function test( mensaje, callback ) {
    try {
        await callback();
        console.log(`El Test: ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.log('Error: ');
        console.log(error);
    }
}

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
