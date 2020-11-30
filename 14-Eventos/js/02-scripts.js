const nav = document.querySelector('.navegacion');

//registrar un evento 
nav.addEventListener('mouseenter', () => {
    console.log( 'Entrando a la navegacion');
});

nav.addEventListener('mouseout', () => {
    console.log( 'Saliendo a la navegacion');
});


// mousedown - similar al click
// click
// dbclick - doble click
// mouseup - cuando sueltas el mouse