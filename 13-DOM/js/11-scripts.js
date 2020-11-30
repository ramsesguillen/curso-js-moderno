const btnFlotante = document.querySelector('.btn-flotante');
const footer      = document.querySelector('.footer');

btnFlotante.addEventListener('click', () => {
    footer.classList.toggle('activo');
    btnFlotante.classList.toggle('activo');
    // if ( btnFlotante.classList.contains('activo')) btnFlotante.textContent = 'Cerrar';
    ( btnFlotante.classList.contains('activo') ) ? btnFlotante.textContent = 'Cerrar'
                                                 : btnFlotante.textContent = 'Idioma y moneda'; 
});
 