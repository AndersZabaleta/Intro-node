//Creamos la funcion menor() que recibe dos números por parámetro

function menor(num1, num2) {
  //si num1 es menor a num2 devolvemos num1
  if (num1 < num2) {
    return num1;
    //si no devolvemos num2
  } else {
    return num2;
  }
}

//exportamos la función

module.exports = menor;
