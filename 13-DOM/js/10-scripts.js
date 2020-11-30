/** 
 * Crear HTML desde js
*/


const enlace = document.createElement('a');

// agregar texto 
enlace.textContent = 'Nuevo enlace';

// añadiendo href 
enlace.href = '/enlace';

//añadir atributos personalizados 
enlace.setAttribute('data-enlace', 'nuevo-enlace');

// añadir clases 
enlace.classList.add('alguna-clase');


// Seleccionar la navegacio 
const navegacion = document.querySelector('.navegacion');
// navegacion.append( enlace );
// navegacion.appendChild( enlace ); //inserta al final
navegacion.insertBefore( enlace, navegacion.children[1] );

// console.log( enlace );


// Crear un CARD 
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('p');
parrafo2.textContent = 'concierto de Rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800';
parrafo3.classList.add('precio');

// Crear la image 
const img = document.createElement('img');
img.src = 'img/hacer2.jpg';

// Crear div con la clase info 
const info = document.createElement('div');
info.classList.add('info');

info.appendChild( parrafo1 );
info.appendChild( parrafo2 );
info.appendChild( parrafo3 );

const card = document.createElement('div');
card.classList.add('card');

card.appendChild( img );
card.appendChild( info );


// Insertar en el html 
const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.appendChild( card );
contenedor.insertBefore( card, contenedor.children[0] );
