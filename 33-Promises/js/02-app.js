/** 
 * * Callback Hell
*/

let paises = [];

function nuevoPais( pais, callback ) {
    paises.push( pais );
    console.log(`Agregado: ${pais}`);
    callback();
}


function mostrarPais() {
    console.log( paises );
}


function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPais );
        setTimeout(() => {
            nuevoPais('Francia', mostrarPais)
            setTimeout(() => {
                nuevoPais('España', mostrarPais)
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell();