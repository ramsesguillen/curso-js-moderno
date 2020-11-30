const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Comprovar si un valor existe en un arreglo
meses.forEach( mes => {
    if ( mes == 'Enero') console.log( 'enero su existe' );
});


const existe = meses.includes('Diciembre');
console.log( existe );

//en un arreglo de objetos se utiliza .some
const existe1 = carrito.some( producto => producto.nombre === 'Celular');
console.log( existe1 );

// En un arreglo 
const existe2 = meses.some( mes => mes === 'Enero');
console.log( existe2 );