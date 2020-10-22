//Instala el paquete exact-math usando npm. Crea un archivo .js y muestra por consola las siguientes operaciones utilizando el módulo instalado:
// 789+34+250443
// 2059-79
// 3.24*97.856
// 1205/12.002

//Después de introducir en la consola el comando npm init -y. Intro ducimos en consola el comando npm i exact-math
//para que nos instale el paquete "exact-math" en nuestro proyecto

//Importamos el módulo exact-math y lo guardamos en la variable exactMath
const exactMath = require("exact-math");

//exactMath es un objeto con distintos métodos. Cada metodo hace una operación matematica con los números que le pasamos por parametro
//y devuelve su valor. exactMath.add() devuelve la suma de los números introducidos por parámetro
//exactMath.sub() devuelve la resta, .mul  la multiplicacion y .div la division

let suma = exactMath.add(789, 34, 250443);
let resta = exactMath.sub(2059, 79);
let multiplicacion = exactMath.mul(3.24, 97.856);
let division = exactMath.div(1205, 12.002);

//sacamos en consola las variables donde hemos guardado los resultados
console.log(suma, resta, multiplicacion, division);
