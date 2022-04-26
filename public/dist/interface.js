"use strict";
;
// vamos criar um objeto aluno com a estrutura da interface
let aluno;
// igual para o aluno 2
let aluno1;
// carrego o objeto
aluno = {
    nome: 'Fernando',
    idade: 49,
    curso: 'Typescript',
    anoMat: 2022,
};
console.log(aluno);
// carrego o objeto
aluno1 = {
    nome: 'Henrique',
    idade: 14,
    curso: 'Typescript',
    anoMat: 2022,
};
console.log(aluno1);
// ao inves de charma a funcao passando todas as propriedades
// function cadastro(aluno:{nome:string, idade:number, curso:string, anoMat:number}) {
// chamo a funcao usando a interface:
function cadastro(aluno) {
    console.log(aluno.nome, aluno.idade, aluno.curso, aluno.anoMat);
    console.log(aluno);
}
cadastro({ nome: 'Elisa', idade: 21, curso: 'excell', anoMat: 2022 });
