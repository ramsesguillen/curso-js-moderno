/** 
 * * Crear base de datos en indexDB
*/

let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB() {
    // Crear base de datos version 1.0 
    let crmDB = window.indexedDB.open('crm', 1);
    // Si hay un error 
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la BD');
    }
    // si cre creo bien 
    crmDB.onsuccess = function() {
        console.log('Base de datos creado');

        DB = crmDB.result;
    }
    // Configuracion de la base de datos
    crmDB.onupgradeneeded = function( e ) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // DEfinir las columnas 
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
    }
}

function crearCliente() {
    let transaction = DB.transaction(['crm'],'readwrite');

    transaction.onsuccess = function() {
        console.log('Transacción completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error  en la transaccón');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 2343242,
        nombre: 'Diana',
        email: 'correo@correo.com'
    };

    const peticion = objectStore.add( nuevoCliente );
    console.log( peticion);
    
}