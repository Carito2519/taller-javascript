for (let i = 1; i < 100; i++) {
    let x = 1
    let contador = 0
    while (x <= i) {
        if (i % x == 0) {
            contador = contador + 1
        }
        x++
    }
    if (contador = 2) {
        alert(`El numero ${i} es primo`)
    }

}