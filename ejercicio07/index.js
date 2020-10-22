// Escribe un módulo propio con una función que crea un array con 10 valores consecutivos. Estos valores serán los 10 números siguientes a un número que recibe por parámetro. Escribe otro módulo en el que se genera un número aleatorio. Importa los dos y pasa el parámetro aleatorio al que crea el array de 10 números y muestra por consola el resultado.

//importamos los dos módulos que exportamos. Uno desde el archivo array.js y el otro desde el archivo aleatorio.js
let numerosConsecutivos = require("./array");
let aleatorio = require("./aleatorio");

//Creamos una variable y le damos el valor que devuelve la función numerosConsecutivos a la que le pasamos la variable aleatorio por parámetros
let array = numerosConsecutivos(aleatorio);

//sacamos en consola la variable array
console.log(array);
