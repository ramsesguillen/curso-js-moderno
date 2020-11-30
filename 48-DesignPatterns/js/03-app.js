/**
 * * SINGLETON
 * * No pudes crear multiples insancias de una misma clase
*/

let instancia = null;

class Persona {
    constructor( nombre, email ) {
        if ( !instancia ) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const persona = new Persona('Salinas', 'slinas@gmail.com');
console.log(persona);

const persona2 = new Persona('Ramses', 'Ramses@gmail.com');
console.log(persona2);
