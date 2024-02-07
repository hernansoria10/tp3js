let respuesta;
let ciudades = [];

do {
  let ciudad = prompt("Agregue una ciudad");
  ciudades.push(ciudad);
  respuesta = confirm("¿Desea agregar una nueva ciudad?");
} while (respuesta === true);

document.write(`El arreglo tiene ${ciudades.length} elemento/s`);
ciudades.push("Paris");
ciudades.splice(1, 0, "Barcelona");

let UltiPosicionUsuario = ciudades[ciudades.length - 2];
let UltiPosicionParis = ciudades[ciudades.length - 1];

document.write(` <ul>
<li>Elemento primer posicion: ${ciudades[0]}</li>
<li>Elemento tercer posicion: ${ciudades[3]}</li>
<li>Elemento ultima posicion: ${UltiPosicionUsuario}</li><br>
<li>Elemento ultima posicion: ${UltiPosicionParis}</li>

</ul>`);

document.write("<h1>Arreglo de ciudades</h1>");
document.write(`<ul>`);
for (let indice = 0; indice < ciudades.length; indice++) {
  document.write(`<li>Elemento: ${ciudades[indice]}</li>`);
}
document.write(`</ul>`);
