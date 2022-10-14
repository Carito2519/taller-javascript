let poblacionA = 25_000_000
let poblacionB = 19_900_000
let año = 1994
while (poblacionB <= poblacionA) {
    año = año + 1;
    poblacionA = poblacionA * 1.02 // poblacionA + poblacionA *0.02
    poblacionB = poblacionB + poblacionB * 0.03

}
alert(`la poblacion B superó a la poblacion A en el año ${año}`)