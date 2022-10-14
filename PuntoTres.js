const trabajadores = prompt("Digite el numero de trabajadores:")
let salario
let x = 1

while (x <= trabajadores) {
    const horas = prompt(`Digite el numero de horas trabajadas por el trabajador ${x}:`)
    if (horas <= 40) {
        salario = horas * 20;
    }
    if (horas > 40) {
        horasExtra = horas - 40;
        salario = 40 * 20 + (horasExtra * 25)
    }
    alert(`El salario del trabajador ${x} es: $ ${salario}`)

    x++
}

