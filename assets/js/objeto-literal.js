// Se trata de una notación que permite crear objetos especificando en un listado las propiedades y sus valores.
// Los objetos literales se encierran entre llaves {} y las propiedades se separan por comas. 
// Cada propiedad del objeto se define con un par nombre/valor, donde el nombre (o clave) y el valor están separados por dos puntos.



let personaje = {
    nombre: "Juan",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    coords: {
        x: 0,
        y: 2
    },
    trajes: ["Mark 1", "Mark 2", "Hulkbuster"],
    direccion: {
        Zip: "10880, 90265",
        ubicacion: "Malibu, California",
        }
};

console.log(personaje);
console.log("nombre", personaje.nombre);
console.log("nombre", personaje["nombre"]);
console.log("Edad", personaje.edad);
console.log("Coords", personaje.coords.y);
console.log("No. Trajes, personaje.trajes.length");