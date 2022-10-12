const carros = [
    {
        placa: 'abc321',
    },
    {
        placa: 'asd322',
    },
    {
        placa: 'asd323',
    },
    {
        placa: 'asd324',
    },
    {
        placa: 'asd325',
    },
    {
        placa: 'asd326',
    },
    {
        placa: 'asd327',
    },
    {
        placa: 'asd328',
    },
];

function puntoUno(array) {
    let amarillo = 0, rosa = 0, rojo = 0, verde = 0, azul = 0;

    array.forEach(elemento => {
        const ultimaLetra = elemento.placa.substr(elemento.placa.length - 1);
        if (ultimaLetra === '1' || ultimaLetra === '2') {
            amarillo++
        }
        if (ultimaLetra === '3' || ultimaLetra === '4') {
            rosa++
        }

        if (ultimaLetra === '5' || ultimaLetra === '6') {
            rojo++
        }
        if (ultimaLetra === '7' || ultimaLetra === '8') {
            verde++
        } if (ultimaLetra === '9' || ultimaLetra === '0') {
            azul++
        }
    });
    console.log(`Hay ${amarillo} carros amarillos`)
    console.log(`Hay ${rosa} carros rosas`)
    console.log(`Hay ${rojo} carros rojos`)
    console.log(`Hay ${verde} carros verdes`)
    console.log(`Hay ${azul} carros azules`)
}

puntoUno(carros);