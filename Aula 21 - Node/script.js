let texto = document.querySelector('.texto');
let p = texto.querySelectorAll('p');
let cssstyle = getComputedStyle(document.body);
let bgcolor = cssstyle.backgroundColor;

for (let ps of p) {
    ps.style.backgroundColor = bgcolor;
    ps.style.color = 'white'
}