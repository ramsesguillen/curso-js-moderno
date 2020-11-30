

const formulario = document.querySelector('#formulario');


const validarFormulario = ( e ) => {
    e.preventDefault();
    
    console.log( 'Consultar api');
    
    console.log( e.target.action );
}

formulario.addEventListener('submit', validarFormulario );

