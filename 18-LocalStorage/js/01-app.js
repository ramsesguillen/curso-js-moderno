/** 
 *  Agregar a localStorage setItem
*/

localStorage.setItem('Nombre', 'Diana');


const producto = {
    nombre: 'Monitor curvo',
    precio: 300
};


const productoString = JSON.stringify( producto );
localStorage.setItem( 'producto', productoString );


