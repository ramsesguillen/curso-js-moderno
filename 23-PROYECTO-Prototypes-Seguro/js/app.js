/** 
 * 
*/

// Constructore
function Seguro( marca, year, tipo ) {
    this.marca = marca;;
    this.year = year;
    this.tipo = tipo;
}


// Retornar marca
const nombreMarca = ( marca ) => {

    switch ( marca ) {
        case '1':
            return 'Americano';
        case '2':
            return 'Asiatico';
        case '3':
            return 'Europeo'
        default:
            return 'No se encontro la marca';
    }
}


// Realizar la cotizacion con los datos 
Seguro.prototype.cotizarSeguro = function() {
    /** 
     * 1 = Americano 1.15
     * 2 = Asiatico 1.05
     * 3 = Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    switch ( this.marca ) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    // leer el año 
    const diferencia = new Date().getFullYear() - this.year;

    // Cada año que la diferencia es mayor, el costo va reducirse un 3% 
    cantidad -= ( ( diferencia * 3 ) * cantidad ) / 100;

    /** 
     * Si el seguro es básico se multiplica por un 30% más
     * Si el seguro es completo se multiplica por un 50% más
    */
    return cantidad = ( this.tipo === 'basico' ) ? cantidad *= 1.30 : cantidad *= 1.50; 
}


//
function UI() {};


// Lena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;
    
    const selectYear = document.querySelector('#year');

    for ( let i = max; i > min; i-- ) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild( option );
    }
}


//Mouestra alerta en pantalla
UI.prototype.mostrarMensaje = ( mensaje, tipo ) => {

    const div = document.createElement('div');

    if ( tipo === 'error' ) {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar en el html 
    const formlario = document.querySelector('#cotizar-seguro');
    formlario.insertBefore( div, document.querySelector('#resultado') );

    setTimeout(() => {
        div.remove();
    }, 3000);
}


//
UI.prototype.mostrarResultado = ( total, seguro ) => {

    const { marca, year, tipo } = seguro;
    let textoMarca = nombreMarca( marca );

    // Crear le resultado 
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal"> ${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal"> ${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');
    
    // Mostrar el spinner 
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    
    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild( div );
    }, 3000);
}


//Instanciar UI
const ui = new UI();


//
document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
});


//
const catizarSeguro = ( e ) => {
    e.preventDefault();

    // leer la marca seleccionada 
    const marca = document.querySelector('#marca').value;
    
    // leer el año seleccionado
    const year = document.querySelector('#year').value;


    // leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if ( marca === '' || year === '' || tipo === '' ) {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
    
    ui.mostrarMensaje('Cotizando...', 'exito');

    // ocultar las cotizaciones previas 
    const resultados = document.querySelector('#resultado div');
    if ( resultados != null ) resultados.remove();

    // instanciar el seguro 
    const seguro = new Seguro( marca, year, tipo );
    const total = seguro.cotizarSeguro();

    ui.mostrarResultado(total, seguro);
}



//
const cargarEventos = () => {
    const formlario = document.querySelector('#cotizar-seguro');
    formlario.addEventListener('submit', catizarSeguro);
}



cargarEventos();