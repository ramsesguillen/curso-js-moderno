/** 
 * * APP JS
*/

import nuevaFuncion, { nombrecliente as nombre, saldo, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js'
import { Empresa } from './empresa.js';


console.log( nombre );
console.log( saldo );
// console.log('object');

console.log( mostrarInformacion( nombre, saldo ));

tieneSaldo( saldo );

const cliente = new Cliente( nombre, saldo );

console.log( cliente.mostrarInformacion());


const empresa = new Empresa( nombre, saldo, 'Anonimo');
console.log( empresa.mostrarInformacion());

nuevaFuncion();