let NumeroIngresado
function parOImpar(numero){
 NumeroIngresado = parseInt(prompt("ingrese un numero"));

while (isNaN(NumeroIngresado)) {
  alert("Por favor, ingrese solo numeros");
  NumeroIngresado = parseInt(prompt("ingrese un numero"));
}

if (NumeroIngresado % 2 === 0) {
  document.write(`${NumeroIngresado} es par`);
} else {
  document.write(`${NumeroIngresado} es impar`);
}
}
parOImpar(NumeroIngresado)
