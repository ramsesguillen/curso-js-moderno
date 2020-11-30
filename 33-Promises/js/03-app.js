/** 
 * * Promises
 * 
 * * Hay tres valores posibles
 * 1.- fulfilled - El promise se cumplió
 * 2.- rejected - El promise no se cumplió
 * 3.- pending - No se ha cumplido y tampoco rechazado
*/

const aplicarDescuento = new Promise( ( resolve, reject) => {
    const descuento = true;

    if ( descuento ) {
        resolve('Descuento apliacado');
    } else {
        reject('No se aplicó el descuento');
    }
});



// aplicarDescuento.then( console.log );
aplicarDescuento
    .then( res => descuento( res ) )
    .catch( err => console.log( err ) );

// console.log( aplicarDescuento );

function descuento( msg ) {
    console.log( msg );
}
