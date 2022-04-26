import { name } from './exporting.js';
import { checkStatus } from './status.js';
console.log(name);
//tipagem implicita
const myName = "Fernando Gropp";
console.log(myName);
//tipagem explicita
let variavelVazio;
variavelVazio = true;
console.log(variavelVazio);
let myEmail = "Fernando@gmail.com";
console.log(myEmail);
//tipagem explicita
let myAge = 49;
console.log(myAge);
let masculino = true;
console.log(masculino);
//union type
let isAdmin = true;
console.log(isAdmin);
isAdmin = "sim";
console.log(isAdmin);
//arrays - objetos
let person = ['fernando', 'masculino', 49, 1.92];
console.log(person);
//outra forma de declarar
let person2;
person2 = ['viviani', 'feminino', 38, 1.70];
console.log(person2);
let array;
//inicializa o array zerado
//para poder usar propriedades do array, como o push, p.ex.
let arrayUnionType = [];
//se vc puser um array aqui pode dar erro
let entidade;
entidade = {
    name: 'Henrique',
    age: 14
};
console.log(entidade);
// para que isso nao aconteca, ja que um array tbm é um objeto, declare assim:
let entidade2;
entidade2 = {
    nome: 'Olivia',
    idade: 0.7,
};
console.log(entidade2);
//depois de iniciado o objeto eu posso trabalhar com ele
entidade2.nome = 'Yeda';
entidade2.idade = 52;
console.log(entidade2);
//declaracao explicita
let data = ['nome', 10, true];
//declaracao implicita - inicializa vazio
let dado = [];
//declaracao fora de uso - inicializa vazio
let dado2 = [];
//declaracao de variavel array com numero, tipos e ordem definidos
let tupla;
tupla = [49, 'ordem2'];
console.log(tupla);
//com o  push essa ordem e qtdade nao funciona
tupla.push(1, 'teste');
tupla.push(2);
tupla.push('teste3');
//arrays de tuplas
let arrayTupla;
arrayTupla = [[true, 10], [false, 5], [false, 1]];
arrayTupla.push([true, 15]);
console.log(arrayTupla);
console.log(arrayTupla[2]);
console.log(checkStatus(1));
console.log(checkStatus(2));
console.log(checkStatus(3));
console.log(checkStatus(4));
