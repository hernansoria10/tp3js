let Numero = parseFloat(prompt("Digite un numero"));
function TablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    while (isNaN(Numero)) {
      Numero = parseFloat(prompt("por favor solo digite numeros"));
    }
    let multiplicacion = Numero * i;
    document.write(`${Numero}x${i} = ${multiplicacion}<br>`);
  }
}
TablaMultiplicar(Numero);
