let texto = document.querySelector('.texto');
let addTarefa = document.querySelector('.addtask');
let lista = document.querySelector('.lista')

function criaTarefa() {
    let li = document.createElement('li');
    if (texto.value === '') {
        alert('Por favor, preencha o campo abaixo!');
        texto
        texto.focus();
    } else {
    li.innerHTML = texto.value;
    lista.appendChild(li);
    criaApagar(li);
    texto.value = '';
    texto.focus();
    return li
}
}


function criaApagar(li) {
    li.innerHTML += ' ';
    let botaoDeApagar = document.createElement('button');
    botaoDeApagar.innerHTML = 'apagar';
    li.appendChild(botaoDeApagar);
    botaoDeApagar.setAttribute('class', 'apagar');
    return botaoDeApagar
}

document.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        criaTarefa(texto.value);
        texto.value = '';
        texto.focus();
    };
})

document.addEventListener('click', function(e) {
    let el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
})