import axios from 'axios';
import {name} from './exporting.js'
console.log(name);

//tipagem implicita
const myName = "Fernando Gropp";
console.log(myName);

//tipagem explicita
let variavelVazio: boolean;
variavelVazio = true;
console.log(variavelVazio);


let myEmail: string = "Fernando@gmail.com";
console.log(myEmail);

//tipagem explicita
let myAge: number = 49;
console.log(myAge);

let masculino:boolean = true;
console.log(masculino);

//union type
let isAdmin: boolean|string = true;
console.log(isAdmin);
isAdmin = "sim";
console.log(isAdmin);

//arrays - objetos
let person = ['fernando', 'masculino', 49, 1.92];
console.log(person);
//outra forma de declarar
let person2:(string|number)[];
person2 = ['viviani', 'feminino', 38, 1.70];
console.log(person2);

let array:string[];
//inicializa o array zerado
//para poder usar propriedades do array, como o push, p.ex.
let arrayUnionType: (string|number)[] = [];

//se vc puser um array aqui pode dar erro
let entidade: object
entidade = {
    name: 'Henrique',
    age: 14
}
 console.log(entidade);

 // para que isso nao aconteca, ja que um array tbm é um objeto, declare assim:
 let entidade2: {
     nome:string;
     idade:number;
 };

entidade2 = {
    nome:'Olivia',
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
let dado:(string|number|boolean)[] = [];
//declaracao fora de uso - inicializa vazio
let dado2:Array<string> = [];

//declaracao de variavel array com numero, tipos e ordem definidos
let tupla: [number, string] = [];
tupla = [49, 'ordem2'];
console.log(tupla);
//com o  push essa ordem e qtdade nao funciona
tupla.push(1,'teste');
tupla.push(2);
tupla.push('teste3');


//arrays de tuplas
let arrayTupla: [boolean, number][];
arrayTupla = [[true, 10], [false, 5], [false, 1]];
arrayTupla.push([true, 15]);

console.log(arrayTupla);
console.log(arrayTupla[2]);

