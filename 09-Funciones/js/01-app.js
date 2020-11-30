
// Arrow function 

const aprendiendo = () => {
    console.log('aprendiendo javascript');
}

const aprendiendo2 = () => console.log('aprendiendo javascript');

const aprendiendo3 = () => 'aprendiendo javascript';

const aprendiendo4 = mensaje => console.log( mensaje);

const aprendiendo5 = ( tecnologia1, tecnologia2)  => `Aprendiendo ${tecnologia1} y ${tecnologia2}`;  

// const aprendiendo6 = ( mensaje ) => console.log( mensaje );
const aprendiendo6 = console.log;

aprendiendo();
aprendiendo2();
console.log( aprendiendo3() );

aprendiendo4( 'aprendiendo javascript' );

console.log( aprendiendo5('javascript', 'node.js'));


aprendiendo6('aprendiendo javascript funciones raras');


const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Osctubre','Noviembre','Diciembre']

// // const nuevoMes = meses.map( mes => {
// //     return `${mes} funciones`;
// });
const nuevoMes = meses.map( mes => `${mes} funciones` );
console.log( nuevoMes );
