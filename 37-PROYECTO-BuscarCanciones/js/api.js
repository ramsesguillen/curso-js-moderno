/** 
 * * Consultar la api
*/
import * as UI from './interfaz.js';

class API {
    constructor( artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    //
    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                console.log( data );
                
                if ( data.lyrics ) {
                    const { lyrics } = data; 
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de cancion: ${this.cancion} de ${this.artista}`;
                } else {
                    UI.divMensaje.textContent = 'Error... No se encontró la cancion';
                    UI.divMensaje.classList.add('error');
            
                    setTimeout(() => {
                        UI.divMensaje.textContent = '';
                        UI.divMensaje.classList.remove('error');
                    }, 3000);
            
                    return;
                }
            })
    }
}

export default API;