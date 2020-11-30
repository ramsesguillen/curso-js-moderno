/** 
 * * API CLINETES 
*/

const url = 'http://localhost:3000/clientes';

/** 
 * * Se crea un nuevo cliente
*/
export const nuevoCliente = async ( cliente ) => {

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log( error );
    }
}

/** 
 * * Obtiene todos los clientes
*/
export const obtenerClientes = async () => {
    try {
        const resp = await fetch( url );
        const clientes = await resp.json();
        return clientes;
    } catch (error) {
        console.log( error );
    }
}

/** 
 * * Elimina clientes
*/
export const eliminarCliente = async ( id ) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log( eliminar );
    }
}

/** 
 * * Obtiene un cliente por su ID
 * @param id el id del cliente
*/
export const obtenerCliente = async ( id ) => {
    try {
        const resp = await fetch(`${url}/${id}`);
        const cliente = await resp.json();
        return cliente;
    } catch (error) {
        console.log( error );
    }
}

/** 
 * * Actualiza un registro
*/
export const editarCliente = async ( cliente ) => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log( error );
    }
}