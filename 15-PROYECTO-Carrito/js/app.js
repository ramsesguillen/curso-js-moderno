/** 
 * 
*/

// ------------ Varaibles -------------
let articulosCarrito = [];

// Referecias al html 
const carrito           = document.querySelector('#carrito'),
      contenedorCarrito = document.querySelector('#lista-carrito tbody'),
      vaciarCarritoBtn  = document.querySelector('#vaciar-carrito'),
      listaCursos       = document.querySelector('#lista-cursos');


// --------------- Funciones ----------------- 
//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
const leerDatosCurso = ( curso ) => {
    
    //crea un objeto con el contenido del curso actual
    const infoCurso = {
        img      : curso.querySelector('img').src,
        titulo   : curso.querySelector('h4').textContent,
        precio   : curso.querySelector('.precio span').textContent,
        id       : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    };

    // Recisa si un elemento ya existe en el carrito 
    const existeCurso = articulosCarrito.some( curso => curso.id === infoCurso.id );

    if ( existeCurso ) {
        // Actualizamos la cantidad 
        const cursos = articulosCarrito.map( curso => {
            if ( curso.id === infoCurso.id ) {
                curso.cantidad++;
            }
            return curso;
        });
        articulosCarrito = [...cursos];
    } else {
        // Agrega elementos al arreglo de carrito
        articulosCarrito = [ ...articulosCarrito, infoCurso];
    }

    carritoHTML();
}

const carritoHTML = () => {
    //limpiar html
    limpiarHTML();
    // Recorrer el carrito y geberar el HTML 
    articulosCarrito.forEach( curso => {
        const {img, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${img}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;
        //agregar el HTML del carrito en el tbody 
        contenedorCarrito.appendChild( row );
    });

    sincronizarStorege();
}


//
const sincronizarStorege = () => {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


// Eliminar los cursos del tbody 
const limpiarHTML = () => {
    // Forma lenta 
    // contenedorCarrito.innerHTML = '';
    while ( contenedorCarrito.firstChild ) {
        contenedorCarrito.removeChild( contenedorCarrito.firstChild );
    }
}





// ---------------Eventos---------------- 
// Cargar eventos   
const cargarEventos = () => {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
    });

    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];
        carritoHTML();
    });
}


//
const agregarCurso = ( e ) => {
    e.preventDefault();

    if ( e.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccinado = e.target.parentElement.parentElement;
        leerDatosCurso( cursoSeleccinado );
    }
}


//
const eliminarCurso = ( e ) => {
    if ( e.target.classList.contains('borrar-curso') ){
        const cursoId = e.target.getAttribute('data-id');

        // Eliminar del arreglo de articulosCarrito por el data-id 
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );
        carritoHTML();
    }
}


// Iniciar app 
const init = () => {
    cargarEventos();
}
init();

