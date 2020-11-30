/** 
 * * 
*/
import { obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';
(() => {
    /** 
     * * VARIABLES
     */

    const nombreInput   = document.querySelector('#nombre');
    const emailInput    = document.querySelector('#email');
    const empresaInput  = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput       = document.querySelector('#id');

    /** 
     * * FUNCIONES
    */
    const mostrarCliente = ( cliente ) => {
        const { nombre, empresa, email, telefono, id } = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }


    /** 
     * * Valida campos del formulario editar
    */
    const validarCliente = ( e ) => {
        e.preventDefault();

        const cliente = { 
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt( idInput.value)
        };

        if ( validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        editarCliente( cliente );
    }




    /** 
     * * EVENTOS
    */
    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt( parametrosURL.get('id') );
        
        const cliente = await obtenerCliente( idCliente );
        mostrarCliente( cliente );

        // Submit del formulario 
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
        
    });


})();




