/** 
 * Diferencias entre un arrow funcion () => {} y una funcion normal
*/


const btn = document.querySelector('#btn');


btn.addEventListener('click', function()  {
    // con this hacemos refencia al objeto donde nos encontramos 
    // en este caso de btn 
    // console.log(btn, ' - con btn');
    console.log(this, '- con this');
    // console.log(btn.className, ' - con btn');
    console.log(this.className, '- con this');
});

btn.addEventListener('click', () => {
    // console.log( this );
    // con arrow function no es es posible refenciar a la clase actual, esta busca en la clase global window 
    console.log(btn, ' - con btn');
    // console.log(this, '- con this'); //error
    console.log(btn.className, ' - con btn');
    // console.log(this.className, '- con this'); //undefined - no encontro en el objeto global
});

 