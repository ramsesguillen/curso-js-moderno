/** 
 * * Entries itarator, values itarator y key iterator
 * * Entries imprime llave y valor
 * * values solo el valor
 * * keys solo retorna las llaves
*/

const ciudades = ['Londes', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set( [123, 231,  132, 102]);
const datos =  new Map();

datos.set('nombre', 'Diana');
datos.set('profesion','Psicologa')


// * Default
for ( let entry of ciudades ) {
    console.log( entry);
}
for ( let entry of ordenes ) {
    console.log( entry);
}
for ( let entry of datos ) {
    console.log( entry);
}



// * Key iterator 
/* 
for ( let entry of ciudades.keys() ) {
    console.log( entry);
}
for ( let entry of ordenes.keys() ) {
    console.log( entry);
}
for ( let entry of datos.keys() ) {
    console.log( entry);
}

 */
// * Values Iterator
/* 
for ( let entry of ciudades.values() ) {
    console.log( entry);
}
for ( let entry of ordenes.values() ) {
    console.log( entry);
}
for ( let entry of datos.values() ) {
    console.log( entry);
}
 */


// * Entries Iterator
/* 
for ( let entry of ciudades.entries() ) {
    console.log( entry);
}
for ( let entry of ordenes.entries() ) {
    console.log( entry);
}
for ( let entry of datos.entries() ) {
    console.log( entry);
}
 */