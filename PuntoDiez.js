function resultados(votacion) {
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    for (let index = 0; index < votacion.length; index++) {
        if (votacion[index] == 1) {
            candidato1 = candidato1 + 1
        }
        if (votacion[index] == 2) {
            candidato2 = candidato2 + 1;
        }
        else {
            candidato3 = candidato3 + 1;
        }
    }
    if (candidato1 > candidato2 && candidato1 > candidato3) {
        alert(`El ganador es el candidato#1 con un total de votos de ${candidato1}`)
    }
    if (candidato2 > candidato1 && candidato2 > candidato3) {
        alert(`El ganador es el candidato#2 con un total de votos de ${candidato2}`)
    }
    if (candidato3 > candidato1 && candidato3 > candidato2) {
        alert(`El ganador es el candidato#3 con un total de votos de ${candidato3}`)
    }

    if (candidato1 == candidato2 && candidato2 == candidato3 && candidato3 == candidato1) {
        alert(`Se presenta un triple empate entre los candidatos`)
    }
    if (candidato1 == candidato2) {
        alert(`Se presenta un empate entre los candidato1 y candidato2`)
    }
    if (candidato2 == candidato3) {
        alert(`Se presenta unempate entre los candidato2 y candidato 3`)
    }
    if (candidato1 == candidato3) {
        alert(`Se presenta unempate entre los candidato1 y candidato 3`)
    }
    alert(`La cantida de votos en esta jornada electoral fue ${candidato1 + candidato2 + candidato3}`)
}