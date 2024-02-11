let base = parseFloat(prompt("Ingrese la base"))
let altura = parseFloat(prompt("Ingrese la altura "))
let perimetro = 2*(altura+base)
let perimetroCuadrado = altura + base + altura + base
function CalcularPerimetro(formula){
    if(base ===altura){
        document.write(`el perimetro del CUADRADO es: ${perimetroCuadrado} `)
    }
    else{
        document.write(`el perimetro del rectagnulo es: ${perimetro}`)
    }

}
CalcularPerimetro(perimetro)
