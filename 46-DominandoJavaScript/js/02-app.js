/**
 * * Explicit Binding
*/

function imprimirNombre( arg1, arg2 ) {
    console.log( `El alumnos ${this.nombre} está escuchando ${arg1} y ${arg2}`);
}


const alumno = {
    nombre: 'Guillen'
};

const canciones = ['Yellow', 'Hold on'];

imprimirNombre.call( alumno, canciones[0], canciones[1]);

imprimirNombre.apply( alumno, canciones);

const imprimir = imprimirNombre.bind( alumno, canciones[0], canciones[1] );
imprimir();
