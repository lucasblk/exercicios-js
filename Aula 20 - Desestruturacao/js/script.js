let elementos = [
    {tag:'p', texto: 'Paragrafo'},
    {tag: 'div', texto: 'div'},
    {tag: 'footer', texto: 'futer'},
    {tag: 'section', texto: 'sessao'},
];
let container = document.querySelector('div#container')
let tamanho = elementos.length;
let div = document.createElement('div');

for (let i = 0; i < tamanho; i++) {
    let { tag , texto } = elementos[i];
    let createTag = document.createElement(tag);
    createTag.innerHTML = texto;
    div.appendChild(createTag)
}
container.appendChild(div)