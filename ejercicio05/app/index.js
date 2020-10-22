// Crea un módulo propio y declara una variable con tu nombre. Exporta esa variable, crea una carpeta llamada “app” y mete el archivo index.js ahí. Importa el módulo y muestra tu nombre por consola.

//importamos el módulo nombre.js

let nombre = require("../nombre.js");

//nombre es una variable que contiene un string. Sacamos en consola "hola " + el valor de nombre
console.log("hola " + nombre);
