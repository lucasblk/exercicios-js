// funcao calculando o fatorial de um numero
function fatorial(n) {
    var fat = 1
    for (c = n; c > 1; c--) {
        fat = fat * c
    } return fat
}

console.log(fatorial(0))
