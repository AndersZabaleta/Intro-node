//Escribe un módulo propio con una función que recibe por parámetro dos números y muestra por consola el menor de los dos. Impórtalo en un archivo index.js y muestra el resultado.

//Importamos el módulo "menor". Es una función que devuelve el número más pequeño
//de los dos que pasamos por parámetro

const menor = require("./menor");

//sacamos en consola lo que nos devuelve la función menor()
console.log(menor(5, 2));
