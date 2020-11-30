/** 
 * *Generardores
*/



function *generadorCarrito( carrito ) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[ i ];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

const iterador = generadorCarrito( carrito );

console.log( iterador.next());
console.log( iterador.next());
console.log( iterador.next());
console.log( iterador.next());
console.log( iterador.next());