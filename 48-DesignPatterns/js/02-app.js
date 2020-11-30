/**
 * * CONSTUCTOR PARENT ( clases abstractas )
 * * Crear una clase padre para que los demas hereden de esta
*/
class Persona {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor( nombre, email, empresa ) {
        super (nombre, email);
        this.empresa = empresa;
    }
}

const cliente = new Cliente('Miguel', 'cliente@gmail.com', 'Udemy');
console.log( cliente);