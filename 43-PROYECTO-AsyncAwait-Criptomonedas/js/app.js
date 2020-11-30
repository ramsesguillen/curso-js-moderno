/** 
 * * App cotizar criptononedas de la API DE CriptoCompare
*/

/** 
 * * VARIABLES
*/
//* Refencias del html
const criptomonedaSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
};


//*! Crear Pormise para obtener criptomonedas
const obtenerCriptononedas = ( criptomonedas ) => new Promise( resolve => {
    resolve( criptomonedas );
});


/** 
 * * FUNCIONES
*/
const consultarCriptomonedas = async () => {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    try {
        const resp = await fetch( url );
        const resultado = await resp.json();
        const criptomonedas = await obtenerCriptononedas( resultado.Data );
        selectCriptomonedas( criptomonedas);
    } catch (error) {
        console.log(error);
    }
}

/** 
 * * Crear el select para inyectar las criptomonedas al html
*/
const selectCriptomonedas = ( criptomonedas ) => {
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedaSelect.appendChild( option );
    });
}

/** 
 * *
*/
const submitFormulario = ( e ) => {
    e.preventDefault();
    // validar 
    const { moneda, criptomoneda } = objBusqueda;

    if ( moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos Campos son obligatorios');
        return;
    }

    consultarAPI();
}


/** 
 * * Mostrar Alerta en html
*/
const mostrarAlerta = ( msg ) => {
    const existeError = document.querySelector('.error');
    
    if ( !existeError ) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');

        divMensaje.textContent = msg;

        formulario.appendChild( divMensaje );

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

/** 
 * *
*/
const leerValor = ( e ) => {
    objBusqueda[e.target.name] = e.target.value;
}

/** 
 * * Consultar la API para traer la cotizacion
*/
const consultarAPI = async () => {
    const { moneda, criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    try {
        const resp = await fetch( url );
        const cotizacion = await resp.json();
        mostrarCotizacionHTML( cotizacion.DISPLAY[criptomoneda][moneda])
    } catch (error) {
        console.log(error);
    }
}

/** 
 * * Mostrar los resultados de la cotizacion en el HTML
*/
const mostrarCotizacionHTML = ( cotizacion ) => {
    limpiarHTML();

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, LASTDATE } = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `El precio más alto del día: <span>${HIGHDAY}</span>`

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `El precio más bajo del día: <span>${LOWDAY}</span>`

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `Variación últimas 24 horas: <span>${CHANGEPCT24HOUR} %</span>`

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Ultima Actualizacion: <span>${LASTUPDATE} %</span>`


    resultado.appendChild( precio );
    resultado.appendChild( precioAlto );
    resultado.appendChild( precioBajo );
    resultado.appendChild( ultimasHoras );
    resultado.appendChild( ultimaActualizacion );
}

/** 
 * * LIMPIAR HTML
*/
const limpiarHTML = () => {
    while ( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }
}

/** 
 * * Mostrar Spinner
*/
const mostrarSpinner = () => {
    limpiarHTML();
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild( spinner );
}


/** 
 * * EVENTOS
*/
document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario );

    monedaSelect.addEventListener('change', leerValor)
    criptomonedaSelect.addEventListener('change', leerValor)
});