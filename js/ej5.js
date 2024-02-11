let Cadena = prompt("ingrese una cadena de texto");
function detectarMayMin(cadenaAnalizar) {
  if (Cadena == Cadena.toLocaleUpperCase()) {
    document.write(`La cadena "${Cadena}" esta formada solo por mayusculas `);
  } else if (Cadena == Cadena.toLocaleLowerCase()) {
    document.write(`La cadena "${Cadena}" esta formada solo por minusculas `);
  } else {
    document.write(
      `La cadena "${Cadena}" esta formada por mayusuclas y minusculas`
    );
  }
}
detectarMayMin(Cadena);
