//Creamos la función numerosConsecutivos que recibirá un número por parámetros

function numerosConsecutivos(numero) {
  //Creamos un array vacío
  let array = [];
  //Como queremos que el array tenga los 10 números consecutivos al numero que nos llega por parámetros
  //hacemos un bucle for donde i será igual a 1 y la codición será i <= 10
  //i es 1 porque queremos sumarle i al número que nos llega por parámetros. Si le sumamos 0 no estaríamos añadiendo un número consecutivo si no el mismo
  for (let i = 1; i <= 10; i++) {
    //Hacemos push al array del numero que nos llega por parámetros + i
    array.push(numero + i);
  }
  //devolvemos el array
  return array;
}

//exportamos la función
module.exports = numerosConsecutivos;
