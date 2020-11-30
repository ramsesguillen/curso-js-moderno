/** 
 * * Modulo clinete
*/

export const nombrecliente = 'Guillén';
export const saldo = 100;

export function mostrarInformacion( nombre, saldo ) {
    return `Nombre: ${nombre} tu saldo es de: ${saldo}`;
}


//
export function tieneSaldo( saldo ) {
    if ( saldo > 0 ) {
        console.log('Tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

//
export class Cliente {
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Nombre: ${this.nombre} tu saldo es de: ${this.saldo}`;
    }
}

export default function nuevaFuncion() {
    console.log('Este es el export defaul no va entre llaves al importar');
    console.log('Solo puede haber uno por archivo');
}