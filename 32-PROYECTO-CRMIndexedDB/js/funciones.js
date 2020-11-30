

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
 * *Imprmir alerta de error o success
*/
const imprimirAlerta = ( mensaje, tipo ) => {

    const alerta = document.querySelector('.alerta');

    if ( !alerta ) {
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');
    
        ( tipo === 'error' ) ? divAlerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700') : divAlerta.classList.add('bg-greeb-100', 'border-green-400', 'text-green-700');
    
        divAlerta.textContent = mensaje;
    
        formulario.appendChild( divAlerta );
    
        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }
}