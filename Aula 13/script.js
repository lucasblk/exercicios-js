
function carregar() {
    var tempo = new Date()
    var hora = tempo.getHours()
    var min = tempo.getMinutes()
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var bg = document.getElementById('body')
    
    msg.innerHTML = `Agora sao ${hora} horas e ${min} minutos`
    if (hora > 0 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora sao ${hora} horas e ${min} minutos`
        img.src = './imagens/manha.jpg'
        bg.style.background = '#65AFDC'

    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde! Agora sao ${hora} horas e ${min} minutos`
        img.src = './imagens/tarde.jpg'
        bg.style.background = '#FFCE7F'

    } else {
        msg.innerHTML = `Boa noite! Agora sao ${hora} horas e ${min} minutos`
        img.src = './imagens/noite.jpg'
        bg.style.background = '#1B3646'
    }

}
