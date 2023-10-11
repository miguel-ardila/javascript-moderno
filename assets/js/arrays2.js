let juegos = ["Zelda", "Mario", "Valorant", "Pacman"]
console.log("largo: ", juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1 ];

console.log({primero, ultimo});

juegos .forEach((elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});

//agrega un nuevo elemento al final del array
let nuevaLongitud = juegos.push("Forza Horizon");
console.log({nuevaLongitud, juegos});

//agrega un nuevo elemento al inicio del array
nuevaLongitud = juegos.unshift("Crash bandico");
console.log({nuevaLongitud, juegos});

//elimina el ultimo elemento del array
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

//elimina cualquier posicion del array 
let pos = 1; // Índice desde donde se eliminarán los elementos
let juegosBorrados = juegos.splice(pos, 2); // Eliminar 2 elementos a partir del índice 1
console.log({juegosBorrados, juegos});
