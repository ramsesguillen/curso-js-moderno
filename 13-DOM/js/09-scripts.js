
const primerEnlace = document.querySelector('a');
// primerEnlace.remove();

// Eliminar enlace desde el padre... 
const navegacion = document.querySelector('.navegacion');
console.log( navegacion.children );

navegacion.removeChild( navegacion.children[2]); 



