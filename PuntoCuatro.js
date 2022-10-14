const alumnos = prompt("digite la cantidad de alumnos:")

let x = 1;
let edadMujeres = 0;
let numeroMujeres = 0;
let promedioMujeres = 0;
let edadHombres = 0;
let numeroHombres = 0;
let promedioHombres = 0;

while (x <= alumnos) {
    const sexo = +prompt("Digite un numero deacuerdo a su sexo: 1. Mujer 2. Hombre")
    const edad = +prompt("Digite su edad")
    if (sexo == 1) {
        edadMujeres = edadMujeres + edad;
        numeroMujeres = numeroMujeres + 1
        promedioMujeres = edadMujeres / numeroMujeres
    }
    if (sexo == 2) {
        edadHombres = edadHombres + edad;
        numeroHombres = numeroHombres + 1
        promedioHombres = edadHombres / numeroHombres
    }
    x++

}
alert(`El promedio de todas las edades es: ${(edadMujeres + edadHombres) / alumnos}`);
alert(`El promedio de las edades de las mujeres es: ${promedioMujeres}`)
alert(`El promedio de las edades de los Hombres es: ${promedioHombres}`)