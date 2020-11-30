/** 
 * Modificar css desde js
 * Recomendaciones: agregar o quitar clases al html
*/

const encabezado = document.querySelector('h1');

// console.log( encabezado.style );
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
card.classList.add('nueva-clase'); //agregara clase al elemento
card.classList.remove('card'); // quitar clase al elemento
console.log( card.classList );

const card2 = document.querySelectorAll('.card');
console.log( card2 );

