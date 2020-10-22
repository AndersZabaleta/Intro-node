// Crea un módulo propio con una función. La función esPar() devuelve “true” en caso de que el número sea par y “false” en caso contrario. En el archivo index.js, genera un número aleatorio, llama a la función esPar() y muestra el resultado de la función.

//Importamos la función esPar
const esPar = require("./esPar");

//Creamos un número aleatorio y lo guardamos en una variable
let numero = Math.floor(Math.random() * (1000 - 1)) + 1;

//Sacamos en consola el número aleatorio y si es par o no. La función esPar() recibe un número por parámetro y devuelve true o false. Dependiendo de si el numero el par o impar
console.log(`el número ${numero} es par: ${esPar(numero)}`);
