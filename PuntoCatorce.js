const numero1 = +prompt("Ingresa el primer numero:")
const numero2 = +prompt("Ingresa el segundo numero:")
if (numero1 > 0 && numero2 > 0) {
    let maximo = 1;
    let x = 1;
    while (x <= numero1) {
        if ((numero1 % x) == 0 && (numero2 % x) == 0)
            if (x > maximo) {
                maximo = x;
            }
        x++
    }
    alert(`El MCD es: ${maximo}`)
} else {
    alert("Debes ingresar numeros mayores a cero")

}