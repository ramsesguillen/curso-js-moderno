
const arr = ['Juan', 'Pablo', 'Maria', 'Susana', 'Angel'];


// Desestructuracion de arreglos 

// const [user1, user2, user3] = arr;
const [, , user3] = arr; //maria 


// console.table( {user1, user2, user3} );
console.table({user3});

// operador Spred o rest 
const [, , ...arr2 ] = arr;  // maria, susana, angel

// console.table();
console.log(arr2);

