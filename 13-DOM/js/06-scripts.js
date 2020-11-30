

const encabezado = document.querySelector('.contenido-hero h1');
console.log( {encabezado} );


console.log( encabezado.innerText ); // si en el css - visubility: hidden; no lo va a encontrar
console.log( encabezado.textContent ); // si lo va a encontrar
console.log( encabezado.innerHTML ); // se trae el HTML


encabezado.textContent = 'Nuevo texto';

const img = document.querySelector('.contenedor-cards .card img');
console.log( {img} );

img.src = 'img/hacer2.jpg';