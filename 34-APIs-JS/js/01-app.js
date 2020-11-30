/** 
 * * Notificaciones en el navegador
*/
const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( response => {
            console.log( 'La respuesta es: ', response );
        });
});



const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    console.log('object');
    if ( Notification.permission === 'granted' ) {
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Hoy hay un gran descuento solo para ti'
        });

        notificacion.onclick = () => {
            window.open('https://www.udemy.com');
        }
    }
});