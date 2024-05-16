let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let res = document.getElementById('res');

function calcular() {
    let imc = Number(peso.value) / Number(altura.value**2);

    if (peso.value < 20 || peso.value > 300 || peso.value == '' || imc.value == 0) {
        res.style.display = 'block';
        res.innerHTML='Por favor, Digite um peso entre 20 a 300Kg';
        peso.value = '';
        altura.value = '';
    } else if (altura.value < 1.4 || altura.value > 2.3 || altura.value == '' || imc.value == 0) {
        res.style.display = 'block';
        res.innerHTML='Por favor, Digite uma altura entre 1.40 a 2.30 metros';
        peso.value = '';
        altura.value = '';
    } else if (imc < 18.5) {
        res.style.display = 'block';
        res.style.backgroundColor = 'red'
        res.innerHTML = `Resultado: ${Number(imc).toFixed(1)} <br>Abaixo do Peso`;
        }
        else if (imc >=18.5 && imc < 25) {
            res.style.display = 'block';
            res.style.backgroundColor = 'green'
            res.innerHTML = `Resultado: ${Number(imc).toFixed(1)} <br>Normal`;
            } else if (imc >= 25 && imc < 30) {
                res.style.display = 'block';
                res.style.backgroundColor = 'darkgreen'
                res.innerHTML = `Resultado: ${Number(imc).toFixed(1)} <br>Sobrepeso`;
            } else if (imc >=30 && imc < 35) {
                res.style.display = 'block';
                res.style.backgroundColor = 'red'
                res.innerHTML = `Resultado: ${Number(imc).toFixed(1)} <br>Obesidade Grau 1`;
            } else if (imc >=35 && imc < 40) {
                res.style.display = 'block';
                res.style.backgroundColor = 'red'
                res.innerHTML = `Resultado: ${Number(imc).toFixed(1)} <br>Obesidade Grau 2`;
            } else {
                res.style.display = 'block';
                res.style.backgroundColor = 'red'
                res.innerHTML = `Resultado: ${Number(imc).toFixed(1)} <br>Obesidade Grau 3`;
            }
     
    }
