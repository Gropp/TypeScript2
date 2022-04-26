// a interface é uma estrutura de dados que podera ser repetida varias vezes
// utilize a interface para OBJETOS
interface userInterface {
    nome: string;
    idade: number;
    curso: string;
    anoMat: number;
};

// é possivel criar um type alias para a estrutura de dados, mas pode ser confuso
// a declaracao abaixo é valida, porem NAO USAR
// entao utiliza type alias somente para apelidar tipos composto e nao objetos
type userInterface2 = {
    nome: string;
    idade: number;
    curso: string;
    anoMat: number;
};

// vamos criar um objeto aluno com a estrutura da interface
let aluno: userInterface;

// igual para o aluno 2
let aluno1: userInterface;

// carrego o objeto
aluno = {
    nome: 'Fernando',
    idade: 49,
    curso: 'Typescript',
    anoMat: 2022,
}
console.log(aluno);

// carrego o objeto
aluno1 = {
    nome: 'Henrique',
    idade: 14,
    curso: 'Typescript',
    anoMat: 2022,
}
console.log(aluno1);
// ao inves de charma a funcao passando todas as propriedades
// function cadastro(aluno:{nome:string, idade:number, curso:string, anoMat:number}) {
// chamo a funcao usando a interface:
function cadastro(aluno:userInterface) {
    console.log(aluno.nome, aluno.idade, aluno.curso, aluno.anoMat);
    console.log(aluno);
}

cadastro({nome:'Elisa',idade: 21,curso: 'excell',anoMat: 2022 });