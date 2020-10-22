//Creamos una funcion que recibe un array por parametros
function finPrinipcio(array) {
  //Recorremos ese array desde el indice 0 hasta su último indice y sacamos por consola sus valores
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
//Exportamos la función
module.exports = finPrinipcio;
