/** 
 * 
 * 
*/

// -------------- VARIABLES ------------
//
let tweets = [];

// Refencias al html 
const formulario  = document.querySelector('#formulario'),
      listaTweets = document.querySelector('#lista-tweets');






// -------------- FUNCIONES ------------
// Mostrar mensaje de error 
const mostrarError = ( mensaje ) => {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido 
    const contenido = document.querySelector('#contenido');
    contenido.appendChild( mensajeError );

    setTimeout( () => {
        mensajeError.remove();
    }, 3000);

} 


//
const crearHTML = () => {

    limpiarHTML();
    
    if ( tweets.length > 0 ) {
        tweets.forEach( tweet => {

            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            // Añadir la funcion de eliminar 
            btnEliminar.onclick = () => {
                borrarTweet( tweet );
            }

            const li = document.createElement('li');
            li.textContent = tweet.tweet;

            li.appendChild( btnEliminar );

            listaTweets.appendChild( li );
        });
    }

    sincronizarHTML();
}


//agregar los tweets actuales a localStorage
const sincronizarHTML = () => {
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}


//
const borrarTweet = ( {id} ) => {
    tweets = tweets.filter( tweet => tweet.id !== id );

    crearHTML();
}


//
const limpiarHTML = () => {
    while (listaTweets.firstChild) {
        listaTweets.removeChild( listaTweets.firstChild );
    }
}


// -------------- EVENTOS ------------
const agregarTweet = ( e ) => {
    e.preventDefault();

    // TextArea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validacion... 
    if ( tweet === '' ) {
        mostrarError('Escribe un tweet');
        return; // Evita que se ejecuten más lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    };

    // Añadir tweet al arreglo de tweets 
    tweets = [ ...tweets, tweetObj];

    // una vez agregado vamos a crear el html
    crearHTML();

    // Reinicir el formulario 
    formulario.reset();
}


const cargarEventos = () => {
    //cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo 
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];

        console.log( tweets);

        crearHTML();
    });
}


//
cargarEventos();