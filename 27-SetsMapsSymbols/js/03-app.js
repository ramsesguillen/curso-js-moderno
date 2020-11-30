/** 
 * * Maps [listas con una llave y valor]
 * * son iterables
*/

const cliente = new Map();

// agregar elementos al amp 
cliente.set('nombre', 'Diana');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 1000);

cliente.forEach( (valor, llave) => {
    console.log( llave, valor );
})

// tamaño del map 
console.log( cliente.size);
// comprovar si existe un elemento 
console.log( cliente.has('nombre'));
// obtener un valor 
console.log( cliente.get('nombre'));


cliente.delete('saldo');

cliente.clear();
console.log( cliente );


// aseginar valores desde el constructor del map 
const paciente = new Map( [ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);


paciente.set('dr', 'Dr Asignado')
// reescribir valores 
paciente.set('nombre', 'Diana')

console.log( paciente);