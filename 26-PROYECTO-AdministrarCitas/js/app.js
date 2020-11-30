/** 
 * * VARIABLES
 * 
*/
// * Referencias del html
const mascotaInput     = document.querySelector('#mascota'),
      propietarioInput = document.querySelector('#propietario'),
      telefonoInput    = document.querySelector('#telefono'),
      fechaInput       = document.querySelector('#fecha'),
      horaInput        = document.querySelector('#hora'),
      sintomasInput    = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

//
let editando; 


/** 
 * * CLASES
*/
/** 
 * * Manejo de la informacion de las citas
*/
class Citas {
    constructor() {
        this.citas = [];
    }

    //
    agregarCita( cita ) {
        this.citas = [ ...this.citas, cita ];
    }

    //
    eliminarCita( id ) {
        this.citas = this.citas.filter( cita => cita.id !== id );
    }

    //
    editarCita( citaActualizada ) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita );
    }
}


/** 
 * * Manejo de la interfas de usaurio
*/
class UI {

    imprimirAlerta( mensaje, tipo ) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-blok', 'col-12');

        //Agregar clase en base al tipo de error
        ( tipo === 'error') ? divMensaje.classList.add('alert-danger') : divMensaje.classList.add('alert-success');

        // Mensaje de error 
        divMensaje.textContent = mensaje;

        // Agregar al DOM 
        document.querySelector('#contenido').insertBefore( divMensaje, document.querySelector('.agregar-cita') );

        // Quitar la alerta despues de 5 segundos 
        setTimeout(() => {
            divMensaje.remove();
        }, 5000);
    }

    //
    imprimirCitas( { citas } ) {
        
        this.limpiarHTML();

        citas.forEach( cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bold');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bold">Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bold">Telefono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bold">Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bold">Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bold">Sintomas: </span> ${sintomas}
            `;


            // Boton eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = `Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
            btnEliminar.onclick = () => eliminarCita( id ); 

            // Añade boton editar 
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info', 'mr-2');
            btnEditar.innerHTML = `Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`;
            btnEditar.onclick = () => cargarEdicion( cita );
            // Agregar los parrafos al divCita 
            divCita.appendChild( mascotaParrafo );
            divCita.appendChild( propietarioParrafo );
            divCita.appendChild( telefonoParrafo );
            divCita.appendChild( fechaParrafo );
            divCita.appendChild( horaParrafo );
            divCita.appendChild( sintomasParrafo );
            divCita.appendChild( btnEliminar );
            divCita.appendChild( btnEditar );

            // Agregar las citas al html
            contenedorCitas.appendChild( divCita );
        });
        

    }

    //
    limpiarHTML() {
        while ( contenedorCitas.firstChild ) {
            contenedorCitas.removeChild( contenedorCitas.firstChild );
        }
    }
}


/** 
 * * Instancias de clases
*/
const ui = new UI();
const administradorCitas = new Citas();


// * Objeto con la informacion de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',
};



/** 
 * * FUNCIONES
 * * Agrega datos al objeto de cita
*/
const datosCita = ( e ) => {
    citaObj[e.target.name] = e.target.value;
}


/** 
 * * Valida y agrega una nueva cita a la clase de citas
*/
const nuevaCita = ( e ) => {
    e.preventDefault();

    // extraer la informacion del objeto de cita 
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;
    // Validar
    if ( mascota ==='' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ) {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if ( editando ) {
        ui.imprimirAlerta('Editado correctamente');

        administradorCitas.editarCita( {...citaObj });

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        // Quitar modo edicion
        editando = false;

    } else {
        // generar un id para cada cita 
        citaObj.id = Date.now();
        // Creando una nueva cita
        administradorCitas.agregarCita( { ...citaObj } );
        // Mensaje de agregado correctamente 
        ui.imprimirAlerta('Se agregó correctamente');
    }


    //reiniciar el ojetojeto global 
    reinierObjeto();
    // reiniciar el formulario 
    formulario.reset();
    // Mostrar el html 
    ui.imprimirCitas( administradorCitas );
    
}


/** 
 * * Eliminar cita
*/
const eliminarCita = ( id ) => {
    administradorCitas.eliminarCita( id );

    ui.imprimirAlerta('La cita se eliminó correctamente');

    ui.imprimirCitas( administradorCitas );
    console.log( administradorCitas );
}

/** 
 * * Carga los datos y el modo edicion
*/
const cargarEdicion = ( cita ) => {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    // llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // llenar el objeto 
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // cambiar el texto del boton 
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambiaos';

    editando = true;
}


/** 
 * * Reiniciar el objeto global citasObj
*/
const reinierObjeto = () => {
        citaObj.mascota     = '';
        citaObj.propietario = '';
        citaObj.telefono    = '';
        citaObj.fecha       = '';
        citaObj.hora        = '';
        citaObj.sintomas    = '';
}






/** 
 * * EVENTOS
*/
const eventListeners = () => {
    mascotaInput.addEventListener( 'input', datosCita );
    propietarioInput.addEventListener( 'input', datosCita );
    telefonoInput.addEventListener( 'input', datosCita );
    fechaInput.addEventListener( 'input', datosCita );
    horaInput.addEventListener( 'input', datosCita );
    sintomasInput.addEventListener( 'input', datosCita );

    formulario.addEventListener('submit', nuevaCita);
}

eventListeners()
