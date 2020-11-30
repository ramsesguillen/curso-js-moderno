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


//
class Empresa extends Cliente {

    constructor( nombre, saldo, telefono, categoria ) {
        super( nombre, saldo );
        this.telefono = telefono;
        this.categoria = categoria;
    }


    // reescribir metodo
    static bienvenida() { 
        return 'Bienvenido al cajero de empresa';
    }

}


const pedro = new Cliente( 'Pedro', 5000 );
const empresa = new Empresa( 'Udemy', 1000, 983932112,'Cursos en linea');
console.log( empresa);
console.log( empresa.mostrarInformacion() );
