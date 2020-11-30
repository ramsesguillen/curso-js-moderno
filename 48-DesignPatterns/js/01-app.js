/**
 * * CLASS PARENT (patron de diseño de creación)
 * * Define como debe de crearse los objetos
*/
class Persona {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Disna', 'persona@gmail.com');
console.log( persona );