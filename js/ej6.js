let base = parseFloat(prompt("Ingrese la base"))
let altura = parseFloat(prompt("Ingrese la altura "))
let perimetro = 2*(altura+base)
let perimetroCuadrado = 2*altura + 2*base
    if(base ===altura){
        document.write(`el perimetro del CUADRADO es: ${perimetroCuadrado} `)
    }
    else{
        document.write(`el perimetro del rectagnulo es: ${perimetro}`)
    }

}
CalcularPerimetro(perimetro)
