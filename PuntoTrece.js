const n = prompt("Digite n: ")
let sumapares = 0
let sumaImpares = 0
let sumaCeros = 0
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
for (let y = 1; y <= n; y++) {
    let vr = fib(y);
    if (vr % 2 == 0) {
        sumapares = sumapares + 1;
    }
    else {
        sumaImpares = sumaImpares + 1;
    } if (vr == 0) {
        sumaCeros = sumaCeros + 1;
    }
}
alert(`En la serie hay ${sumapares} pares`)
alert(`En la serie hay ${sumaImpares} impares`)
alert(`En la serie hay ${sumaCeros} ceros`)
a