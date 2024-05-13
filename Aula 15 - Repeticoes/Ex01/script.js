function contar() {

    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pace')
    var res = document.getElementById('res')
    var n_inicial = Number(inicio.value)
    var n_fim = Number(fim.value)
    var n_passo = Number(passo.value)
    var contagem = n_inicial
        
    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        res.innerHTML = '<br> [ ERRO ] Valores invalidos, tente novamente'
    } else {
        res.innerHTML = 'Contando...'
        for (contagem ; contagem <= n_fim ; contagem += n_passo) {
            res.innerHTML += `👉 ${contagem} `
        }
        for (contagem ; contagem >= n_fim ; contagem -= n_passo) {
            res.innerHTML += `👉 ${contagem} `
        } 
        res.innerHTML += '🚩'
        
    }
    
}