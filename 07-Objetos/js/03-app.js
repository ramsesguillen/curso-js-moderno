

const carrito = [];

const producto1 = {
    nombre: 'Monitor',
    precio: 2500
};

const producto2 = {
    nombre: 'Mouse',
    precio: 2000
};

const producto3 = {
    nombre: 'Teclado',
    precio: 500
};


let resultado;

// agrega el objeto producto en el carrito;
resultado = [...carrito, producto1];
// agrega el producto2 al resultado 
resultado = [...resultado, producto2];
// se agrega el producto3 al inicio del arreglo 
resultado = [producto3, ...resultado];

console.log( resultado );






