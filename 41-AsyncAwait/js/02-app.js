/** 
 * async await
 * 1.- fetch utliza promise o es un promise
 * 2.- LUn promise tiene dos estados resolve o reject en el resolve trae los resultado y en reject si ocurrre algun erro
 * 3.- se hace asincrona la funcion para poder utilizar await y pausar el flujo del programa hasta que el promise se resuelva o regrese un erro
 * 
*/

const descargarClientes = () => {
    return new Promise( ( resolve, reject ) => {
        const error = true;

        setTimeout(() => {
            if ( !error ) {
                resolve('El listado de Clientes se descargó correctamente');
            } else {
                reject('Error en la conexion');
            }
        }, 3000);
    });
}

// Async await 
const ejecutar = async () => {
    try {
        console.log( 1 + 1);
        
        const resp = await descargarClientes(); // se espera (una pausa hasta obtener respuesta - ya sea un resolve o un reject)

        console.log( 2 + 2);
        // aqui podria enviar la respuesta a otra funcion 
        // pora eso el await hace que todo se detenga hasta 
        // que obtenga un resolve o un reject asi poder pasarlo al catch o a una funcion para poder trabajarlo
        console.log( resp );
    } catch (error) {
        // si el promise regresa un reject este es mandado en el catch 
        console.log(error);
    }
}

ejecutar();

