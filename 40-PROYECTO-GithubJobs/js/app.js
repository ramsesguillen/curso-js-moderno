/** 
 * * VARIABLES
*/
//* Referebcuas del HTML
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');



/** 
 * * FUNCIONES
*/
const validarBusqueda = ( e ) => {
    e.preventDefault();

    const busqueda = document.querySelector('#busqueda').value;

    if ( busqueda.length < 3 ) {
        mostrarMensaje('Búsqueda muy corta... Añade más información');
        return;  
    }

    consultarAPI( busqueda );
}

/** 
 * * consultar api de github job
*/
const consultarAPI = ( busqueda ) => {
    const githubUrl = `https://jobs.github.com/positions.json?search=${busqueda}`;
    const url = `https://api.allorigins.win/get?url=${ encodeURIComponent( githubUrl)}`;

    axios.get( url )
        .then( resp => mostrarVacantes( JSON.parse( resp.data.contents ) ) )
}

/** 
 * * MOstrar informacion en HTML
*/
const mostrarVacantes = ( vacantes ) => {
    while ( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }

    if ( vacantes.length > 0 ) {
        resultado.classList.add('grid');

        vacantes.forEach( vacante => {
            const { company, title, type, url, description } = vacante;
            resultado.innerHTML += `    
                <div class="shadow bg-white p-6 rounded">
                    <h2 class="text-2xl font-light mb-4">${title}</h2>
                    <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                    <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                    <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
                </div>
            `   
        });
    } else {
        const noResultado = document.createElement('p');
        noResultado.classList.add('text-center', 'mt-10', 'text-gray-600', 'w-full');
        resultado.classList.remove('grid');
        noResultado.textContent = 'No hay vacantes, intenta con otro término de búsqueda'
        resultado.appendChild( noResultado );
    }
}

/** 
 * *
*/
const mostrarMensaje = ( msg ) => {
    const alertaPrevia = document.querySelector('.alerta');

    if ( !alertaPrevia ) {
        const alerta = document.createElement('div');
        alerta.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta');
        alerta.textContent = msg;

        formulario.appendChild( alerta );

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}



/** 
 * * EVENTOS
*/
document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarBusqueda);
});

