/** 
 * * Modulo de Empresa
*/

import { Cliente } from './cliente.js';

export class Empresa extends Cliente {
    constructor( nombre, saldo, categoria ) {
        super( nombre, saldo );
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return `Nombre: ${this.nombre} tu saldo es de: ${this.saldo} categoria: ${this.categoria}`;
    }
}