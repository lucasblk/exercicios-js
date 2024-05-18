
// let dia = data.getDay();
// let diaMes = data.getDate();
// let mes = data.getMonth() + 1;
// let ano = data.getFullYear();
// let hora = data.getHours();
// let minuto = data.getMinutes();
// let res = document.querySelector('div#res');

// res.innerHTML = `${dia_atual(dia)} - ${diaMes} de ${mes_atual(mes)} de ${ano} , ${hora}:${minuto} `

// function dia_atual (dia) {
//     let diaSemanaTexto;

//     switch (dia) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-Feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terca-Feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-Feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-Feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-Feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sabado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = '';
//             return diaSemanaTexto;
//     }
// }
// function mes_atual (mes) {
//     let diaSemanaTexto;

//     switch (mes) {
//         case 1:
//             diaSemanaTexto = 'Janeiro';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Fevereiro';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Marco';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Abril';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Maio';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Junho';
//             return diaSemanaTexto;
//         case 7:
//             diaSemanaTexto = 'Julho';
//             return diaSemanaTexto;
//         case 8:
//             diaSemanaTexto = 'Agosto';
//             return diaSemanaTexto;
//         case 9:
//             diaSemanaTexto = 'Setembro';
//             return diaSemanaTexto;
//         case 10:
//             diaSemanaTexto = 'Outubro';
//             return diaSemanaTexto;
//         case 11:
//             diaSemanaTexto = 'Novembro';
//             return diaSemanaTexto;
//         case 12:
//             diaSemanaTexto = 'Dezembro';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = '';
//             return diaSemanaTexto;
//     }
// }
let data = new Date();
let res = document.querySelector('div#res');
res.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});
res.innerHTML += ` - `;
res.innerHTML += data.toLocaleTimeString('pt-BR', {timeStyle: 'short'});