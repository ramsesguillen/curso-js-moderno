const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const resultado = carrito.filter( producto => {
    return producto.precio > 200;
});


const mayor200 = ( producto ) => {
    return producto.precio > 200;
}

//* toma una funcion como argumento
const resultado2 = carrito.filter( mayor200 );
console.log( resultado2 );