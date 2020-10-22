//Creamos una funcion que recibe un array por parametros

function principioFin(array) {
  //Recorremos ese array desde el indice 0 hasta su último indice y sacamos por consola sus valores
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

//Exportamos la función
module.exports = principioFin;
