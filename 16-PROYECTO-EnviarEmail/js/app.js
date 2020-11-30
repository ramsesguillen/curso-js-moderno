/** 
 * 
*/

// -------------- VARIABLES ----------------
// expresion regular para validar email 
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Referencias al html 
const btnEnviar  = document.querySelector('#enviar'),
      btnReset   = document.querySelector('#resetBtn'),
      asunto     = document.querySelector('#asunto'),
      mensaje    = document.querySelector('#mensaje'),
      email      = document.querySelector('#email'),
      formulario = document.querySelector('#enviar-mail'); 



//--------------- FUNCIONES ----------------
const validarFormulario = ( e ) => {


    if ( e.target.value.length > 0 ) {

        // Eliminar los errores 
        const error = document.querySelector('p.error');
        
        (error) ? error.remove() : '' ;
        

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if ( e.target.type === 'email') {

        if ( er.test( e.target.value ) ) {
            const error = document.querySelector('p.error');
            (error) ? error.remove() : '' ;

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no valido');
        }
    }

    if ( er.test( email.value ) && asunto.value && mensaje.value ) {
        btnEnviar.disabled = false;;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}


// 
const mostrarError = ( mensaje ) => {

    const mensajeError = document.createElement('p');

    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if ( errores.length === 0) {
        formulario.appendChild( mensajeError );
    }

}


//
const resetearFormulario = () => {
    formulario.reset();
    init();
}


// --------------  EVENTOS -------------------
const cargarEventos = () => {
    // cuando la app arranca
    document.addEventListener('DOMContentLoaded', init)

    // Campos del formulario 
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    btnReset.addEventListener('click', resetearFormulario);
    
    formulario.addEventListener('submit', ( e ) => {
        e.preventDefault();
        console.log( 'ENVIANDO FORMULARIO......');
        resetearFormulario();
    });
    

}


// Iniciar app
const init = () => {
    // cargarEventos();
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
} 

cargarEventos();