categoria1 = 0;
categoria2 = 0
categoria3 = 0
categoria4 = 0
categoria5 = 0
total = 0
let descuento;
let respuesta;
const precio = prompt("Digite el precio del boleto:")
do {
    const edad = prompt("ingresa la edad:")
    if (edad < 5) {
        alert("No se permiten menores de 5 años :c")
    } else {
        if (edad <= 14) {
            descuento = precio * 0.35;
            categoria1 = categoria1 + descuento
        }
        else if (edad <= 19) {
            descuento = precio * 0.25;
            categoria2 = categoria2 + descuento
        }
        else if (edad <= 45) {
            descuento = precio * 0.10
            categoria3 = categoria3 + descuento
        }
        else if (edad <= 65) {
            descuento = precio * 0.25;
            categoria4 = categoria4 + descuento
        }
        else if (edad > 65) {
            descuento = precio * 0.35
            categoria5 = categoria5 + descuento
        }
        alert(`El descuento aplicado es: $ ${descuento}`)
        total = total + descuento
    }
    respuesta = prompt("Deseas continuar: 1.salir - otro numero para continuar")
} while (respuesta != 1);
alert(`El descuento total de la categoria 1 es: ${categoria1}`)
alert(`El descuento total de la categoria 2 es: ${categoria2}`)
alert(`El descuento total de la categoria 3 es: ${categoria3}`)
alert(`El descuento total de la categoria 4 es: ${categoria4}`)
alert(`El descuento total de la categoria 5 es: ${categoria5}`)
alert(`El descuento total es:$ ${total}`)