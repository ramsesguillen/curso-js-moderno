/** 
 * * Previeamente vimos getClientRect, que nos permite identificar cuando un elemento estaba visible,
 * * Existe otra API llamada intersection Observer.
*/

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver( entries => {
        if ( entries[0].isIntersecting ) {
            console.log('Elemento visible');
        }
    });

    observer.observe( document.querySelector('.premium'));
});