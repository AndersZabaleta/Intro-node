//Creamos la función esPar() que recibe un número por parámetro

function esPar(numero) {
  //si el resto de dividir el número que recibe por parámetro entro 2 no es igual a 0
  if (numero % 2 !== 0) {
    //devolvemos false
    return false;
  } else {
    //si es igual a 0 devolvemos true
    return true;
  }
}

//exportamos la funcion esPar

module.exports = esPar;
