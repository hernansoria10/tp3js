let respuesta;
let ciudades = [];

do {
    let ciudad = prompt('Agregue una ciudad');
    ciudades.push(ciudad);
    respuesta = confirm('¿Desea agregar una nueva ciudad?');
} while (respuesta === true);

document.write(ciudades.join(', '));
