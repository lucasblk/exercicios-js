function verify () {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_digitado = document.getElementById('txtano')
    

    if (ano_digitado.value < 1920 || ano_digitado.value > ano_atual) {
        window.alert ('ERROR. Verifique o ano e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radio')
        var genero = ''
        var idade = ano_atual - Number(ano_digitado.value)
        var res = document.getElementById('res')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade < 14) {
                img.setAttribute('src', './imagens/crianca_m.jpg')
            } 
            else if (idade < 26){
                img.setAttribute('src', './imagens/jovem_m.jpg')
            } 
            else if (idade < 60) {
                img.setAttribute('src', './imagens/adulto_m.jpg')
            } 
            else {
                img.setAttribute('src', './imagens/idoso_m.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade < 14) {
                img.setAttribute('src', './imagens/crianca_f.jpg')
            } 
            else if (idade < 26){
                img.setAttribute('src', './imagens/jovem_f.jpg')
            } 
            else if (idade < 60) {
                img.setAttribute('src', './imagens/adulto_f.jpg')
            } 
            else {
                img.setAttribute('src', './imagens/idoso_f.jpg')
            }
        }
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.style.marginTop = '30px'
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.borderRadius = '50%'
        img.style.boxShadow = '0px 0px 10px black'
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
    
    
}

