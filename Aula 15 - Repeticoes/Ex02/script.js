function calcular () {

    var num = document.getElementById('tn')
    var res = document.getElementById('res')
    var tab = document.getElementById('seltab')
    

    if (num.value.length == 0) {
        window.alert('Por favor insira um valor!')
    }
    else {
        var valor = Number(num.value)
        var mp = 1
        tab.innerHTML = ''
        while (mp <= 10) {
            var item = document.createElement('option')
            item.innerText = `${valor} x ${mp} = ${valor*mp}`
            tab.appendChild(item)
            tab.value = `tab${mp}`

            var div = document.getElementById('aaa')
            var item2 = document.createElement('p')
            item2.innerText = `${valor} x ${mp} = ${valor*mp}`
            div.appendChild(item2)
            mp++
        }
        
    }

}