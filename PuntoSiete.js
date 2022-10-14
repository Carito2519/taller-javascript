total = 0;
let respuesta
do {
    const cantidad = +prompt(`Ingrese la cantidad del articulos`)
    const precio = +prompt(`Ingrese el precio del articulos`)
    total = total + (cantidad * precio)
    respuesta = prompt("¿Desea finalizar la compra? 1.Si 2.No")
} while (respuesta == 2)
alert(`El total a pagar  por la compra es: ${total}`)
