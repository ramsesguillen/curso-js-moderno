/** 
 * 
 * 
*/

// ------------ Variable -------------
//
const max = new Date().getFullYear();
const min = max - 10;  

// Referencias al html 
const resultado   = document.querySelector('#resultado'),
      marca       = document.querySelector('#marca'),
      year        = document.querySelector('#year'),
      minimo      = document.querySelector('#minimo'),
      maximo      = document.querySelector('#maximo'),
      puertas     = document.querySelector('#puertas'),
      transmision = document.querySelector('#transmision'),
      color       = document.querySelector('#color');

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
};



// -------------- Funciones -----------
const mostrarAutos = ( autos ) => {

    limpiarHTML();

    autos.forEach( auto => {
         
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - precio: ${precio} - Color: ${color}
        `;

        // insertar en el html 
        resultado.appendChild( autoHTML );
    });
}


// LImpiar HtML
const limpiarHTML = () => {
    while ( resultado.firstChild ) {
        resultado.removeChild( resultado.firstChild );
    }
}


//
const llenarSelect = () => {

    for ( let i = max; i >= min; i-- ) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild( option )
    }
}


// Funciones que filtran en base a la búsqueda
const filtrarAuto = () => {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuerta ).filter( filtrarTransmicion ).filter( filtrarColor );
    
    if ( resultado.length ) {
        mostrarAutos( resultado );
    } else {
        noResultado();
    }
}


//
const noResultado = () => {
    limpiarHTML();

    const sinResultado = document.createElement('div');
    sinResultado.classList.add('alerta', 'error');
    sinResultado.textContent = 'No se encontraron resultados, Intenta con otros terminos de búsqueda';
    resultado.appendChild( sinResultado );
}

const filtrarMarca = ( auto ) => {
    const { marca } = datosBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }
    return auto;
}

//
const filtrarYear = ( auto ) => {
    const { year } = datosBusqueda;
    if ( year ) {
        return auto.year === year;
    }
    return auto;
}

//
const filtrarMinimo = ( auto ) => {
    const { minimo } = datosBusqueda;
    if ( minimo ) {
        return auto.precio >= minimo; // todos los precios arriba del minimo
    }
    return auto;
}

//
const filtrarMaximo = ( auto ) => {
    const { maximo } = datosBusqueda;
    if ( maximo ) {
        return auto.precio <= maximo;
    }
    return auto;
}

//
const filtrarPuerta = ( auto ) => {
    const { puertas } = datosBusqueda;
    if ( puertas ) {
        return auto.puertas === puertas;
    }
    return auto;
}

//
const filtrarTransmicion = ( auto ) => {
    const { transmision } = datosBusqueda;
    if ( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}

//
const filtrarColor = ( auto ) => {
    const { color } = datosBusqueda;
    if ( color ) {
        return auto.color === color;
    }
    return auto;
}






// ---------------- Eventos -------------- 

//
marca.addEventListener('change', ( e ) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});


//
year.addEventListener('change', ( e ) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});


//
minimo.addEventListener('change', ( e ) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});


//
maximo.addEventListener('change', ( e ) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});


//
puertas.addEventListener('change', ( e ) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});


//
transmision.addEventListener('change', ( e ) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});


//
color.addEventListener('change', ( e ) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});




document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos( autos );

    // llenar las opciones de años
    llenarSelect();
});
