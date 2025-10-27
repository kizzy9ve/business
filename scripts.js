/*
var nome = "Kaua";
var sobrenome = 'Ferreira';
var idade = 21;
var maiorDeIdade = true;
console.log(nome + ' ' + sobrenome);
console.log(idade);
console.log(maiorDeIdade);

if (maiorDeIdade) {
    console.log('Kaua é maior de idade');
} else {
    console.log('Ainda não é maior de idade');
}

var hora = 20;

if (hora < 12) {
    console.log('Bom dia');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}
*/

//var pessoa = {
//  nome: 'Kaua',
// idade: 21,
//maiorDeIdade: true
//}
//console.log(pessoa);

//var jogos = ['Free Fire', 'Valorant', 'GTA', 'Counter Strike', 'Mario', 'Zelda'];
//console.log(jogos);
//console.log(jogos.length);

// var i = 0;
// console.log(jogos[i]);
// i++;
// console.log(jogos[i]);
// i++;
// console.log(jogos[i]);
// i++;
// console.log(jogos[i]);

// for (var i = 0; i < jogos.length; i++) {
//     console.log(jogos[i]);
// }

/*

1 - Temos um array de objetos comos dados
2 - Preparar um container HTML para receber os dados do Javascript
3 - Buscar esse elemento com o Javascript
4 - Percorrer o array com os objetos
5 - Criar um novo elemento HTML com as informações contidas no array
6 - Jogar o novo HTML montado no container HTML

*/

var parceiros = [
    {
        nome: 'Google',
        imagem: 'logos_google.png'
    },
    {
        nome: 'Microsoft',
        imagem: 'logos_microsoft.png'
    },
    {
        nome: 'Amazon',
        imagem: 'logos_amazon.png'
    },
    {
        nome: 'Uber',
        imagem: 'logos_uber.png'
    },
    {
        nome: 'Dropbox',
        imagem: 'logos_dropbox.png'
    },
    {
        nome: 'IBM',
        imagem: 'logos_ibm.png'
    },
];

var containerListaLogos = document.querySelector('#lista-dinamica');

for (var i = 0; i < parceiros.length; i++) {
    // console.log(parceiros[i]);
    var item = document.createElement('li');
    item.classList.add('partner');

    var nome = document.createElement('p');
    nome.innerText = parceiros[i].nome;
    item.appendChild(nome);

    var imgLogo = document.createElement('img');
    imgLogo.src = './imagens/' + parceiros[i].imagem;
    imgLogo.alt = 'Logo ' + parceiros[i].nome;
    item.appendChild(imgLogo);

    containerListaLogos.appendChild(item);
}


var dinamico = [
    {
        imagem: 'ico_feat_1.png',
        title: 'OpenType features Variable font',
        text: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imagem: 'ico_feat_2.png',
        title: 'Design with real data',
        text: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imagem: 'ico_feat_3.png',
        title: 'Fastest way to take action',
        text: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
];
var containerdinamico = document.querySelector('#blocos-dinamicos');
for (var i = 0; i < dinamico.length; i++) {
    // console.log(dinamico[i]);
    var item = document.createElement('li');

    var imgLogo = document.createElement('img');
    imgLogo.src = './imagens/' + dinamico[i].imagem;
    imgLogo.alt = 'ico ' + dinamico[i].title; text
    item.appendChild(imgLogo);

    var title = document.createElement('h3');
    title.innerText = dinamico[i].title;
    item.appendChild(title);

    var text = document.createElement('p');
    text.innerText = dinamico[i].text;
    item.appendChild(text);


    containerdinamico.appendChild(item);
}


var colunas = [
    {

        title: 'FREE',
        text: 'Organize across all apps by hand',
        text2: '0$ per month',
        text3: 'Pricing feature',
        list: ['0$ per month', 'Pricing feature'],
        hightlight: false,
    },
    {

        title: 'STANDARD',
        text: 'Organize across all apps by hand',
        text2: '10$ per month',
        text3: 'Pricing feature',
        list: ['10$ per month', 'Pricing feature'],
        hightlight: true,
    },
    {

        title: 'BUSINESS',
        text: 'Organize across all apps by hand',
        text2: '99$ per month',
        text3: 'Pricing feature',
        list: ['99$ per month', 'Pricing feature'],
        hightlight: false,
    },
];
var containerblocks = document.querySelector('#secao-blocos');
for (var i = 0; i < colunas.length; i++) {
    // console.log(dinamico[i]);
    var item = document.createElement('li');
    item.id = 'color' + (i + 1);

    item.classList.add('plano');

    // if (i == 1) {
    //     item.classList.add('destaque');
    // }
    
    if (colunas[i].hightlight == true) {
        item.classList.add('destaque');
    }

    var title = document.createElement('h3');
    title.innerText = colunas[i].title; text, text2, text3;
    item.appendChild(title);

    var text = document.createElement('p');
    text.innerText = colunas[i].text;
    item.appendChild(text);

    var text2 = document.createElement('p');
    text2.innerText = colunas[i].text2;
    item.appendChild(text2);

    var text3 = document.createElement('p');
    text3.innerText = colunas[i].text3;
    item.appendChild(text3);
    containerblocks.appendChild(item);
}













// Exemplo 1: Array de objetos com dados pré-definidos
// let produtos = [
//   { nome: "Notebook", preco: 3500 },
//   { nome: "Mouse", preco: 50 },
//   { nome: "Teclado", preco: 150 }
// ];

// // Exemplo 2: Adicionando um objeto a um array existente
// let usuarios = [];
// usuarios.push({ id: 1, nome: "Ana" });
// usuarios.push({ id: 2, nome: "Bruno" });

// console.log(produtos);
// console.log(usuarios);

const numeros = [1, 2, 3, 4, 5, 6];
for (const i = 0; i < numeros.length; i++) {
    if (i == 3 || i == 4) {
        continue;
    }
    // console.log(numeros[i]);
    // espera(numeros[i]);
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

function espera(i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}