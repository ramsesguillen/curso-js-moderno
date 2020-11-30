/** 
 * Seleccionar elementos por su clase...
 * 
*/

const header = document.getElementsByClassName('header');
console.log( header );


const hero = document.getElementsByClassName('hero');
console.log( hero );

// Si las calses existen más de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log( contenedores );

// Si una clase no existe
const noExiste = document.getElementsByClassName('no-sxiste');
console.log( noExiste );