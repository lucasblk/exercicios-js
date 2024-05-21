function converteSegundo(segundos) {
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC',
    });
}

let timer = document.querySelector('#timer');
let iniciar = document.getElementById('#iniciar');
let pausar = document.getElementById('#pausar');
let zerar = document.getElementById('#zerar');

let segundos = 0
let timerSeconds;
let comecou = false

timer.classList.remove('pausado')

function startSegundos() {
    if (comecou == false) {
    timerSeconds = setInterval(function() {
        segundos++;
        timer.innerHTML = converteSegundo(segundos);
    }, 1000);
    comecou = true
    timer.classList.remove('pausado')
}
}

function pauseSegundos() {
    if (comecou = true) {
    clearInterval(timerSeconds);
    comecou = false;
    timer.classList.add('pausado')
}
}

function stopSegundos() {
    if (comecou = true) {
    clearInterval(timerSeconds);
    segundos = 0;
    timer.innerHTML = '00:00:00'
    comecou = false;
    timer.classList.remove('pausado')
    }
}