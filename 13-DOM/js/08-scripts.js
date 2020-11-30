/** 
 * Traversing: Recorrer el DOM
*/


const navegacion = document.querySelector('.navegacion');

console.log( navegacion.firstElementChild ); // el primer elemento
console.log( navegacion.lastElementChild ); // el ultimo elemento
// console.log( navegacion.childNodes ); // Los espacios en blanco son considerados elementos
// console.log( navegacion.children );



const cards = document.querySelectorAll('.contenedor-cards .card');
const card1 = cards[0];

card1.children[1].children[1].textContent = 'Nuevo heading';
// console.log( card1.children[1].children[1].textContent );

card1.children[0].src = 'img/hacer3.jpg';
// console.log( card1.children);


// ----------------- Traversing del Hijo al padre --------------------

// console.log( card1.parentNode ); //revisa los espacios en blanco
console.log( card1.parentElement ); 
console.log( card1.parentElement.parentElement ); 

// ------------------- apuntar al heramo del elemento ------------
console.log( card1 );
console.log( card1.nextElementSibling );
console.log( card1.nextElementSibling.nextElementSibling );


// ----------------- el hermano anterior
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log( ultimoCard.previousElementSibling );