function isValidCard(arr) {
  //var number = parseInt(prompt('Ingresa el numero de tu tarjeta'));

  //Pasar los numeros a un array en orden inverso
    for (var i = 0; i <number.length; i++){
        var item = number.pop();
        number.splice(i, 0, item);

    }
  //aplicar la operacion a los numeros de las posiciones pares
  var parPositions = ((number[i] % 2 === 0) * 2);

  //si el resultado de la multiplicacion es mayor o igual a 10, sumar sus digitos
  if (parPositions >= 10) {
    return (parPositions[i] % 10 + parPositions[i] %10)
  }
//sumar
var sum = number[0] + number[1] + number[2] + number[3] + number[4] +number[5] + number[6] + number[7] + number[8] + number[9];
if((sum % 10) === 0){
  return 'valido'
}
}
