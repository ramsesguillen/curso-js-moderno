 /** 
  * * EDITAR PRODUCTO
 */

 (() => {

    /** 
     * * VARIABLES 
    */
   let DB;
   let idCliente;

    //* Referencias del html
    const formulario = document.querySelector('#formulario');
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const empresaInput = document.querySelector('#empresa')
    /** 
     * * FUNCIONES
     * * Conecatar a la base de datos
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
     * *
    */
    const obtenerCliente = ( id ) => {
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess = ( e ) => {
            const cursor = e.target.result;

            if ( cursor ) {
                if ( cursor.value.id === Number( id ) ) {
                    llenarFormulario(cursor.value);
                }

                cursor.continue();
            }
        }
    }

    /** 
     * * Llenar el formulario con los datos del cliente
    */
    const llenarFormulario = ( cliente ) => {

        const { nombre, telefono, email, empresa, id} = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
    }


    /** 
     * * Actualizar cliente
    */
    const actualizarCliente = ( e ) => {
        e.preventDefault();
        if ( nombreInput.value === '' || emailInput.value === '' || telefono.value === '' || empresa.value === '' ) {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // Actualizar cliente 
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            telefono: telefonoInput.value,
            id: Number(idCliente)
        };

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put( clienteActualizado );

        transaction.oncomplete = () => {
            imprimirAlerta('Cliente Actualzado correctamente');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }

        transaction.onerror = () => {
            imprimirAlerta('Hubo un error', 'error');
        }
    }





    /** 
     * * EVENTOS
    */
    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        // Actualizar registro 
        formulario.addEventListener('submit', actualizarCliente);

        // Verificar el ID de la URL 
        const parametroURL = new URLSearchParams( window.location.search );
        idCliente = parametroURL.get('id');

        if ( idCliente ) {
            setTimeout(() => {
                obtenerCliente( idCliente );
            }, 100);
        }

    });
 })();