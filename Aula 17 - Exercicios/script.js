var num = document.getElementById('numero')
let tabela = document.getElementById('tabela')
let res = document.getElementById('res')
let vetor = []

function isNumero(n) {
    if (Number(n) > 0 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        var item = document.createElement('option')
        item.innerHTML = `O valor ${num.value} foi adicionado`
        tabela.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Numero invalido ou repetido')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (vetor.length == 0) {
        window.alert('Adicione valores para finalizar')
    } else {
        var total = vetor.length
        var maior = vetor[0]
        var menor = vetor[0]
        var soma = 0
        var media = 0

        for (pos in vetor) {
            soma = soma + vetor[pos]


            if (vetor[pos] > maior) {
                maior = vetor[pos]
            }
            if (vetor[pos] < menor) {
                menor = vetor[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `No total temos ${total} valores cadastrados`
        res.innerHTML += `<p>O maior valor eh ${maior}</p>`
        res.innerHTML += `<p>O menor valor eh ${menor}</p>`
        res.innerHTML += `<p>A soma total eh ${soma}<p/>`
        res.innerHTML += `<p>A media foi de ${media}<p/>`

    }
}