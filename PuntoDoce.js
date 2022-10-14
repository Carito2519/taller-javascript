const n = prompt("Digite n:")
let sumaP = 0;
let contadorPares = 0;
let contadorImpares = 0;
let sumaI = 0;
let productoriaP = 1;
let productoriaI = 1;
alert(`n tiene: ${n.length} digitos`)
for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
        const x = +(n[i])
        sumaP = sumaP + x;
        contadorPares = contadorPares + 1;
        productoriaP = productoriaP * x;
    }
    else {
        const impares = +(n[i])
        sumaI = sumaI + impares
        contadorImpares = contadorImpares + 1
        productoriaI = productoriaI * impares
    }

}
alert(`n tiene ${contadorPares} numeros pares, la sumatoria de estos numeros es ${sumaP}, la productoria de estos numeros es ${productoriaP} y el promedio de estos numeros pares es ${sumaP / contadorPares} `)
alert(`n tiene ${contadorImpares} numeros Impares, la sumatoria de estos numeros es ${sumaI}, la productoria de estos numeros es ${productoriaI} y el promedio de estos numeros impares es ${sumaI / contadorImpares} `)