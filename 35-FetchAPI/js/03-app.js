/** 
 * * Cargar array json 
*/

const cargarJSONarrayBtb = document.querySelector('#cargarJSONArray');
cargarJSONarrayBtb.addEventListener('click', obtenerDatos );

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch( url )
        .then( resp => resp.json() )
        .then( data => mostrarHTML( data ));
}

function mostrarHTML( empleados ) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach( empleado => {
        const { id, nombre, empresa, trabajo } = empleado;

        html += `
            <p>Empleado: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    })

    contenido.innerHTML = html;
}