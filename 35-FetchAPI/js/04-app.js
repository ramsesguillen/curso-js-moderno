/** 
 * * Cargar api
*/

const cargarApiBtn = document.querySelector('#cargarAPI');
cargarApiBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url ='https://picsum.photos/list';

    fetch( url )
        .then( res => res.json())
        .then( data => mostrarHTML( data ) );
}

function mostrarHTML( data ) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    data.forEach( perfil => {
        const { author,  post_url } = perfil;

        html += `
            <p>Author: ${author}</p>
            <a href="${post_url}" target="_blank">Imagen</a>
        `;
    })

    contenido.innerHTML = html;
}