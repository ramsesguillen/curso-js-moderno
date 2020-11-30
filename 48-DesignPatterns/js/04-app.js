/**
 * * Factory
 * * Crear objetos basado en cierta condicion
*/
class InputHTML {
    constructor( type, nombre ) {
        this.type = type;
        this.nombre = nombre;
    }

    //
    crearInput() {
        return  `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
    }
}

class HTMLFactory {
    crearElemento( tipo, nombre ) {
        switch ( tipo ) {
            case 'text':
                    return new InputHTML('text', nombre);
                break;
            case 'tel':
                    return new InputHTML('tel', nombre);
                break;
            case 'email':
                    return new InputHTML('email', nombre);
                break;
            default:
                break;
        }
    }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente');
console.log(inputText.crearInput());

const inputTel = elemento.crearElemento('tel', 'telefono-cliente');
console.log(inputTel.crearInput());

const inputEmail = elemento.crearElemento('email', 'email-cliente');
console.log(inputEmail.crearInput());