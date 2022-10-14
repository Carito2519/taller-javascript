function ventas(ventas) {
    for (let i = 0; i < ventas.length; i++) {
        let comision;
        alert(`El vendedor ${i} vendio ${ventas[i]}`)

        if (ventas[i] <= 20000000) {
            comision = 0.1;
        } else if (ventas[i] < 40000000) {
            comision = 0.15;
        }
        else if (ventas[i] < 80000000) {
            comision = 0.20
        }
        else if (ventas[i] < 160_000_000) {
            comision = 0.25
        }
        else {
            comision = 0.30
        }
        alert(`La comision del vendedor ${i} es ${comision}`)
    }

}