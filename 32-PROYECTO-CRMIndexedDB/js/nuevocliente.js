(() => {
/** 
 * * VARIABLES
*/
let DB;

//* Referencias del html
const formulario = document.querySelector('#formulario');



/** 
 * * FUNCIONES
*/

const conectarDB = () => {
    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = () => {
        console.log('Hubo un error');
    }

    abrirConexion.onsuccess = () => {
        DB = abrirConexion.result;
    }
}

/** 
 * * VAlidar los campos del formulario
*/
const validarCliente = ( e ) => {
    e.preventDefault();

    // Leer todos los inputs 
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    if ( nombre === '' || email === '' || telefono === '' || empresa === '' ) {
        imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    // Crear un objeto con la informacion 
    const cliente = {
        nombre,
        email,
        telefono,
        empresa,
        id: Date.now() 
    };

    crearNuevocliente( cliente );
}


/** 
 * * Insertar Cliente a la base de datos
*/
const crearNuevocliente = ( cliente ) => {
    const transaction = DB.transaction(['crm'], 'readwrite');

    const objectStore = transaction.objectStore('crm');

    objectStore.add( cliente );

    transaction.onerror = () => {
        console.log('Hubo un error');
        imprimirAlerta('Hubo un error', 'error');
    }

    transaction.oncomplete = () => {
        imprimirAlerta('El cliente se agregó correctamente');

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    }
} 




/** 
 * * EVENTOS
*/
document.addEventListener('DOMContentLoaded', () => {
    conectarDB();

    formulario.addEventListener('submit', validarCliente);
});



})();