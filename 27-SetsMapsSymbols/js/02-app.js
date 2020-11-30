/** 
 * * WeakSet [Solo pudes gaurdar objetos]
 * * No son iterables
 * * No existe el .size
*/
const weakset = new WeakSet();

const obj = {
    nombre: 'Salinas',
    saldo: 200
}
weakset.add( obj );

console.log( weakset);