const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Osctubre','Noviembre','Diciembre']



const nuevoMes =  meses.map( (value, index) => {
    
    if ( value === 'Abril' || value ==='Noviembre') {
     value = `${value} Cumpleaños`;   
    } 
    return value
});


console.table(nuevoMes);



