//Escribe un módulo propio con una función que devuelva la longitud de un string que recibe como parámetro. Impórtalo en el archivo index.js y muestra por consola el resultado.

//importamos el módulo que exporta el archivo stringLength.js y lo guardamos en la variable medir
let medir = require("./stringLength");

//Medir es una función que recibe por parámetros un string y devuelve la longitud de este
//En el console.log() llamamos a la función medir y le pasamos un string por parametro.
//Esto nos sacara en consola la longitud del string
console.log(medir("Hola desde Node"));
