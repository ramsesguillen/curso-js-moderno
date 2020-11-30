




class Cliente {

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }


    //
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }


    //
    static bienvenida() {
        return 'Bienvenido al vajero';
    }

}


const pedro = new Cliente( 'Pedro', 5000 );
console.log( Cliente.bienvenida() );
console.log( pedro.mostrarInformacion() );
console.log( pedro );