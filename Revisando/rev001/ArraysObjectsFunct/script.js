function enviar() {
    let res = document.getElementById('res');
    let nome = document.querySelector('#nome');
    let sobrenome = document.querySelector('#sobrenome');
    let idade = document.querySelector('#idade');
    let peso = document.querySelector('#peso');
    let item = document.createElement('div')
    res.appendChild(item)
    item.innerHTML = `<p> Nome: ${nome.value} ${sobrenome.value} </p><p> Idade: ${idade.value} anos</p><p> Peso: ${peso.value}Kg</p>`;
    
    let array = [nome.value, sobrenome.value, idade.value, peso.value];
    
    function lista() {
    item.innerHTML += `O array: ${array}`;}
    lista();

}



