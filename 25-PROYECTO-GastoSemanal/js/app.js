/** 
 * 
*/

// ------------- Variables y Selectores ----------------
const formulario   = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');



// ------------- Clases ----------------

class Presupuesto {
    constructor( presupuesto) {
        this.presupuesto = Number( presupuesto );
        this.restante = Number( presupuesto );
        this.gastos = [];
    }

    
    //
    nuevoGasto( gasto ) {
        this.gastos = [ ...this.gastos, gasto ];
        // console.log( this.gastos);
        this.calcularGastado();
    }

    //
    calcularGastado() {
        const gastado = this.gastos.reduce( ( total, gasto ) => total + gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;
    }


    //
    eliminarGasto( id ) {
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );
        this.calcularGastado();
    }

}


//
class UI {
    insertarPresupuesto( cantidad ) {
        const { presupuesto, restante } = cantidad;

        // insertar al html 
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    //
    imprimirAlerta( mensaje, tipo ) {
        // Crear div 
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        ( tipo === 'error') ? divMensaje.classList.add('alert-danger') : divMensaje.classList.add('alert-success');

        // Mensaje de error 
        divMensaje.textContent = mensaje;

        //insertar en el html 
        document.querySelector('.primario').insertBefore( divMensaje, formulario );

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    //
    agregarGastoLista( gastos ) {

        this.limpiarHtml();
        //  iterar sobre los gastos 
        gastos.forEach( gasto => {
            const { cantidad, nombre, id } = gasto;

            // crear li 
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            // nuevoGasto.setAttribute('data-id', id);
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto 
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;

            // Boton borrar gasto 
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.textContent = 'Borrar';
            btnBorrar.onclick = () => {
                eliminarGasto( id );
            }
            nuevoGasto.appendChild( btnBorrar );

            // Agregar al HTML 
            gastoListado.appendChild( nuevoGasto );
        });
    }

    //
    limpiarHtml() {
        while ( gastoListado.firstChild ) {
            gastoListado.removeChild( gastoListado.firstChild );
        }
    }

    //
    actualizarRestante( restante ) {
        document.querySelector('#restante').textContent = restante;
    }

    //
    comprovarPresupuesto( presupuestoObj ) {
        const { presupuesto, restante } = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        // comprovar 25% 
        if ( ( presupuesto / 4 ) > restante ) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if( ( presupuesto / 2 ) > restante ) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // si el total es o0 o menor 
        if ( restante <= 0 ) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"').disabled = true;
        }
    }


}

// Instaciar 
const ui = new UI();

let presupuesto;




// ------------- funciones ----------------
const preguntarPresupuesto = () => {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    if ( preguntarPresupuesto === '' || presupuestoUsuario === null || isNaN( presupuestoUsuario )  || presupuestoUsuario <= 0 ) {
        window.location.reload();
    }

    // Presupuesto valido 
    presupuesto = new Presupuesto( presupuestoUsuario );

    ui.insertarPresupuesto( presupuesto );
}


//
const eliminarGasto = ( id ) => {
    // eliminar del objeto 
    presupuesto.eliminarGasto( id );
    const { gastos, restante } = presupuesto;
    // eliminar del html 
    ui.agregarGastoLista( gastos );
    ui.actualizarRestante( restante );
    ui.comprovarPresupuesto( presupuesto );
} 



// ------------- Eventos ----------------
const cargarEventos = () => {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener( 'submit', agregarGasto);
}


const agregarGasto = ( e ) => {
    e.preventDefault()

    // leer los datos del formulario 
    const nombre   = document.querySelector('#gasto').value;
    const cantidad = Number( document.querySelector('#cantidad').value );

    // Validar 
    if ( nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if ( cantidad <= 0 || isNaN( cantidad ) ) {
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }

    // Generar un objeto con el gasto 
    const gasto = { nombre, cantidad, id: Date.now() };
    
    // Añade un  nuevo gasto
    presupuesto.nuevoGasto( gasto );
    //imprimir mensaje ok
    ui.imprimirAlerta('Gasto agregado correctamente');

    // Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.agregarGastoLista( gastos );

    ui.actualizarRestante( restante );

    ui.comprovarPresupuesto( presupuesto );


    // Reinicia el fprmulario 
    formulario.reset();
}





// Iniciar app 
cargarEventos();