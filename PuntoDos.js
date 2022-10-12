const animal = prompt("Digite el animal:")
const edades = []
let acumulador0a1 = 0
let acumulador1a3 = 0
let acumulador3mas = 0
if (animal === "jirafa") {

    for (let i = 0; i < 15; i++) {
        const edad = prompt(`Digite la edad de la jirafa ${i}:`)
        edades.push(edad)

    }
}
if (animal === "elefante") {

    for (let i = 0; i < 20; i++) {
        const edad = prompt(`Digite la edad del elefante ${i}:`)
        edades.push(edad)

    }
}

if (animal === "chompance") {

    for (let i = 0; i < 40; i++) {
        const edad = prompt(`Digite la edad del chompance ${i}:`)
        edades.push(edad)

    }


}
edades.forEach(edad => {
    if (edad > 0 && edad <= 1)
        acumulador0a1 = acumulador0a1 + 1
    if (edad > 1 && edad < 3)
        acumulador1a3 = acumulador1a3 + 1
    if (edad >= 3)
        acumulador3mas = acumulador3mas + 1

})
alert(`El porcentaje de 0 a 1 es: ${acumulador0a1 * 100 / edades.length}`)
alert(`El porcentaje de 1 a 3 es: ${acumulador1a3 * 100 / edades.length}`)
alert(`El porcentaje de 3 más es: ${acumulador3mas * 100 / edades.length}`)

