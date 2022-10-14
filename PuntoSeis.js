
for (let x = 0; x < 5; x++) {
    alert(`Persona ${x}`)
    const pesoAnterior = +prompt(`Ingresa tu peso anterior ${x}:`)
    let suma = 0;
    for (let i = 1; i < 10; i++) {
        const peso = +prompt(`ingrese el peso ${i}`)
        suma = suma + peso

    }
    if ((suma / 10) == pesoAnterior) {
        alert(`la persona ${x} se mantiene en el peso`)
    }
    if ((suma / 10) > pesoAnterior) {
        alert(`la persona ${x} subio de peso`)
    }
    else {
        alert(`la persona ${x} bajo de peso`)

    }
}
