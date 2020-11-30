/** 
 * * Sets [No almacena valores duplicados]
 * * los sets son iterables
*/

const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

carrito.forEach( producto => {
    console.log( producto);
});


// eliminar elemente [true si logro eliminar el elemento false si no]
carrito.delete('Disco #3')

// comprovar si existe un elemento 
console.log( carrito.has('Guitarra'));

// Longitud del set 
console.log( carrito.size );

// Vaciar el set 
carrito.clear();

console.log( carrito);

//! Uso del set 
// Del siguiente arraglo, eliminar los duplicados 
const numeros = [10, 20, 30, 10, 40, 10, 50];
const noDuplicados = new Set( numeros );
console.log( noDuplicados);