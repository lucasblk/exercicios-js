var a = [3,5,9,2,7,1,6]
console.log(`O array tem ${a.length} posicoes`)
a.push(0)

for (posicao in a) {
    console.log(`O item da posicao ${posicao} tem o valor de ${a[posicao]}`)
}
