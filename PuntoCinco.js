const numeros = prompt("Digite el total de numeros:")
let numeroMenor
let x = 1

while (x <= numeros) {
    const n = prompt(`Digite el numero ${x}:`)
    if (x == 1) {
        numeroMenor = n
    }
    if (n < numeroMenor) {
        numeroMenor = n;
    }
    x++
}

alert(`El número menor es: ${numeroMenor}`)