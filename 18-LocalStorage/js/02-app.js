
/** 
 * Recuperar de localStorage: getItem
*/

const nombre = localStorage.getItem('Nombre');
console.log( nombre );

const producto = localStorage.getItem('producto');
console.log( JSON.parse( producto ) );