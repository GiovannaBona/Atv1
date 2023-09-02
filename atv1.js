// 1) Registro de idade no console:
var suaIdade = 19;
console.log("Minha idade é: " + suaIdade);

// 2) Registrar o número de semanas de programação:
var numeroDeSemanas = 3;
console.log("Número de semanas programados: " + numeroDeSemanas);

// 3) Usando comentários:
/*Me leva pro show da Twice :,D*/

// 4) Criando variáveis de diferentes tipos:
let idade = 27;
console.log("Tenho: " + idade);
const nome = "Giovanna";
console.log("Meu nome é: " + nome);
var BTS = ["Kim Namjoon", "Kim Seokjin", "Min Yoongi", "Jung Hoseok", "Park Jimin", "Kim Taehyung", "Jeon Jungkook"];
console.log("O fanchat é: " + BTS);
let isARMY = true;
console.log("É army? " + isARMY);
var pessoa = {
    nome: "Gustavo",
    idade: 19,
    cidade: "São Paulo"
  };
console.log("Nome do namorado: " + pessoa.nome);
console.log("Idade do namorado: " + pessoa.idade);
console.log("Cidade do namorado: " + pessoa.cidade);

  
// 5) Adicionando 3.5 à sua idade:
let Idade = 19;
let resultado = Idade + 3.5;
console.log("O resultado somando minha idade mais 3.5 é: " + resultado);

// 6) Quantos anos se passaram desde o pouso na lua em 1969:
var dataAtual = new Date();
var anoAtual = dataAtual.getFullYear();
var reesultado = anoAtual - 1969;
console.log("Resultado de quantos anos se passaram desde o pouso na lua em 1969: " + reesultado);


// 7) Divisão de números:
var resultadodivisão = 65 / 240;
console.log("Valor da divisão é: " + resultadodivisão);

// 8) Multiplicação de números:
let resultadomultiplicacao = 0.2708 * 100;
console.log("Valor da multiplicação é: " + resultadomultiplicacao);

// 9) Concatenação de strings:
let primaString = 'Hello';
let segunString = 'World';
console.log(primaString + segunString);

// 10) Concatenação de strings com espaço:
let primeiString = 'Hello';
let segundString = 'World';
console.log(primeiString + ' ' + segundString);


// 11) Usando a propriedade length:
var aquelaString = 'Queria uma pizza agora';
var numeroDeCaracteres = aquelaString.length;
console.log(aquelaString + ", tem o total de: " + numeroDeCaracteres);

// 12) Usando o método toUpperCase():
const daleString = 'Giovanna Bona';
const stringMaiuscula = daleString.toUpperCase();
console.log("Capslock ó: " + stringMaiuscula);

// 13) Removendo espaços em branco:
var minhaString = ' BATATA ';
var stringsemespacos = minhaString.trim();
console.log("Sem espaço ó" + stringsemespacos);

// 14) Gerando um número aleatório:
let numeroaleat = Math.random();
let resultadoo = numeroaleat * 100;
console.log("O número aleatório é: " + resultado);


// 15) Encontrando o próximo inteiro maior:
let num = 43.8;
console.log(Math.ceil(num));

// 16) Verificando se um número é um número inteiro:
let n = 20;
console.log(Number.isInteger(n));


